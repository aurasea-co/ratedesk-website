#!/usr/bin/env node
// Fails if a price of ours or a pricing link reaches the built output.
//
// Bible v3.7a (16 Nov 2026, Bo): the sites MAY now say "ฟรี" / "free" about the
// trial and the free plan, and state the trial length — both are true since the
// free plan and public sign-up exist (O1, O3). Those two rules are gone; every
// price rule stays.
//
// MD1 (Oct 2026): the partner testing period has started and pricing is
// REMOVED from the marketing sites — not hidden behind a flag. A price in the
// built HTML is a published price, so this scans the SERVED artefacts
// (rendered HTML, RSC payloads, client bundles), not the source: next-intl
// serialises message trees into the page, and that is where leaks hide.
//
// Rules:
//   1. A figure we charge (current or retired) next to ฿ / THB / บาท.
//      Not "any ฿ followed by digits": these sites legitimately show baht
//      that is not our price (a hotel's room rates in a phone mockup, a
//      delivery-commission worked example). Those exact strings are declared
//      per site in check-no-pricing.config.json → "allow".
//   2–3. (removed in v3.7a: "ฟรี"/"free" and trial lengths)
//   4. A link to a pricing section or page: "#pricing", "/pricing".
//   5. Structured-data prices: JSON-LD "offers" / "price" / "priceCurrency".
//
// IX2 (16 Nov 2026): the Khao Yai Index shows MARKET prices, and a market median can be exactly ฿990. In the rendered
// HTML its whole block is one <section data-market-index> (KhaoYaiSection, nothing nested), and that region — only
// that — is cut out before the figure rules run. Its prices reach the RSC payload as bare numbers (no ฿), and the
// feed's summary sentences carry no baht figure, so nothing else needs excusing. Any other section stays checked.
//
// Rules 2–5 are excused only by an exact substring in "allowText" (e.g. the
// unchanged terms page's "Free trials" section) or for files whose path
// contains one of "skipPaths". Keep both lists minimal and explicit.

import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

/** Prices we charge, current and retired. */
const FIGURES = [890, 990, 399, 199, 99, 590, 575, 290, 390, 190]

let config = {}
try {
  config = JSON.parse(readFileSync('check-no-pricing.config.json', 'utf8'))
} catch {
  /* no config — allow nothing */
}
const ALLOW = config.allow ?? []
const ALLOW_TEXT = config.allowText ?? []
const SKIP_PATHS = config.skipPaths ?? []

const RULES = [
  ...FIGURES.map((n) => ({
    name: `price ${n}`,
    re: new RegExp(
      `(?:฿|THB\\s*|บาท\\s*)${n}(?![0-9])|(?<![0-9,.])${n}\\s*(?:บาท|THB)`,
      'g',
    ),
    allow: ALLOW,
    text: false,
  })),
  ...[
    { name: 'pricing link', re: /#pricing\b|(?<![\w[\]-])\/(?:(?:en|th)\/)?pricing(?![\w-])/g },
    { name: 'JSON-LD price', re: /\\?"(?:offers|price|priceCurrency)\\?"\s*:/g },
  ].map((r) => ({ ...r, allow: ALLOW_TEXT, text: true })),
]

const DIRS = ['.next/server/app', '.next/static']
const EXT = new Set(['.html', '.js', '.json', '.txt', '.rsc', '.body', '.meta'])

function* files(dir) {
  let entries
  try {
    entries = readdirSync(dir)
  } catch {
    return
  }
  for (const e of entries) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) yield* files(p)
    else if (EXT.has(extname(p))) yield p
  }
}

/** Cut the Khao Yai Index block (market prices, not ours) out of rendered HTML. */
export function stripMarketIndex(text) {
  return text.replace(/<section(?=[^>]*\sdata-market-index)[^>]*>[\s\S]*?<\/section>/g, '<section data-market-index></section>')
}

const offences = []
let scanned = 0
for (const dir of DIRS) {
  for (const f of files(dir)) {
    scanned++
    const text = stripMarketIndex(readFileSync(f, 'utf8'))
    const skipText = SKIP_PATHS.some((s) => f.includes(s))
    for (const rule of RULES) {
      if (rule.text && skipText) continue
      rule.re.lastIndex = 0
      let m
      while ((m = rule.re.exec(text))) {
        const around = text.slice(Math.max(0, m.index - 90), m.index + 90)
        if (rule.allow.some((a) => around.includes(a))) continue
        offences.push(
          `${f}  [${rule.name}] "${m[0]}"  …${around.replace(/\s+/g, ' ').slice(0, 140)}…`,
        )
        break
      }
    }
  }
}

if (scanned === 0) {
  console.error('✗ no built output found — run `npm run build` first, or this guard proves nothing')
  process.exit(1)
}

if (offences.length > 0) {
  console.error(`\n✗ ${offences.length} price / pricing-link offence(s) in the built output:\n`)
  for (const o of offences.slice(0, 30)) console.error('  ' + o)
  console.error('\n  The marketing sites show no price of ours (bible §12).')
  console.error('  A figure or word that is a product DEMO or unchanged legal text, not our price,')
  console.error('  belongs in check-no-pricing.config.json — with the surrounding text, not the bare word.\n')
  process.exit(1)
}
console.log(
  `✓ no pricing in the built output (${scanned} files scanned, ${RULES.length} rules)`,
)

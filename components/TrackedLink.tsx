'use client';

import { track } from '@vercel/analytics';
import type { ReactNode } from 'react';

/**
 * A link that records one cookieless analytics event when tapped (W1-B5), so
 * Bo can see which call to action brings LINE adds. The event carries the
 * placement and the page language — nothing about the visitor.
 *
 * Takes its text as children, never imports lib/content (see FAQ.tsx: a client
 * component that imports the content object ships both locales to every visitor).
 */
export type CtaPlacement =
  | 'header'
  | 'hero_primary'
  | 'hero_secondary'
  | 'hero_signup'
  | 'hero_qr'
  | 'sticky'
  | 'index'
  | 'index_page'
  | 'khaoyai_monthly'
  | 'report'
  | 'faq'
  | 'final_primary'
  | 'final_secondary'
  | 'steps';

export function TrackedLink({
  href,
  placement,
  lang,
  className,
  children,
  external = true,
  ariaLabel,
}: {
  href: string;
  placement: CtaPlacement;
  lang: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      data-cta={placement}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onClick={() => track('cta_click', { placement, lang })}
    >
      {children}
    </a>
  );
}

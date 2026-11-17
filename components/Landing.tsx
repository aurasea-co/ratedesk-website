import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FAQ } from '@/components/FAQ';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import { KhaoYaiSection } from '@/components/KhaoYaiSection';
import { StickyLine } from '@/components/StickyLine';
import { RealMessageSection, ProblemFix, Features, Steps, ProofSection, Trust, Compare } from '@/components/Sections';
import { getKhaoYaiIndex } from '@/lib/khaoyai';
import { getProof } from '@/lib/proof';
import type { Lang } from '@/lib/content';
import { content } from '@/lib/content';

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AuraSea Co., Ltd.',
  alternateName: 'บริษัท ออร่า ซี จำกัด',
  url: 'https://www.ratedesk.ai',
  email: 'hello@aurasea.ai',
  telephone: '+66-83-515-9599',
  taxID: '0305568007729',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Nakhon Ratchasima',
    addressCountry: 'TH',
  },
  sameAs: ['https://lin.ee/ydDaqx8l', 'https://www.auraseaos.com'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+66-83-515-9599',
    contactType: 'customer support',
    availableLanguage: ['th', 'en'],
    url: 'https://lin.ee/ydDaqx8l',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '18:00',
    },
  },
};

export async function Landing({ lang }: { lang: Lang }) {
  const [feed, proof] = await Promise.all([getKhaoYaiIndex(), getProof()]);
  const faq = content[lang].faq;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        // Organization identity (WEB5-E): the registered company, phone and LINE.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header lang={lang} />
      <Hero lang={lang} proof={proof} />
      <RealMessageSection lang={lang} proof={proof} />
      <KhaoYaiSection lang={lang} feed={feed} variant="home" />
      <ProblemFix lang={lang} />
      <Features lang={lang} proof={proof} />
      <Steps lang={lang} proof={proof} />
      <ProofSection lang={lang} proof={proof} />
      <Trust lang={lang} proof={proof} />
      <Compare lang={lang} />
      {/* The FAQ's copy is passed in, not imported by it — see FAQ.tsx. */}
      <FAQ lang={lang} eyebrow={faq.eyebrow} title={faq.title} items={faq.items} />
      <FinalCta lang={lang} proof={proof} />
      <Footer lang={lang} />
      <StickyLine lang={lang} />
    </main>
  );
}

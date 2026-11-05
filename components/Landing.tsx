import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SampleBrief } from '@/components/SampleBrief';
import { Problem } from '@/components/Problem';
import { HowItWorks } from '@/components/HowItWorks';
import { Control } from '@/components/Control';
import { Timeline } from '@/components/Timeline';
import { Integrations } from '@/components/Integrations';
import { Founder } from '@/components/Founder';
import { CompetitorReport } from '@/components/CompetitorReport';
import { FAQ } from '@/components/FAQ';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';
import type { Lang } from '@/lib/content';
import { content } from '@/lib/content';

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AuraSea Co., Ltd.',
  alternateName: 'บริษัท ออร่า ซี จำกัด',
  url: 'https://www.ratedesk.ai',
  email: 'hello@ratedesk.ai',
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

export function Landing({ lang }: { lang: Lang }) {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        // Organization identity (WEB5-E): the registered company, phone and LINE.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION) }}
      />
      <Header lang={lang} />
      <Hero lang={lang} />
      <SampleBrief lang={lang} />
      <Problem lang={lang} />
      <HowItWorks lang={lang} />
      <Control lang={lang} />
      <Timeline lang={lang} />
      <Integrations lang={lang} />
      <Founder lang={lang} />
      <CompetitorReport lang={lang} />
      {/* The FAQ's copy is passed in, not imported by it — see FAQ.tsx. */}
      <FAQ
        lang={lang}
        eyebrow={content[lang].faq.eyebrow}
        title={content[lang].faq.title}
        items={content[lang].faq.items}
      />
      <FinalCta lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}

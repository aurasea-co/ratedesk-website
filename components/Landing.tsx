import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { HowItWorks } from '@/components/HowItWorks';
import { Integrations } from '@/components/Integrations';
import { DesignPartner } from '@/components/DesignPartner';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import type { Lang } from '@/lib/content';
import { content } from '@/lib/content';

export function Landing({ lang }: { lang: Lang }) {
  return (
    <main className="min-h-screen">
      <Header lang={lang} />
      <Hero lang={lang} />
      <Problem lang={lang} />
      <HowItWorks lang={lang} />
      <Integrations lang={lang} />
      <DesignPartner lang={lang} />
      {/* The FAQ's copy is passed in, not imported by it — see FAQ.tsx. */}
      <FAQ
        lang={lang}
        eyebrow={content[lang].faq.eyebrow}
        title={content[lang].faq.title}
        items={content[lang].faq.items}
      />
      <Footer lang={lang} />
    </main>
  );
}

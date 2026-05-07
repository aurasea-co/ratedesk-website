import { content, type Lang } from '@/lib/content';

export function DesignPartner({ lang }: { lang: Lang }) {
  const c = content[lang];
  const isThai = lang === 'th';

  return (
    <section className="relative py-24 md:py-32 bg-sea-deep text-paper overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#FBF9F4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Soft gold glow */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
          <div className="col-span-12 md:col-span-2">
            <span className="block text-gold-soft eyebrow">
              {c.designPartner.eyebrow}
            </span>
            <span className="block w-12 h-px bg-gold-soft/50 mt-4" />
          </div>

          <div className="col-span-12 md:col-span-7">
            <h2
              className={`${
                isThai
                  ? 'display-thai text-[2rem] md:text-[2.6rem]'
                  : 'display-serif text-[2.4rem] md:text-[3.2rem] font-light'
              } text-paper text-balance leading-[1.1]`}
            >
              {c.designPartner.title}
            </h2>
            <p
              className={`${
                isThai ? 'font-thai' : 'font-sans'
              } mt-7 text-lg md:text-xl text-paper/80 leading-[1.65] max-w-2xl text-pretty`}
            >
              {c.designPartner.body}
            </p>
            <p className="mt-8 text-xs tracking-wide-soft uppercase text-gold-soft/80">
              — {c.designPartner.attribution}
            </p>
          </div>

          <div className="hidden md:block col-span-3">
            <div className="aspect-[3/4] relative">
              <svg
                viewBox="0 0 200 280"
                className="w-full h-full opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                {/* Stylized resort silhouette */}
                <line
                  x1="0"
                  y1="200"
                  x2="200"
                  y2="200"
                  stroke="#D4B776"
                  strokeWidth="0.5"
                />
                <path
                  d="M20 200 L20 160 L40 140 L60 160 L60 200 Z"
                  fill="none"
                  stroke="#D4B776"
                  strokeWidth="0.7"
                />
                <path
                  d="M70 200 L70 130 L100 110 L130 130 L130 200 Z"
                  fill="none"
                  stroke="#D4B776"
                  strokeWidth="0.7"
                />
                <path
                  d="M140 200 L140 170 L160 155 L180 170 L180 200 Z"
                  fill="none"
                  stroke="#D4B776"
                  strokeWidth="0.7"
                />
                {/* Sun */}
                <circle
                  cx="100"
                  cy="60"
                  r="20"
                  fill="none"
                  stroke="#D4B776"
                  strokeWidth="0.7"
                />
                {/* Water lines */}
                <path
                  d="M0 230 Q50 225 100 230 T200 230"
                  stroke="#D4B776"
                  strokeWidth="0.5"
                  fill="none"
                />
                <path
                  d="M0 245 Q50 240 100 245 T200 245"
                  stroke="#D4B776"
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M0 260 Q50 255 100 260 T200 260"
                  stroke="#D4B776"
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

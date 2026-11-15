import qrcode from 'qrcode-generator';
import { content, LINE_URL, type Lang } from '@/lib/content';

/**
 * The LINE add-friend QR beside the hero on desktop (W1-B4). Drawn on the
 * server from LINE_URL, so it can never point anywhere else. Always on a white
 * surface (force-light) so it scans in the dark theme too.
 */
export function LineQr({ lang }: { lang: Lang }) {
  const qr = qrcode(0, 'M');
  qr.addData(LINE_URL);
  qr.make();
  const svg = qr.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
  return (
    <div className="force-light hidden md:block w-[168px] rounded-2xl bg-white p-4 shadow-sm border border-ink/10">
      <div className="w-full aspect-square" dangerouslySetInnerHTML={{ __html: svg }} />
      <p className={`${lang === 'th' ? 'font-thai' : 'font-sans'} mt-3 text-xs leading-snug text-ink-soft text-center`}>
        {content[lang].cta.qr}
      </p>
    </div>
  );
}

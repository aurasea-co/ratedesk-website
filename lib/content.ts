export type Lang = 'th' | 'en';

/** The one place a visitor is sent to start: the Aurasea OS LINE account. */
export const LINE_URL = 'https://lin.ee/ydDaqx8l';
export const PHONE_DISPLAY = '083-515-9599';
export const PHONE_TEL = 'tel:+66835159599';
export const EMAIL = 'hello@ratedesk.ai';
export const AURASEAOS_URL = 'https://www.auraseaos.com';

const rawContent = {
  th: {
    locale: 'th',
    other: 'en',
    meta: {
      title: 'RateDesk — ราคาห้องที่ควรขายทุกเช้าใน LINE สำหรับโรงแรมและรีสอร์ทอิสระ',
      description:
        'ทุกเช้า 7 โมง RateDesk ส่งราคาที่ควรขายของทุกประเภทห้องเข้า LINE พร้อมเหตุผล ราคาโรงแรมแถวนี้ และ 3 เรื่องที่ควรทำวันนี้ · สำหรับโรงแรมและรีสอร์ทอิสระ 15–100 ห้อง',
    },
    nav: {
      howItWorks: 'วิธีใช้งาน',
      integrations: 'ใช้กับระบบเดิม',
      faq: 'คำถามที่พบบ่อย',
    },
    cta: {
      primary: 'เริ่มใช้กับโรงแรมของคุณ',
      secondary: 'ดูตัวอย่างข้อความเช้า',
      trust: 'ทีมงานตั้งค่าให้ ถึงที่หรือออนไลน์ · ไม่ผูกบัตร · ไม่มีสัญญา',
    },
    hero: {
      eyebrow: 'เปิดใช้งานแล้ว · สำหรับโรงแรมและรีสอร์ทอิสระ',
      title: 'ราคาห้องที่ใช่\nสำหรับทุกคืน',
      lead: 'ทุกเช้า 7 โมง RateDesk ส่งราคาที่ควรขายของทุกประเภทห้องเข้า LINE พร้อมเหตุผล ราคาโรงแรมแถวนี้ และ 3 เรื่องที่ควรทำวันนี้',
      caption: 'ส่วนหนึ่งของ Aurasea OS — ระบบหลังบ้านรายวันของโรงแรม',
    },
    sample: {
      eyebrow: 'ทุกเช้าคุณได้อะไร',
      title: 'ข้อความเช้าที่ส่งเข้า LINE ของคุณ',
      label: 'ตัวอย่าง · ตัวเลขสมมติ',
      cardHeader: 'RateDesk · ศ. 20 พ.ย.',
      cardTitle: 'คืนนี้ขายแพงขึ้นได้',
      booked: 'จองแล้ว 52/70 ห้อง · โรงแรมแถวนี้เต็มแล้ว 1 แห่ง',
      columns: ['ประเภทห้อง', 'ตอนนี้', 'ควรขาย'],
      rows: [
        ['Standard', '฿880', '฿1,080'],
        ['Deluxe', '฿1,235', '฿1,450'],
        ['Family', '฿1,435', '฿1,650'],
      ],
      todayTitle: 'วันนี้ควรทำ',
      today: [
        'คืนนี้ขึ้นทุกห้อง ฿200 · Standard เหลือน้อย',
        'ตั้งราคาวันหยุดยาวตอนนี้ ก่อนห้องถูกหมด',
        'จ.–พฤ. หน้ายังว่าง · คงราคา อย่าเพิ่งลด',
      ],
      competitor: 'คู่แข่งขยับ · โรงแรม B เสาร์นี้ ฿1,514 → ฿1,869',
      callouts: [
        'ราคาแนะนำแยกทุกประเภทห้อง พร้อมเหตุผลภาษาไทย',
        '3 เรื่องที่ควรทำวันนี้ อ่านจบใน 30 วินาที',
        'ราคาโรงแรมแถวนี้ อัปเดตอัตโนมัติทุกคืน (สูงสุด 5 แห่งที่คุณเลือก)',
        'ส่งถึงเจ้าของและผู้จัดการ ทาง LINE และอีเมล',
      ],
    },
    problem: {
      eyebrow: 'ความท้าทาย',
      title: 'ราคาห้องตัดสินใจช้า\nรายได้หลุดมือทุกคืน',
      body: [
        'เจ้าของโรงแรมและรีสอร์ทอิสระต้องเช็คราคาคู่แข่ง ดูยอดจองรายวัน และปรับราคาบน Channel Manager — ทั้งหมดด้วยตัวเองตอนเช้าก่อนเปิดออฟฟิศ',
        'ผลคือ ราคาห้องมักช้ากว่าตลาด 24–48 ชั่วโมง ในช่วงพีคเสียโอกาสขึ้นราคา ในช่วงโลว์ปล่อยห้องว่างทั้งที่ลดราคานิดเดียวก็ขายได้',
        'RateDesk ทำงานทุกคืนแทนคุณ — ดูยอดจองของคุณ เช็คราคาคู่แข่งสูงสุด 5 แห่งที่คุณเลือก และส่งราคาแนะนำมาทาง LINE ก่อนกาแฟแก้วแรกของวัน',
      ],
    },
    how: {
      eyebrow: 'วิธีใช้งาน',
      title: 'สามชั้นของการตัดสินใจราคา',
      steps: [
        {
          n: '01',
          title: 'ราคาแนะนำทุกประเภทห้อง',
          body: 'วิเคราะห์ยอดจอง วันในสัปดาห์ วันสำคัญ และราคาคู่แข่งทุกคืน ได้ราคาคืนนี้พร้อมเหตุผลภาษาไทย และราคา 30 คืนข้างหน้าเมื่อมียอดจองล่วงหน้าจาก PMS',
        },
        {
          n: '02',
          title: 'ราคาคู่แข่งอัตโนมัติ',
          body: 'ระบบเช็คราคาที่เปิดขายของโรงแรมที่คุณเลือก (สูงสุด 5 แห่ง) 30 คืนข้างหน้าทุกคืน ไม่ต้องไล่ดูเอง',
        },
        {
          n: '03',
          title: 'สรุปเช้าใน LINE',
          body: 'จองแล้วกี่ห้อง ราคาแนะนำแต่ละประเภทห้อง คู่แข่งขยับราคา และ 3 เรื่องที่ควรทำวันนี้',
        },
      ],
    },
    control: {
      eyebrow: 'คุณคุมราคาเอง',
      title: 'คุณเป็นคนคุมราคาเสมอ',
      checks: [
        'ระบบแนะนำ คุณตัดสินใจ — ไม่เปลี่ยนราคาบน OTA หรือ Channel Manager เอง',
        'ไม่ต่ำกว่าราคาขั้นต่ำที่คุณตั้งไว้ในแต่ละประเภทห้อง',
        'บอกเหตุผลทุกครั้ง ถ้าข้อมูลยังน้อย ระบบบอกตรงๆ ว่า "ความมั่นใจต่ำ"',
      ],
    },
    timeline: {
      eyebrow: 'เริ่มใช้งาน',
      title: 'ยิ่งใช้ ยิ่งแม่น',
      steps: [
        {
          when: 'วันแรก',
          body: 'ทีมงานตั้งค่าให้ ถึงที่หรือออนไลน์ เลือกคู่แข่ง 5 แห่ง → เห็นราคาคู่แข่ง 30 คืน และปฏิทินวันสำคัญทันที',
        },
        {
          when: '7 คืน',
          body: 'ได้ราคาคืนนี้ทุกประเภทห้อง พร้อม 3 เรื่องที่ควรทำ',
        },
        {
          when: '25 วัน',
          body: 'ได้ราคาแนะนำ 30 คืนข้างหน้า*',
        },
      ],
      footnote: '* เมื่อ PMS ส่งออกยอดจองล่วงหน้าได้ · ถ้าไม่มี จะได้ราคาคืนนี้ทุกเช้า',
    },
    integrations: {
      eyebrow: 'ใช้กับระบบเดิม',
      title: 'ใช้กับระบบที่คุณมีอยู่ — ไม่ต้องเปลี่ยน PMS',
      lead:
        'อัปโหลดรายงานที่ส่งออกจาก PMS ที่คุณใช้อยู่ หรือถ้าไม่มี PMS พนักงานกรอกยอดห้องวันละประมาณ 2 นาทีผ่านมือถือ · ใช้ร่วมกับ Channel Manager เดิมได้ ระบบไม่เปลี่ยนราคาบน OTA เอง',
      points: [
        { title: 'มี PMS', body: 'อัปโหลดรายงานที่ส่งออกจาก PMS วันละครั้ง' },
        { title: 'ไม่มี PMS', body: 'กรอกยอดห้องผ่านมือถือ วันละประมาณ 2 นาที' },
        { title: 'Channel Manager', body: 'ใช้ร่วมกับของเดิมได้ คุณเป็นคนเปลี่ยนราคาเอง' },
      ],
    },
    founder: {
      eyebrow: 'ผู้ก่อตั้ง',
      title: 'สร้างโดยเจ้าของรีสอร์ท ใช้จริงทุกเช้า',
      body: 'RateDesk เริ่มจากรีสอร์ทบูติก 85 ห้องในนครราชสีมาของผู้ก่อตั้ง ทุกฟีเจอร์ผ่านการใช้งานจริงที่หน้าเคาน์เตอร์ก่อนเปิดให้โรงแรมอื่นใช้',
    },
    report: {
      title: 'อยากรู้ราคาโรงแรมแถวคุณ 30 คืนข้างหน้า? ทักมาใน LINE',
      body: 'บอกชื่อโรงแรมที่อยากเทียบ 3–5 แห่ง เราส่งตารางราคาให้ภายใน 24 ชม. ไม่ต้องสมัครอะไร',
      button: 'ทักใน LINE',
    },
    faq: {
      eyebrow: 'คำถามที่พบบ่อย',
      title: 'คำถามจากเจ้าของโรงแรม',
      items: [
        {
          q: 'ใช้ได้แล้วหรือยัง?',
          a: 'ใช้ได้แล้ว ทักใน LINE @auraseaos เพื่อเริ่มใช้กับโรงแรมของคุณ',
          link: { label: 'ทักใน LINE', href: LINE_URL },
        },
        {
          q: 'เหมาะกับโรงแรมขนาดไหน?',
          a: 'โรงแรมและรีสอร์ทอิสระ 15–100 ห้อง โดยเฉพาะที่ไม่มีทีม Revenue เต็มเวลา',
        },
        {
          q: 'ไม่มี PMS ใช้ได้ไหม?',
          a: 'ได้ พนักงานกรอกจำนวนห้องที่ขายได้วันละประมาณ 2 นาทีผ่านมือถือ',
        },
        {
          q: 'ระบบเปลี่ยนราคาบน OTA เองไหม?',
          a: 'ไม่ ระบบแนะนำ คุณเป็นคนตัดสินใจ และไม่แนะนำต่ำกว่าราคาขั้นต่ำที่คุณตั้ง',
        },
        {
          q: 'ใครตั้งค่าและสอนพนักงาน?',
          a: 'ทีมงานตั้งค่าให้ที่โรงแรม หรือผ่าน LINE วิดีโอคอล',
        },
        {
          q: 'ต่างจากระบบ RMS ของฝั่งตะวันตกอย่างไร?',
          a: 'RateDesk สร้างมาเพื่อโรงแรมไทย — เข้าใจวันหยุดและเทศกาลในพื้นที่ ส่งสรุปทาง LINE ใช้งานเป็นภาษาไทยตั้งแต่วันแรก และทีมงานตั้งค่าให้ ถึงที่หรือออนไลน์',
        },
        {
          q: 'ข้อมูลของผมปลอดภัยไหม?',
          a: 'ยอดจองของคุณไม่เปิดเผยให้โรงแรมอื่น ไม่ขายข้อมูล เข้ารหัสทั้งหมด · ลบได้ทั้งหมดเมื่อเลิกใช้',
          link: { label: 'นโยบายความเป็นส่วนตัว', href: 'https://www.auraseaos.com/privacy' },
        },
      ],
    },
    finalCta: {
      title: 'เริ่มเช้าพรุ่งนี้ด้วยราคาที่มั่นใจ',
      phone: 'หรือโทร',
    },
    footer: {
      tagline: 'ราคาห้องที่ควรขายทุกเช้าใน LINE สำหรับโรงแรมและรีสอร์ทอิสระ',
      crosslink: 'ส่วนหนึ่งของ Aurasea OS — ระบบหลังบ้านรายวันของโรงแรม',
      company:
        'บริษัท ออร่า ซี จำกัด (AuraSea Co., Ltd.) · ทะเบียนนิติบุคคล 0305568007729 · นครราชสีมา · โทร 083-515-9599 (ทุกวัน 08:00–18:00 น.) · LINE @auraseaos · hello@ratedesk.ai',
      privacy: { label: 'นโยบายความเป็นส่วนตัว', href: 'https://www.auraseaos.com/privacy' },
      sections: {
        product: {
          title: 'ผลิตภัณฑ์',
          links: [
            { label: 'วิธีใช้งาน', href: '#how' },
            { label: 'ใช้กับระบบเดิม', href: '#integrations' },
            { label: 'คำถามที่พบบ่อย', href: '#faq' },
          ],
        },
        ecosystem: {
          title: 'Aurasea',
          links: [{ label: 'Aurasea OS ↗', href: AURASEAOS_URL }],
          menudesk: 'MenuDesk · เปิดตัวไตรมาส 1 ปี 2570',
        },
        contact: {
          title: 'ติดต่อ',
          line: 'LINE @auraseaos',
          phone: 'โทร 083-515-9599',
          hours: 'ทุกวัน 08:00–18:00 น.',
          email: EMAIL,
        },
      },
      copyright: '© 2026 บริษัท ออร่า ซี จำกัด สงวนลิขสิทธิ์',
    },
  },
  en: {
    locale: 'en',
    other: 'th',
    meta: {
      title: 'RateDesk — the rate to sell, every morning on LINE, for independent hotels and resorts',
      description:
        'Every morning at 7, RateDesk sends the rate to sell for every room type to LINE, with the reasons, nearby hotels’ rates and 3 things to do today · For independent hotels and resorts of 15–100 rooms.',
    },
    nav: {
      howItWorks: 'How it works',
      integrations: 'Works with your system',
      faq: 'FAQ',
    },
    cta: {
      primary: 'Start with your hotel',
      secondary: 'See a sample morning message',
      trust: 'We set it up for you, on site or online · No card · No contract',
    },
    hero: {
      eyebrow: 'Live now · For independent hotels and resorts',
      title: 'The right room rate,\nevery night.',
      lead: 'Every morning at 7, RateDesk sends the rate to sell for every room type to your LINE, with the reasons, nearby hotels’ rates and 3 things to do today.',
      caption: 'Part of Aurasea OS — the daily back office for hotels',
    },
    sample: {
      eyebrow: 'What you get every morning',
      title: 'The morning message in your LINE',
      label: 'Sample · illustrative figures',
      cardHeader: 'RateDesk · Fri 20 Nov',
      cardTitle: 'You can sell higher tonight',
      booked: 'Booked 52/70 rooms · 1 nearby hotel already full',
      columns: ['Room type', 'Now', 'Sell at'],
      rows: [
        ['Standard', '฿880', '฿1,080'],
        ['Deluxe', '฿1,235', '฿1,450'],
        ['Family', '฿1,435', '฿1,650'],
      ],
      todayTitle: 'To do today',
      today: [
        'Raise every room ฿200 tonight · Standard is nearly gone',
        'Set long-weekend rates now, before the cheaper rooms sell out',
        'Mon–Thu next week still open · hold rates, don’t cut yet',
      ],
      competitor: 'Competitor moved · Hotel B this Saturday ฿1,514 → ฿1,869',
      callouts: [
        'A suggested rate for every room type, with the reasons in Thai',
        '3 things to do today, read in 30 seconds',
        'Nearby hotels’ rates, updated automatically every night (up to 5 that you choose)',
        'Sent to the owner and managers, by LINE and email',
      ],
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Rate decisions made too slowly.\nRevenue lost every night.',
      body: [
        'Independent hotel and resort owners check competitor rates, look over daily bookings and adjust prices in their channel manager — all by hand, every morning before the office opens.',
        'The result: rates lag the market by 24–48 hours. In peak periods you miss the chance to push price. In soft periods you sit on empty rooms when a small adjustment would have closed the booking.',
        'RateDesk works through the night for you — it reads your bookings, checks up to 5 competitors that you choose, and sends a suggested rate to LINE before your first coffee.',
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'Three layers of rate decisions.',
      steps: [
        {
          n: '01',
          title: 'A suggested rate for every room type',
          body: 'Your bookings, the day of the week, important dates and competitor rates are analysed every night. You get tonight’s rate with the reasons in Thai, and rates for the next 30 nights once forward bookings come from your PMS.',
        },
        {
          n: '02',
          title: 'Competitor rates, automatically',
          body: 'Every night the system checks the published rates of the hotels you choose (up to 5) for the next 30 nights. No more checking them yourself.',
        },
        {
          n: '03',
          title: 'A morning summary on LINE',
          body: 'How many rooms are booked, the suggested rate for each room type, competitor price moves, and 3 things to do today.',
        },
      ],
    },
    control: {
      eyebrow: 'You stay in control',
      title: 'You are always the one in control of your rates.',
      checks: [
        'The system suggests, you decide — it never changes rates on an OTA or channel manager itself',
        'Never below the minimum rate you set for each room type',
        'It gives its reasons every time, and when data is still thin it says plainly: "low confidence"',
      ],
    },
    timeline: {
      eyebrow: 'Getting started',
      title: 'The more you use it, the sharper it gets.',
      steps: [
        {
          when: 'Day 1',
          body: 'We set it up for you, on site or online, and you choose 5 competitors → you see their rates for 30 nights and the calendar of important dates right away',
        },
        {
          when: '7 nights',
          body: 'Tonight’s rate for every room type, with 3 things to do',
        },
        {
          when: '25 days',
          body: 'Suggested rates for the next 30 nights*',
        },
      ],
      footnote:
        '* When your PMS can export forward bookings · Otherwise you get tonight’s rate every morning',
    },
    integrations: {
      eyebrow: 'Works with your system',
      title: 'Works with the system you already have — no need to change your PMS.',
      lead:
        'Upload the report you export from the PMS you already use, or if you have no PMS, staff enter the room numbers in about 2 minutes a day on a phone · Works alongside your existing channel manager; the system never changes your OTA rates itself.',
      points: [
        { title: 'With a PMS', body: 'Upload the report you export from your PMS, once a day' },
        { title: 'Without a PMS', body: 'Enter the room numbers on a phone, about 2 minutes a day' },
        { title: 'Channel manager', body: 'Keep the one you have; you change the rates yourself' },
      ],
    },
    founder: {
      eyebrow: 'Founder',
      title: 'Built by a resort owner, used every morning.',
      body: 'RateDesk began at the founder’s own 85-room boutique resort in Nakhon Ratchasima. Every feature is used for real at the front desk before other hotels get it.',
    },
    report: {
      title: 'Want to know nearby hotels’ rates for the next 30 nights? Message us on LINE.',
      body: 'Name 3–5 hotels you want to compare and we send you a rate table within 24 hours. No sign-up needed.',
      button: 'Message us on LINE',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions from hotel owners.',
      items: [
        {
          q: 'Is it available now?',
          a: 'Yes. Message LINE @auraseaos to start with your hotel.',
          link: { label: 'Message us on LINE', href: LINE_URL },
        },
        {
          q: 'What size of property is it for?',
          a: 'Independent hotels and resorts of 15–100 rooms, especially those without a full-time revenue team.',
        },
        {
          q: 'Can I use it without a PMS?',
          a: 'Yes. Staff enter the number of rooms sold on a phone, in about 2 minutes a day.',
        },
        {
          q: 'Does it change my rates on the OTAs by itself?',
          a: 'No. The system suggests and you decide, and it never suggests a rate below the minimum you set.',
        },
        {
          q: 'Who sets it up and trains my staff?',
          a: 'We set it up at your hotel or by LINE video call.',
        },
        {
          q: 'How is this different from Western RMS platforms?',
          a: 'RateDesk is built for Thai hotels — it understands local holidays and festivals, sends its summary on LINE, works in Thai from day one, and we set it up for you, on site or online.',
        },
        {
          q: 'Is my data safe?',
          a: 'Your bookings are never shown to other hotels, we never sell data, and everything is encrypted · Everything can be deleted when you stop using it.',
          link: { label: 'Privacy policy', href: 'https://www.auraseaos.com/en/privacy' },
        },
      ],
    },
    finalCta: {
      title: 'Start tomorrow morning with a rate you can trust.',
      phone: 'Or call',
    },
    footer: {
      tagline: 'The rate to sell, every morning on LINE, for independent hotels and resorts.',
      crosslink: 'Part of Aurasea OS — the daily back office for hotels',
      company:
        'AuraSea Co., Ltd. (บริษัท ออร่า ซี จำกัด) · Company registration 0305568007729 · Nakhon Ratchasima · Tel 083-515-9599 (daily 08:00–18:00) · LINE @auraseaos · hello@ratedesk.ai',
      privacy: { label: 'Privacy policy', href: 'https://www.auraseaos.com/en/privacy' },
      sections: {
        product: {
          title: 'Product',
          links: [
            { label: 'How it works', href: '#how' },
            { label: 'Works with your system', href: '#integrations' },
            { label: 'FAQ', href: '#faq' },
          ],
        },
        ecosystem: {
          title: 'Aurasea',
          links: [{ label: 'Aurasea OS ↗', href: AURASEAOS_URL }],
          menudesk: 'MenuDesk · Launching Q1 2027',
        },
        contact: {
          title: 'Contact',
          line: 'LINE @auraseaos',
          phone: 'Tel 083-515-9599',
          hours: 'Daily 08:00–18:00',
          email: EMAIL,
        },
      },
      copyright: '© 2026 AuraSea Co., Ltd. All rights reserved.',
    },
  },
} as const;

export type ContentType = typeof content.en;

export const content = rawContent;

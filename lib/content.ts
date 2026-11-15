export type Lang = 'th' | 'en';

/** The one place a visitor is sent to start: the Aurasea OS LINE account. */
export const LINE_URL = 'https://lin.ee/ydDaqx8l';
export const PHONE_DISPLAY = '0835159599';
export const PHONE_TEL = 'tel:+66835159599';
export const EMAIL = 'hello@ratedesk.ai';
export const AURASEAOS_URL = 'https://www.auraseaos.com';
/** Self-serve sign-up in the app (O3, live since 14 Nov 2026). */
export const SIGNUP_URL = 'https://app.auraseaos.com/signup';

const rawContent = {
  th: {
    locale: 'th',
    other: 'en',
    meta: {
      title: 'RateDesk — ราคาห้องที่ควรขายทุกเช้าใน LINE สำหรับโรงแรมและรีสอร์ทอิสระ',
      description:
        'RateDesk ดูราคาที่พักรอบตัวคุณทุกคืน แล้วส่งราคาแนะนำเข้า LINE ทุกเช้า พร้อมเหตุผลและราคาที่พักแถวนี้ · สำหรับโรงแรมและรีสอร์ทอิสระ 10–100 ห้อง',
    },
    nav: {
      howItWorks: 'วิธีใช้งาน',
      integrations: 'ใช้กับระบบเดิม',
      faq: 'คำถามที่พบบ่อย',
    },
    cta: {
      primary: 'เริ่มทดลองฟรีใน LINE',
      secondary: 'รับกราฟเทียบตลาดของโรงแรมคุณ ฟรี',
      trust: 'ทดลองฟรีอย่างน้อย 30 วัน ครอบคลุมวันหยุดยาวอย่างน้อย 1 ครั้ง · ไม่ผูกบัตร · ไม่มีสัญญา · มีแพ็กเกจฟรีให้ใช้ต่อ',
      signup: 'สมัครเองได้เลย',
      proof: 'ใช้งานจริงทุกเช้าที่โรงแรมและรีสอร์ทในเขาใหญ่ ปากช่อง และโคราช',
      qr: 'สแกนเพื่อเพิ่ม LINE AuraSea OS (@auraseaos)',
    },
    hero: {
      eyebrow: 'เปิดใช้งานแล้ว · สำหรับโรงแรมและรีสอร์ทอิสระ',
      title: 'ตลาดขึ้นราคา\nแต่ราคาคุณยังเท่าเดิม?',
      lead: 'RateDesk ดูราคาที่พักรอบตัวคุณทุกคืน แล้วส่งราคาแนะนำเข้า LINE ทุกเช้า เริ่มได้ทันที ไม่ต้องกรอกข้อมูล',
      caption: 'ส่วนหนึ่งของ Aurasea OS — ระบบหลังบ้านของโรงแรมและรีสอร์ท',
    },
    sample: {
      eyebrow: 'ทุกเช้าคุณได้อะไร',
      title: 'ข้อความเช้าที่ส่งเข้า LINE ของคุณ',
      label: 'ตัวอย่าง · ตัวเลขสมมติ',
      cardHeader: 'RateDesk · ศ. 20 พ.ย.',
      cardTitle: 'คืนนี้ขายแพงขึ้นได้',
      booked: 'จองแล้ว 52/70 ห้อง · โรงแรมแถวนี้น่าจะเต็ม 1 แห่ง',
      columns: ['ประเภทห้อง', 'ตอนนี้', 'ควรขาย'],
      rows: [
        ['Standard', '฿880', '฿1,080'],
        ['Deluxe', '฿1,235', '฿1,435'],
        ['Family', '฿1,435', '฿1,635'],
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
        'ราคาที่พักแถวนี้ อัปเดตอัตโนมัติทุกคืน (สูงสุด 5 แห่งที่คุณเลือก)',
        'ส่งถึงเจ้าของและผู้จัดการ ทาง LINE และอีเมล',
      ],
    },
    index: {
      eyebrow: 'ดัชนีเขาใหญ่',
      title: 'ดัชนีเขาใหญ่ · ราคาที่พักในเขาใหญ่ 30 คืนข้างหน้า',
      zones: 'โซน',
      legend: {
        median: 'ราคากลาง',
        band: 'ที่พักส่วนใหญ่ขายในช่วงนี้',
        weekend: 'สุดสัปดาห์',
        holiday: 'วันหยุด',
        gap: 'ข้อมูลไม่พอ',
      },
      today: 'วันนี้',
      gapTip: 'ข้อมูลไม่พอ · มีราคาไม่ถึง 6 ที่พัก',
      priced: 'มีราคา {n} ที่พัก',
      columns: ['วันที่', 'ราคากลาง', 'ช่วงราคาส่วนใหญ่', 'ที่พักขึ้นราคาใน 7 วัน', 'ไม่มีราคาบน Google'],
      tableNote: 'สุดสัปดาห์ 4 ครั้งถัดไป และวันหยุดใน 30 คืนข้างหน้า',
      footer: 'ราคาห้องเริ่มต้นบน Google · 2 ท่าน 1 คืน · {updated} · {n} ที่พัก · ไม่แสดงชื่อที่พัก',
      updated: 'อัปเดต {time}',
      stale: 'ข้อมูลล่าสุด {date}',
      cta: 'ราคาของคุณอยู่ตรงไหนในตลาดนี้? ส่งชื่อโรงแรมใน LINE รับกราฟเทียบตลาด 30 คืน ฟรี ภายใน 24 ชม.',
      ctaButton: 'ส่งชื่อโรงแรมใน LINE',
      seeAll: 'ดูดัชนีเขาใหญ่ทั้งหมด',
      page: {
        seoTitle: 'ราคาที่พักเขาใหญ่ 30 วันข้างหน้า · ดัชนีเขาใหญ่',
        description: 'ราคากลางของที่พักในเขาใหญ่ (ปากช่อง ธนะรัชต์ หมูสี) 30 คืนข้างหน้า จากราคาห้องเริ่มต้นบน Google อัปเดตทุกวัน ไม่แสดงชื่อที่พัก',
        h1: 'ดัชนีเขาใหญ่',
        lead: 'ราคาที่พักในเขาใหญ่ 30 คืนข้างหน้า อัปเดตทุกวัน',
        howToReadTitle: 'วิธีอ่าน',
        howToRead: [
          'เส้นคือราคากลางของคืนนั้น ครึ่งหนึ่งของที่พักขายถูกกว่า อีกครึ่งขายแพงกว่า',
          'แถบสีคือช่วงที่ที่พักส่วนใหญ่ขาย (ครึ่งกลางของราคาทั้งหมด)',
          'คืนที่มีราคาไม่ถึง 6 ที่พักจะเว้นว่างไว้และขึ้นว่า "ข้อมูลไม่พอ"',
          'แตะหรือชี้ที่คืนใดก็ได้เพื่อดูตัวเลขของคืนนั้น',
        ],
        methodTitle: 'วิธีคำนวณ',
        method: [
          'ใช้ราคาห้องเริ่มต้นที่เปิดขายบน Google สำหรับ 2 ท่าน 1 คืน ของที่พักในแต่ละโซน',
          'คำนวณราคากลาง (มัธยฐาน) และครึ่งกลางของราคา เฉพาะคืนที่มีราคาอย่างน้อย 6 ที่พัก',
          'ราคาที่ผิดปกติมาก (ต่ำกว่าหรือสูงกว่าราคาปกติของที่พักนั้นหลายเท่า) ไม่นำมาคิด',
          'ไม่แสดงชื่อที่พัก และไม่มีราคาของที่พักแห่งใดแห่งหนึ่ง',
        ],
        monthly: 'รับรายงานตลาดเขาใหญ่ทุกเดือนทาง LINE',
        monthlyButton: 'รับรายงานทาง LINE',
      },
    },
    problem: {
      eyebrow: 'ความท้าทาย',
      title: 'ราคาห้องตัดสินใจช้า\nรายได้หลุดมือทุกคืน',
      body: [
        'เจ้าของโรงแรมและรีสอร์ทอิสระต้องเช็คราคาคู่แข่ง ดูยอดจองรายวัน และปรับราคาบน Channel Manager — ทั้งหมดด้วยตัวเองตอนเช้าก่อนเปิดออฟฟิศ',
        'ผลคือ ในช่วงพีคเสียโอกาสขึ้นราคา ในช่วงโลว์ปล่อยห้องว่างทั้งที่ลดราคานิดเดียวก็ขายได้',
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
          body: 'ระบบเช็คราคาที่เปิดขายของที่พักที่คุณเลือก (สูงสุด 5 แห่ง) 30 คืนข้างหน้าทุกคืน ไม่ต้องไล่ดูเอง · ที่พักที่ไม่มีราคาออนไลน์ กรอกราคาเองได้',
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
        'บอกเหตุผลทุกครั้ง ถ้าข้อมูลยังน้อย ระบบบอกตรงๆ ว่า "ข้อมูลยังไม่พอ — คงราคาไว้ก่อน"',
      ],
    },
    timeline: {
      eyebrow: 'เริ่มใช้งาน',
      title: 'ยิ่งใช้ ยิ่งแม่น',
      steps: [
        {
          when: 'วันแรก',
          body: 'ตั้งค่า เลือกคู่แข่ง แล้วเห็นกราฟตลาด 30 คืนข้างหน้าทันที',
        },
        {
          when: 'ทุกวันอังคาร',
          body: 'ได้ราคาแนะนำคืนวันศุกร์–เสาร์และวันหยุดยาว ทาง LINE โดยไม่ต้องกรอกข้อมูล',
        },
        {
          when: 'เมื่อส่งข้อมูลการจองทุกวัน',
          body: 'กรอก อัปโหลด หรือส่งไฟล์ทาง LINE แล้วได้ราคาแนะนำวันธรรมดาด้วย พร้อมสรุปทุกเช้า 07:00',
        },
      ],
      footnote: '',
    },
    integrations: {
      eyebrow: 'ใช้กับระบบเดิม',
      title: 'ใช้กับระบบที่คุณมีอยู่ — ไม่ต้องเปลี่ยน PMS',
      lead:
        'อัปโหลดรายงานที่ส่งออกจาก PMS ที่คุณใช้อยู่ หรือส่งไฟล์รายงานจาก PMS ทาง LINE ได้ · ถ้าไม่มี PMS พนักงานกรอกยอดห้องวันละประมาณ 2 นาทีผ่านมือถือ · ใช้ร่วมกับ Channel Manager เดิมได้ ระบบไม่เปลี่ยนราคาบน OTA เอง',
      points: [
        { title: 'มี PMS', body: 'อัปโหลด หรือส่งไฟล์รายงานจาก PMS ทาง LINE วันละครั้ง' },
        { title: 'ไม่มี PMS', body: 'กรอกยอดห้องผ่านมือถือ วันละประมาณ 2 นาที' },
        { title: 'Channel Manager', body: 'ใช้ร่วมกับของเดิมได้ คุณเป็นคนเปลี่ยนราคาเอง' },
      ],
    },
    founder: {
      eyebrow: 'ผู้ก่อตั้ง',
      title: 'สร้างโดยเจ้าของรีสอร์ท ใช้จริงทุกเช้า',
      body: 'RateDesk สร้างและใช้จริงทุกเช้าที่รีสอร์ทในโคราช ทุกฟีเจอร์ผ่านการใช้งานจริงที่หน้าเคาน์เตอร์ก่อนเปิดให้โรงแรมและรีสอร์ทอื่นใช้',
    },
    report: {
      title: 'อยากรู้ราคาที่พักแถวคุณ 30 คืนข้างหน้า? ทักมาใน LINE',
      body: 'บอกชื่อที่พักที่อยากเทียบ 3–5 แห่ง เราส่งตารางราคาให้ภายใน 24 ชม. ไม่ต้องสมัครอะไร',
      button: 'ทักใน LINE',
    },
    faq: {
      eyebrow: 'คำถามที่พบบ่อย',
      title: 'คำถามจากเจ้าของโรงแรมและรีสอร์ท',
      items: [
        {
          q: 'ใช้ได้แล้วหรือยัง?',
          a: 'ใช้ได้แล้ว ทักใน LINE ของเรา ชื่อ AuraSea OS (@auraseaos) หรือสมัครเองที่ app.auraseaos.com',
          link: { label: 'ทักใน LINE', href: LINE_URL },
        },
        {
          q: 'เหมาะกับโรงแรมและรีสอร์ทขนาดไหน?',
          a: 'เหมาะกับโรงแรม รีสอร์ท และเกสต์เฮาส์ ราว 10–100 ห้อง โดยเฉพาะที่เจ้าของดูแลเองและไม่มีทีม Revenue เต็มเวลา',
        },
        {
          q: 'ไม่มี PMS ใช้ได้ไหม?',
          a: 'ได้ พนักงานกรอกจำนวนห้องที่ขายได้วันละประมาณ 2 นาทีผ่านมือถือ',
        },
        {
          q: 'ไม่มีเวลากรอกข้อมูลทุกวัน ใช้ได้ไหม?',
          a: 'ได้ ไม่ต้องกรอกอะไร ทุกวันอังคารระบบส่งราคาแนะนำคืนวันศุกร์–เสาร์และวันหยุดยาวทาง LINE จากราคาตลาดรอบตัวคุณ ถ้าส่งข้อมูลการจองทุกวัน จะได้ราคาวันธรรมดาและสรุปทุกเช้าเพิ่ม',
        },
        {
          q: 'ราคาเท่าไหร่?',
          a: 'ทดลองฟรีอย่างน้อย 30 วัน และมีแพ็กเกจฟรีให้ใช้ต่อ แพ็กเกจเต็มคิดตามขนาดที่พัก ทักใน LINE เพื่อดูราคา',
          link: { label: 'ทักใน LINE', href: LINE_URL },
        },
        {
          q: 'ระบบเปลี่ยนราคาบน OTA เองไหม?',
          a: 'ไม่ ระบบแนะนำ คุณเป็นคนตัดสินใจ และไม่แนะนำต่ำกว่าราคาขั้นต่ำที่คุณตั้ง',
        },
        {
          q: 'ใครตั้งค่าและสอนพนักงาน?',
          a: 'สมัครและตั้งค่าเองได้ที่ app.auraseaos.com หรือให้ทีมงานช่วยตั้งค่าที่โรงแรมหรือรีสอร์ทของคุณ หรือผ่าน LINE วิดีโอคอล',
        },
        {
          q: 'ต่างจากระบบ RMS ของฝั่งตะวันตกอย่างไร?',
          a: 'RateDesk สร้างมาเพื่อโรงแรมและรีสอร์ทไทย — เข้าใจวันหยุดและเทศกาลในพื้นที่ ส่งสรุปทาง LINE ใช้งานเป็นภาษาไทยตั้งแต่วันแรก และทีมงานตั้งค่าให้ ถึงที่หรือออนไลน์',
        },
        {
          q: 'ข้อมูลของผมปลอดภัยไหม?',
          a: 'ยอดจองของคุณไม่เปิดเผยให้ที่พักอื่น ไม่ขายข้อมูล เข้ารหัสทั้งระหว่างส่งและขณะจัดเก็บ · ข้อมูลที่พักใช้ในสถิติภาพรวมแบบไม่ระบุตัวตนเท่านั้น · ลบได้ทั้งหมดเมื่อเลิกใช้',
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
      crosslink: 'ส่วนหนึ่งของ Aurasea OS — ระบบหลังบ้านของโรงแรมและรีสอร์ท',
      company:
        'บริษัท ออร่า ซี จำกัด (AuraSea Co., Ltd.) · ทะเบียนนิติบุคคล 0305568007729 · นครราชสีมา · โทร 0835159599 (ทุกวัน 08:00–18:00 น.) · LINE AuraSea OS (@auraseaos) · hello@ratedesk.ai',
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
          line: 'LINE AuraSea OS (@auraseaos)',
          phone: 'โทร 0835159599',
          hours: 'ทุกวัน 08:00–18:00 น.',
          email: EMAIL,
        },
      },
      copyright: '© 2569 บริษัท ออร่า ซี จำกัด สงวนลิขสิทธิ์',
    },
  },
  en: {
    locale: 'en',
    other: 'th',
    meta: {
      title: 'RateDesk — the rate to sell, every morning on LINE, for independent hotels and resorts',
      description:
        'RateDesk checks the rates of the properties around you every night, then sends a suggested rate to your LINE every morning, with the reasons and nearby properties’ rates · For independent hotels and resorts of 10–100 rooms.',
    },
    nav: {
      howItWorks: 'How it works',
      integrations: 'Works with your system',
      faq: 'FAQ',
    },
    cta: {
      primary: 'Start your free trial on LINE',
      secondary: 'Get a free market chart for your hotel',
      trust: 'Free trial of at least 30 days, covering at least one long weekend · No card · No contract · A free plan to continue on',
      signup: 'Sign up yourself',
      proof: 'In use every morning at hotels and resorts in Khao Yai, Pak Chong and Korat',
      qr: 'Scan to add LINE AuraSea OS (@auraseaos)',
    },
    hero: {
      eyebrow: 'Live now · For independent hotels and resorts',
      title: 'The market is raising rates.\nAre yours still the same?',
      lead: 'RateDesk checks the rates of the properties around you every night, then sends a suggested rate to your LINE every morning. Start right away — no data entry needed.',
      caption: 'Part of Aurasea OS — the back office for hotels and resorts',
    },
    sample: {
      eyebrow: 'What you get every morning',
      title: 'The morning message in your LINE',
      label: 'Sample · illustrative figures',
      cardHeader: 'RateDesk · Fri 20 Nov',
      cardTitle: 'You can sell higher tonight',
      booked: 'Booked 52/70 rooms · 1 nearby hotel probably full',
      columns: ['Room type', 'Now', 'Sell at'],
      rows: [
        ['Standard', '฿880', '฿1,080'],
        ['Deluxe', '฿1,235', '฿1,435'],
        ['Family', '฿1,435', '฿1,635'],
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
        'Nearby properties’ rates, updated automatically every night (up to 5 that you choose)',
        'Sent to the owner and managers, by LINE and email',
      ],
    },
    index: {
      eyebrow: 'Khao Yai Index',
      title: 'Khao Yai Index · Khao Yai room rates, next 30 nights',
      zones: 'Zone',
      legend: {
        median: 'Median rate',
        band: 'Where most properties sell',
        weekend: 'Weekend',
        holiday: 'Holiday',
        gap: 'Not enough data',
      },
      today: 'Today',
      gapTip: 'Not enough data · fewer than 6 properties priced',
      priced: '{n} properties priced',
      columns: ['Night', 'Median', 'Most properties', 'Raised in 7 days', 'No price on Google'],
      tableNote: 'The next 4 weekends and every holiday in the next 30 nights',
      footer: 'Cheapest room on Google · 2 adults, 1 night · {updated} · {n} properties · No property names shown',
      updated: 'Updated {time}',
      stale: 'Latest data {date}',
      cta: 'Where does your rate sit in this market? Send your hotel’s name on LINE and get a free 30-night market chart within 24 hours.',
      ctaButton: 'Send your hotel’s name on LINE',
      seeAll: 'See the full Khao Yai Index',
      page: {
        seoTitle: 'Khao Yai room rates, next 30 days · Khao Yai Index',
        description: 'The median room rate in Khao Yai (Pak Chong, Thanarat, Mu Si) for the next 30 nights, from the cheapest room on Google, updated daily. No property names shown.',
        h1: 'Khao Yai Index',
        lead: 'Khao Yai room rates for the next 30 nights, updated daily',
        howToReadTitle: 'How to read it',
        howToRead: [
          'The line is the night’s median rate: half the properties sell cheaper, half dearer.',
          'The band is where most properties sell (the middle half of all rates).',
          'A night with fewer than 6 properties priced is left as a gap marked "Not enough data".',
          'Tap or hover over any night to see its figures.',
        ],
        methodTitle: 'How it is calculated',
        method: [
          'We use the cheapest room published on Google for 2 adults, 1 night, for the properties in each zone.',
          'The median and the middle half are calculated only for nights with at least 6 properties priced.',
          'Rates far outside a property’s usual range are left out.',
          'No property is named, and no single property’s rate is shown.',
        ],
        monthly: 'Get the Khao Yai market report every month on LINE',
        monthlyButton: 'Get the report on LINE',
      },
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Rate decisions made too slowly.\nRevenue lost every night.',
      body: [
        'Independent hotel and resort owners check competitor rates, look over daily bookings and adjust prices in their channel manager — all by hand, every morning before the office opens.',
        'The result: in peak periods you miss the chance to push price. In soft periods you sit on empty rooms when a small adjustment would have closed the booking.',
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
          body: 'Every night the system checks the published rates of the properties you choose (up to 5) for the next 30 nights. No more checking them yourself. A property with no rate online can be entered by hand.',
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
        'It gives its reasons every time, and when data is still thin it says plainly: "not enough data yet — hold the rate"',
      ],
    },
    timeline: {
      eyebrow: 'Getting started',
      title: 'The more you use it, the sharper it gets.',
      steps: [
        {
          when: 'Day 1',
          body: 'Set it up, choose your competitors and see the market chart for the next 30 nights right away',
        },
        {
          when: 'Every Tuesday',
          body: 'Suggested rates for Friday–Saturday nights and long weekends on LINE, with no data entry',
        },
        {
          when: 'When you send bookings daily',
          body: 'Type them, upload them or send the file on LINE, and you also get weekday rates and a summary every morning at 07:00',
        },
      ],
      footnote: '',
    },
    integrations: {
      eyebrow: 'Works with your system',
      title: 'Works with the system you already have — no need to change your PMS.',
      lead:
        'Upload the report you export from the PMS you already use, or send the PMS report file on LINE · With no PMS, staff enter the room numbers in about 2 minutes a day on a phone · Works alongside your existing channel manager; the system never changes your OTA rates itself.',
      points: [
        { title: 'With a PMS', body: 'Upload your PMS report, or send the file on LINE, once a day' },
        { title: 'Without a PMS', body: 'Enter the room numbers on a phone, about 2 minutes a day' },
        { title: 'Channel manager', body: 'Keep the one you have; you change the rates yourself' },
      ],
    },
    founder: {
      eyebrow: 'Founder',
      title: 'Built by a resort owner, used every morning.',
      body: 'RateDesk is built and used every morning at a resort in Korat. Every feature is used for real at the front desk before other hotels and resorts get it.',
    },
    report: {
      title: 'Want to know nearby properties’ rates for the next 30 nights? Message us on LINE.',
      body: 'Name 3–5 properties you want to compare and we send you a rate table within 24 hours. No sign-up needed.',
      button: 'Message us on LINE',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions from hotel and resort owners.',
      items: [
        {
          q: 'Is it available now?',
          a: 'Yes. Message our LINE account, AuraSea OS (@auraseaos), or sign up yourself at app.auraseaos.com.',
          link: { label: 'Message us on LINE', href: LINE_URL },
        },
        {
          q: 'What size of hotel or resort is it for?',
          a: 'Hotels, resorts and guest houses of about 10–100 rooms, especially owner-run ones without a full-time revenue team.',
        },
        {
          q: 'Can I use it without a PMS?',
          a: 'Yes. Staff enter the number of rooms sold on a phone, in about 2 minutes a day.',
        },
        {
          q: 'I don’t have time to enter data every day. Can I still use it?',
          a: 'Yes, with no data entry at all. Every Tuesday you get suggested rates for Friday–Saturday nights and long weekends on LINE, from the market around you. Send your bookings daily and you also get weekday rates and a morning summary.',
        },
        {
          q: 'How much does it cost?',
          a: 'A free trial of at least 30 days, and a free plan to continue on. The full plan is priced by property size — message us on LINE for the price.',
          link: { label: 'Message us on LINE', href: LINE_URL },
        },
        {
          q: 'Does it change my rates on the OTAs by itself?',
          a: 'No. The system suggests and you decide, and it never suggests a rate below the minimum you set.',
        },
        {
          q: 'Who sets it up and trains my staff?',
          a: 'Sign up and set it up yourself at app.auraseaos.com, or we set it up with you at your hotel or resort, or by LINE video call.',
        },
        {
          q: 'How is this different from Western RMS platforms?',
          a: 'RateDesk is built for Thai hotels and resorts — it understands local holidays and festivals, sends its summary on LINE, works in Thai from day one, and we set it up for you, on site or online.',
        },
        {
          q: 'Is my data safe?',
          a: 'Your bookings are never shown to other properties, we never sell data, and data is encrypted in transit and at rest · Property data is used only in anonymous, aggregate statistics · Everything can be deleted when you stop using it.',
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
      crosslink: 'Part of Aurasea OS — the back office for hotels and resorts',
      company:
        'AuraSea Co., Ltd. (บริษัท ออร่า ซี จำกัด) · Company registration 0305568007729 · Nakhon Ratchasima · Tel 0835159599 (daily 08:00–18:00) · LINE AuraSea OS (@auraseaos) · hello@ratedesk.ai',
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
          line: 'LINE AuraSea OS (@auraseaos)',
          phone: 'Tel 0835159599',
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

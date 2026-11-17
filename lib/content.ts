export type Lang = 'th' | 'en';

/** The one place a visitor is sent to start: the Aurasea OS LINE account. */
export const LINE_URL = 'https://lin.ee/ydDaqx8l';
export const PHONE_DISPLAY = '0835159599';
export const PHONE_TEL = 'tel:+66835159599';
export const EMAIL = 'hello@aurasea.ai';
export const AURASEAOS_URL = 'https://www.auraseaos.com';
/** Self-serve sign-up in the app (O3, live since 14 Nov 2026). */
export const SIGNUP_URL = 'https://app.auraseaos.com/signup';

const rawContent = {
  th: {
    locale: 'th',
    other: 'en',
    meta: {
      title: 'RateDesk · ราคาห้องที่ควรขายทุกคืนใน LINE สำหรับโรงแรมเล็กและรีสอร์ท',
      description:
        'RateDesk เช็กราคาที่พักรอบตัวคุณทุกคืน แล้วส่งราคาที่ควรขายเข้า LINE พร้อมเหตุผล คุณตัดสินใจเอง · สำหรับโรงแรมเล็ก รีสอร์ท โฮมสเตย์ พูลวิลล่า แกลมปิ้ง ที่ขายบน Agoda',
    },
    nav: {
      features: 'ฟีเจอร์',
      steps: 'เริ่มใช้งาน',
      faq: 'คำถามที่พบบ่อย',
    },
    cta: {
      primary: 'ส่งชื่อที่พักใน LINE รับกราฟราคา 30 คืนฟรี',
      primaryHealthCheck: 'ตรวจสุขภาพราคาฟรีใน LINE · รู้ผลใน 5 นาที',
      header: 'ทักใน LINE',
      trust: 'ทดลองฟรี 30 วัน ครอบคลุมวันหยุดยาว · ไม่ผูกบัตร · ไม่มีสัญญา',
      signup: 'สมัครเองได้เลย',
      qr: 'สแกนเพื่อเพิ่ม LINE AuraSea OS (@auraseaos)',
    },
    hero: {
      eyebrow: 'เปิดใช้งานแล้ว · สำหรับโรงแรมและรีสอร์ทอิสระ',
      title: 'ตลาดขึ้นราคา\nแต่ราคาคุณยังเท่าเดิม?',
      lead: 'RateDesk เช็กราคาที่พักรอบตัวคุณทุกคืน แล้วส่งราคาที่ควรขายเข้า LINE พร้อมเหตุผล คุณตัดสินใจเอง',
      forWhom: 'สำหรับโรงแรมเล็ก รีสอร์ท โฮมสเตย์ พูลวิลล่า แกลมปิ้ง ที่ขายบน Agoda',
      caption: 'ส่วนหนึ่งของ Aurasea OS — ระบบหลังบ้านของโรงแรมและรีสอร์ท',
    },
    index: {
      eyebrow: 'ดัชนีเขาใหญ่',
      homeEyebrow: 'ข้อมูลตลาดจริง อัปเดตทุกคืน',
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
    realMessage: {
      eyebrow: 'ข้อความจริง',
      title: 'ข้อความจริงที่เจ้าของที่พักได้รับ',
      lead: 'ส่งเข้า LINE ทุกเช้า อ่านจบในไม่กี่วินาที · ชื่อที่พักถูกซ่อนไว้',
    },
    problemFix: {
      eyebrow: 'ปัญหาที่เราแก้',
      title: 'สามเรื่องที่ทำให้ขายห้องได้ต่ำกว่าที่ควร',
      pairs: [
        { problem: 'ไล่เช็กราคา Agoda ทีละเว็บทุกเช้า', fix: 'ระบบเช็กราคาที่พักรอบตัวคุณให้ทุกคืน' },
        { problem: 'ห้องหมดตั้งแต่ยังขายราคาวันธรรมดา', fix: 'รู้ล่วงหน้าว่าคืนไหนตลาดขึ้นราคา' },
        { problem: 'ไม่แน่ใจว่าควรขึ้นราคาเท่าไหร่', fix: 'ราคาแนะนำแยกประเภทห้อง พร้อมเหตุผล' },
      ],
    },
    features: {
      eyebrow: 'ฟีเจอร์',
      title: 'สิ่งที่ RateDesk ทำให้คุณ',
      soon: 'เร็วๆ นี้',
      items: [
        { key: 'reasons', title: 'ราคาแนะนำพร้อมเหตุผล', body: 'ทุกราคาแนะนำบอกว่าทำไม เช่น ตลาดขึ้นราคา หรือเป็นคืนก่อนวันหยุด' },
        { key: 'holidayCards', title: 'วันหยุดยาวล่วงหน้า 90 วัน', body: 'ดูว่าที่พักรอบตัวเริ่มขึ้นราคาวันหยุดยาวหรือยัง ก่อนห้องราคาถูกของคุณจะหมด' },
        { key: 'approveInLine', title: 'กดอนุมัติใน LINE', body: 'อนุมัติราคาใน LINE แล้วคัดลอกไปตั้งใน Agoda ได้ในคลิกเดียว' },
        { key: 'limits', title: 'ขีดจำกัดของคุณ', body: 'ตั้งราคาต่ำสุด สูงสุด หรือล็อกราคาไว้ ระบบไม่แนะนำเกินขอบเขตนี้' },
        { key: 'changeAlerts', title: 'แจ้งเมื่อมีอะไรเปลี่ยน', body: 'แจ้งเฉพาะเมื่อตลาดหรือยอดจองเปลี่ยน ไม่ส่งข้อความรก' },
        { key: 'priceGaps', title: 'ราคาต่างกันระหว่างเว็บ', body: 'เห็นเมื่อราคาของคุณบน Agoda กับ Booking.com ไม่ตรงกัน' },
        { key: 'localEvents', title: 'งานในพื้นที่', body: 'คอนเสิร์ต งานวิ่ง เทศกาล และวันหยุดใกล้คุณ อยู่ในปฏิทินและสรุปเช้า' },
        { key: 'noDataEntry', title: 'ไม่ต้องกรอกข้อมูลก็เริ่มได้', body: 'เริ่มจากราคาตลาดรอบตัวคุณได้เลย ส่งข้อมูลการจองเพิ่มเมื่อพร้อม' },
      ],
    },
    steps: {
      eyebrow: 'เริ่มใช้งาน',
      title: 'เริ่มใน 3 ขั้น',
      items: [
        'ทักใน LINE ส่งชื่อที่พัก รับกราฟราคา 30 คืนฟรี',
        'สมัครเองใน 10 นาที เห็นกราฟราคาตลาดทันที',
        'ทุกวันอังคาร ได้ราคาแนะนำคืนวันศุกร์–เสาร์และวันหยุดทาง LINE',
      ],
      itemsHealthCheck: [
        'ตรวจสุขภาพราคาฟรีใน LINE รู้ผลใน 5 นาที',
        'สมัครเองใน 10 นาที เห็นกราฟราคาตลาดทันที',
        'ทุกวันอังคาร ได้ราคาแนะนำคืนวันศุกร์–เสาร์และวันหยุดทาง LINE',
      ],
      note: 'ถ้าส่งข้อมูลการจองรายวัน (กรอกในมือถือ อัปโหลด หรือส่งไฟล์รายงานจาก PMS ทาง LINE) จะได้ราคาวันธรรมดาด้วย พร้อมสรุปทุกเช้า 07:00',
    },
    proof: {
      eyebrow: 'จากผู้ใช้จริง',
      title: 'เจ้าของที่พักพูดถึง RateDesk',
    },
    trust: {
      eyebrow: 'คุณคุมราคาเอง',
      title: 'คุณเป็นคนคุมราคาเสมอ',
      checks: [
        'ระบบแนะนำ คุณตัดสินใจเอง',
        'ไม่เปลี่ยนราคาบน Agoda หรือ Channel Manager เอง',
        'ไม่แนะนำต่ำกว่าราคาขั้นต่ำที่คุณตั้งไว้',
        'บอกเหตุผลทุกครั้ง ถ้าข้อมูลยังน้อย บอกตรงๆ ว่า "ข้อมูลยังไม่พอ — คงราคาไว้ก่อน"',
        'ยอดจองของคุณไม่แชร์ให้ที่พักอื่น',
      ],
      builtWith: 'สร้างและใช้จริงทุกวันกับ{label}',
      builtFallback: 'สร้างและใช้งานจริงในโคราช',
    },
    compare: {
      eyebrow: 'เทียบกัน',
      title: 'เช็กเอง vs RateDesk',
      columns: ['', 'เช็กเอง', 'RateDesk'],
      rows: [
        ['เวลา', 'ไล่ดู Agoda ทีละที่ทุกเช้า', 'เช็กให้ทุกคืน สรุปเข้า LINE'],
        ['วันหยุด', 'รู้ตอนห้องราคาถูกหมดแล้ว', 'เห็นล่วงหน้าว่าตลาดเริ่มขึ้นราคา'],
        ['เหตุผล', 'ตัดสินใจจากความรู้สึก', 'ราคาแนะนำพร้อมเหตุผลทุกครั้ง'],
        ['LINE', 'ต้องเปิดหลายเว็บหลายแอป', 'อ่านจบใน LINE ที่ใช้อยู่แล้ว'],
      ],
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
          q: 'ราคาตลาดมาจากไหน?',
          a: 'จากราคาห้องเริ่มต้นที่เปิดขายสาธารณะบน Google สำหรับ 2 ท่าน 1 คืน ของที่พักที่คุณเลือกเป็นคู่แข่ง อัปเดตทุกคืน · เลือกคู่แข่งของคุณเองได้',
        },
        {
          q: 'ทำไมเชื่อราคาแนะนำได้?',
          a: 'ทุกราคาแนะนำบอกเหตุผล เช่น ตลาดขึ้นราคา หรือเป็นคืนก่อนวันหยุด ไม่ต่ำกว่าราคาขั้นต่ำที่คุณตั้ง และถ้าข้อมูลยังน้อย ระบบบอกตรงๆ ว่าคงราคาไว้ก่อน คุณเห็นที่มาของทุกตัวเลข และตัดสินใจเอง',
        },
        {
          q: 'ใช้กับ PMS และ Channel Manager เดิมได้ไหม?',
          a: 'ได้ ส่งไฟล์รายงานจาก PMS ทาง LINE หรืออัปโหลดในแอป (EasyFO, Little Hotelier, RoomScope) · ถ้าไม่มี PMS พนักงานกรอกยอดห้องวันละประมาณ 2 นาทีผ่านมือถือ · Channel Manager ใช้ของเดิมได้ คุณเป็นคนเปลี่ยนราคาเอง',
        },
        {
          q: 'ไม่มีเวลากรอกข้อมูลทุกวัน ใช้ได้ไหม?',
          a: 'ได้ ไม่ต้องกรอกอะไร ทุกวันอังคารระบบส่งราคาแนะนำคืนวันศุกร์–เสาร์และวันหยุดยาวทาง LINE จากราคาตลาดรอบตัวคุณ ถ้าส่งข้อมูลการจองทุกวัน จะได้ราคาวันธรรมดาและสรุปทุกเช้าเพิ่ม',
        },
        {
          q: 'ราคาเท่าไหร่?',
          a: 'ทดลองฟรี 30 วัน มีแพ็กเกจฟรีให้ใช้ตลอด และแพ็กเกจตามขนาดที่พัก สอบถามใน LINE',
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
        'บริษัท ออร่า ซี จำกัด (AuraSea Co., Ltd.) · ทะเบียนนิติบุคคล 0305568007729 · นครราชสีมา · โทร 0835159599 (ทุกวัน 08:00–18:00 น.) · LINE AuraSea OS (@auraseaos) · hello@aurasea.ai',
      privacy: { label: 'นโยบายความเป็นส่วนตัว', href: 'https://www.auraseaos.com/privacy' },
      sections: {
        product: {
          title: 'ผลิตภัณฑ์',
          links: [
            { label: 'ฟีเจอร์', href: '#features' },
            { label: 'เริ่มใช้งาน', href: '#steps' },
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
      title: 'RateDesk · The rate to sell every night, on LINE, for small hotels and resorts',
      description:
        'RateDesk checks the properties around you every night, then sends the rate to sell to your LINE, with the reason. You decide · For small hotels, resorts, homestays, pool villas and glamping sites selling on Agoda.',
    },
    nav: {
      features: 'Features',
      steps: 'Getting started',
      faq: 'FAQ',
    },
    cta: {
      primary: 'Send your property’s name on LINE — free 30-night rate chart',
      primaryHealthCheck: 'Free rate health check on LINE · results in 5 minutes',
      header: 'Message us on LINE',
      trust: '30-day free trial covering a long weekend · No card · No contract',
      signup: 'Sign up yourself',
      qr: 'Scan to add LINE AuraSea OS (@auraseaos)',
    },
    hero: {
      eyebrow: 'Live now · For independent hotels and resorts',
      title: 'The market is raising rates.\nAre yours still the same?',
      lead: 'RateDesk checks the properties around you every night, then sends the rate to sell to your LINE, with the reason. You decide.',
      forWhom: 'For small hotels, resorts, homestays, pool villas and glamping sites that sell on Agoda',
      caption: 'Part of Aurasea OS — the back office for hotels and resorts',
    },
    index: {
      eyebrow: 'Khao Yai Index',
      homeEyebrow: 'Real market data, updated every night',
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
    realMessage: {
      eyebrow: 'A real message',
      title: 'A real message an owner received',
      lead: 'Sent to LINE every morning, read in seconds · Property names hidden',
    },
    problemFix: {
      eyebrow: 'What we fix',
      title: 'Three things that make you sell rooms too cheap',
      pairs: [
        { problem: 'Checking Agoda site by site every morning', fix: 'RateDesk checks the properties around you every night' },
        { problem: 'Selling out while still at weekday rates', fix: 'Know ahead which nights the market is raising rates' },
        { problem: 'Not sure how much to raise', fix: 'A suggested rate per room type, with the reason' },
      ],
    },
    features: {
      eyebrow: 'Features',
      title: 'What RateDesk does for you',
      soon: 'Coming soon',
      items: [
        { key: 'reasons', title: 'Every rate with its reason', body: 'Each suggested rate says why — the market is rising, or it is the night before a holiday.' },
        { key: 'holidayCards', title: 'Long holidays, 90 days ahead', body: 'See whether nearby properties have started raising holiday rates, before your cheap rooms are gone.' },
        { key: 'approveInLine', title: 'Approve in LINE', body: 'Approve a rate in LINE, then copy it to Agoda in one click.' },
        { key: 'limits', title: 'Your limits', body: 'Set a minimum, a maximum, or lock a rate — suggestions stay inside them.' },
        { key: 'changeAlerts', title: 'Alerts only when something changes', body: 'Only when the market or your bookings move. No clutter.' },
        { key: 'priceGaps', title: 'Rate gaps between websites', body: 'See when your rate on Agoda and Booking.com don’t match.' },
        { key: 'localEvents', title: 'Local events', body: 'Concerts, runs, festivals and holidays near you, in your calendar and morning summary.' },
        { key: 'noDataEntry', title: 'Start without entering data', body: 'Start from the market around you right away; send your bookings when you’re ready.' },
      ],
    },
    steps: {
      eyebrow: 'Getting started',
      title: 'Start in 3 steps',
      items: [
        'Message us on LINE with your property’s name — get a free 30-night rate chart',
        'Sign up yourself in 10 minutes and see the market chart right away',
        'Every Tuesday, get suggested rates for Friday–Saturday nights and holidays on LINE',
      ],
      itemsHealthCheck: [
        'Run a free rate health check on LINE — results in 5 minutes',
        'Sign up yourself in 10 minutes and see the market chart right away',
        'Every Tuesday, get suggested rates for Friday–Saturday nights and holidays on LINE',
      ],
      note: 'Send your daily bookings (on your phone, by upload, or a PMS report file on LINE) and you also get weekday rates and a 07:00 morning summary.',
    },
    proof: {
      eyebrow: 'From real users',
      title: 'What property owners say',
    },
    trust: {
      eyebrow: 'You stay in control',
      title: 'You always control your rates',
      checks: [
        'The system suggests, you decide',
        'It never changes your rates on Agoda or your channel manager',
        'It never suggests below the minimum you set',
        'It always gives the reason — and with too little data it says so: "Not enough data yet — hold the rate"',
        'Your bookings are never shared with other properties',
      ],
      builtWith: 'Built with, and used every day at, a {label}',
      builtFallback: 'Built and used every day in Korat',
    },
    compare: {
      eyebrow: 'Compared',
      title: 'Checking yourself vs RateDesk',
      columns: ['', 'Checking yourself', 'RateDesk'],
      rows: [
        ['Time', 'Going through Agoda one property at a time, every morning', 'Checked every night, summarised in LINE'],
        ['Holidays', 'You find out when your cheap rooms are already gone', 'See early that the market is starting to rise'],
        ['Reasons', 'A gut feeling', 'Every suggested rate comes with its reason'],
        ['LINE', 'Several websites and apps', 'Read it all in the LINE you already use'],
      ],
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
          q: 'Where do the market rates come from?',
          a: 'From the public starting rate on Google for 2 guests, 1 night, at the properties you choose as competitors — refreshed every night. You pick your own competitors.',
        },
        {
          q: 'Why can I trust a suggested rate?',
          a: 'Every suggested rate gives its reason — the market is rising, or it is the night before a holiday. It never goes below the minimum you set, and with too little data it says so and holds the rate. You see where every number comes from, and you decide.',
        },
        {
          q: 'Does it work with my PMS and channel manager?',
          a: 'Yes. Send your PMS report file on LINE or upload it in the app (EasyFO, Little Hotelier, RoomScope) · Without a PMS, staff enter rooms sold on a phone in about 2 minutes a day · Keep your channel manager — you change the rates yourself.',
        },
        {
          q: 'I don’t have time to enter data every day. Can I still use it?',
          a: 'Yes, with no data entry at all. Every Tuesday you get suggested rates for Friday–Saturday nights and long weekends on LINE, from the market around you. Send your bookings daily and you also get weekday rates and a morning summary.',
        },
        {
          q: 'How much does it cost?',
          a: 'A 30-day free trial, a free plan you can keep, and plans by property size — ask us on LINE.',
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
        'AuraSea Co., Ltd. (บริษัท ออร่า ซี จำกัด) · Company registration 0305568007729 · Nakhon Ratchasima · Tel 0835159599 (daily 08:00–18:00) · LINE AuraSea OS (@auraseaos) · hello@aurasea.ai',
      privacy: { label: 'Privacy policy', href: 'https://www.auraseaos.com/en/privacy' },
      sections: {
        product: {
          title: 'Product',
          links: [
            { label: 'Features', href: '#features' },
            { label: 'Getting started', href: '#steps' },
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

export type Lang = 'th' | 'en';

export const content = {
  th: {
    locale: 'th',
    other: 'en',
    nav: {
      howItWorks: 'วิธีใช้งาน',
      integrations: 'การเชื่อมต่อ',
      pricing: 'ราคา',
      faq: 'คำถามที่พบบ่อย',
    },
    cta: {
      contact: 'ติดต่อทีมงาน',
    },
    hero: {
      eyebrow: 'AUTOMATED REVENUE MANAGEMENT · เปิดให้ใช้งานแล้ว',
      title: 'ราคาห้องที่ใช่\nสำหรับทุกคืน',
      lead: 'RateDesk.ai เป็นระบบบริหารรายได้ห้องพักอัตโนมัติ ออกแบบมาเพื่อโรงแรมและรีสอร์ทอิสระในเอเชียตะวันออกเฉียงใต้ — แนะนำราคาที่เหมาะสมทุกเช้า ผ่าน LINE',
      caption:
        'สร้างขึ้นบน Aurasea OS แพลตฟอร์มปัญญาเชิงปฏิบัติการสำหรับ SME ในไทย',
    },
    problem: {
      eyebrow: 'ความท้าทาย',
      title: 'ราคาห้องตัดสินใจช้า\nรายได้หลุดมือทุกคืน',
      body: [
        'เจ้าของโรงแรมและรีสอร์ทอิสระต้องเช็คราคาคู่แข่ง วิเคราะห์ pickup รายวัน และปรับราคาบน Channel Manager — ทั้งหมดด้วยตัวเองตอนเช้าก่อนเปิดออฟฟิศ',
        'ผลคือ ราคาห้องมักช้ากว่าตลาด 24–48 ชั่วโมง ในช่วงพีคเสียโอกาสขึ้นราคา ในช่วงโลว์ปล่อยห้องว่างทั้งที่ลดราคานิดเดียวก็ขายได้',
        'RateDesk.ai ทำงานทุกคืนแทนคุณ — ดึงข้อมูล pickup เปรียบเทียบคู่แข่ง 5–10 แห่ง และส่งคำแนะนำราคาที่ใช่มาทาง LINE ก่อนกาแฟแก้วแรกของวัน',
      ],
    },
    how: {
      eyebrow: 'วิธีใช้งาน',
      title: 'สามชั้นของการตัดสินใจราคา',
      steps: [
        {
          n: '01',
          title: 'แนะนำราคา',
          body: 'ทุกคืน RateDesk วิเคราะห์ booking pace, ความต้องการตามฤดูกาล และเป้าหมายของคุณ — แล้วแนะนำราคาที่ใช่สำหรับ 30 วันข้างหน้า พร้อมเหตุผลที่อธิบายเป็นภาษาที่เข้าใจง่าย',
        },
        {
          n: '02',
          title: 'เช็คคู่แข่งอัตโนมัติ',
          body: 'ถ่ายหน้าจอผลค้นหา OTA ส่งเข้ามา ระบบอ่านราคาคู่แข่งให้ทั้งหน้า จับคู่กับคู่แข่งที่คุณตั้งไว้ และให้คุณตรวจก่อนบันทึก จากนั้นทุกเช้าคุณจะเห็นว่าช่องว่างราคาขยับไปทางไหน',
        },
        {
          n: '03',
          title: 'สรุปเช้าผ่าน LINE',
          body: '7 โมงเช้า สรุป KPI เมื่อวาน: ADR, RevPAR, Occupancy, pickup สัปดาห์หน้า — และ 3 สิ่งที่ควรทำวันนี้ ส่งตรงถึงคุณบน LINE',
        },
      ],
    },
    integrations: {
      eyebrow: 'การเชื่อมต่อ',
      title: 'ทำงานกับระบบที่คุณใช้อยู่',
      lead:
        'RateDesk เชื่อมต่อกับ PMS และ Channel Manager หลักในไทยและภูมิภาค — ไม่ต้องเปลี่ยนระบบเดิม ไม่ต้องป้อนข้อมูลซ้ำ',
      partners: ['Easyfo', 'Cloudbeds', 'SiteMinder', 'Little Hotelier'],
      note: 'ต้องการ PMS อื่น? คุยกับเรา เราเปิด integration ตามลูกค้ารายหลัก',
    },
    designPartner: {
      eyebrow: 'พันธมิตรการออกแบบ',
      title: 'สร้างร่วมกับ Crystal Resort',
      body: 'RateDesk.ai พัฒนาโดยอิงประสบการณ์จริงจาก Crystal Resort — รีสอร์ทบูทีคในนครราชสีมาที่เป็นพันธมิตรการออกแบบของเรา ทุกฟีเจอร์ผ่านการใช้งานจริงก่อนปล่อยให้ลูกค้า',
      attribution: 'Crystal Resort · นครราชสีมา · พันธมิตรการออกแบบ Aurasea',
    },
    pricing: {
      eyebrow: 'ราคา',
      title: 'ราคาเดียว ครบทุกฟีเจอร์',
      lead: 'ราคาเดียวต่อสาขา รวมทุกอย่าง — คำแนะนำราคา สรุปเช้ารายประเภทห้อง การติดตามราคาคู่แข่ง และ Aurasea OS ไม่มีค่าเสริม',
      standard: {
        label: 'รายเดือน',
        price: '฿890',
        unit: '/ สาขา / เดือน',
        note: 'ยกเลิกได้ทุกเมื่อ ไม่มีสัญญาผูกมัด',
        badge: 'ราคาเดียว',
      },
      bundle: {
        label: 'โรงแรม + ร้านอาหาร',
        price: '฿990',
        unit: '/ เดือน',
        note: 'สำหรับคู่แรก — RateDesk ฿890 + MenuDesk ฿199 รวมเป็น ฿990 สาขาถัดไปคิดราคาปกติ',
      },
      promos: [
        { icon: '60', text: 'ทดลองฟรี 60 วัน ไม่ต้องใช้บัตรเครดิต' },
        { icon: 'OS', text: 'Aurasea OS รวมอยู่แล้ว ไม่คิดเพิ่ม' },
      ],
      includes: [
        'คำแนะนำราคา สำหรับ 30 วันข้างหน้า',
        'สรุปเช้ารายประเภทห้อง ทาง LINE และอีเมล ทุกวัน 7 โมง',
        'ติดตามราคาคู่แข่ง — ถ่ายหน้าจอ OTA แล้วระบบอ่านให้ คุณตรวจก่อนบันทึก',
        'Aurasea OS — ระบบปฏิบัติการสำหรับธุรกิจ SME',
      ],
      notYet: {
        label: 'ยังไม่เปิดใช้งาน',
        items: [
          'Auto Push — กดอนุมัติแล้วส่งราคากลับเข้า PMS รวมอยู่ในราคาแล้ว แต่เรายังพัฒนาการส่งราคากลับไม่เสร็จกับ PMS ระบบใดเลย',
        ],
      },
      cta: 'เริ่มทดลองฟรี 60 วัน',
      ctaSecondary: 'คุยกับเราก่อน',
      menudesk: 'MenuDesk.ai สำหรับร้านอาหารและคาเฟ่ — เปิดให้บริการแล้ว',
    },
    faq: {
      eyebrow: 'คำถามที่พบบ่อย',
      title: 'คำถามจากเจ้าของโรงแรม',
      items: [
        {
          q: 'RateDesk.ai เปิดให้ใช้งานได้แล้วหรือยัง?',
          a: 'เปิดให้ใช้งานแล้ว เริ่มต้นด้วยการทดลองฟรี 60 วัน ไม่ต้องใช้บัตรเครดิต มีคำถามหรืออยากให้เราพาชมก่อน ส่งอีเมลมาที่ hello@ratedesk.ai',
        },
        {
          q: 'เหมาะกับโรงแรมขนาดไหน?',
          a: 'ออกแบบมาสำหรับโรงแรมและรีสอร์ทอิสระขนาด 20–150 ห้อง โดยเฉพาะกลุ่มที่ไม่มีทีม revenue management เต็มเวลา',
        },
        {
          q: 'ต่างจากระบบ RMS ของฝั่งตะวันตกอย่างไร?',
          a: 'RateDesk สร้างมาเพื่อตลาดเอเชียตะวันออกเฉียงใต้ — เข้าใจฤดูกาลของไทย ทำงานบน LINE ราคาเริ่มต้นเหมาะกับโรงแรมอิสระ ไม่ใช่เชนระดับโลก และอินเตอร์เฟซเป็นภาษาไทยตั้งแต่วันแรก',
        },
        {
          q: 'ข้อมูลของผมปลอดภัยไหม?',
          a: 'ข้อมูลของคุณเป็นของคุณ เราไม่แชร์ข้อมูลข้ามลูกค้า ไม่ขายให้บุคคลที่สาม และเก็บข้อมูลในเซิร์ฟเวอร์ที่เข้ารหัส รายละเอียดเพิ่มเติมในนโยบายความเป็นส่วนตัวเมื่อเปิดตัว',
        },
        {
          q: 'ราคาเท่าไหร่?',
          a: '฿890 / สาขา / เดือน ราคาเดียว ไม่มีค่าเสริม รวมคำแนะนำราคา สรุปเช้ารายประเภทห้อง การติดตามราคาคู่แข่ง และ Aurasea OS ถ้าคุณมีทั้งโรงแรมและร้านอาหาร คู่แรกราคา ฿990 ต่อเดือน (RateDesk ฿890 + MenuDesk ฿199) ทดลองฟรี 60 วัน ไม่ต้องใช้บัตรเครดิต · Auto Push รวมอยู่ในราคาแล้ว แต่ยังใช้งานไม่ได้ — เรายังพัฒนาการส่งราคากลับเข้า PMS ไม่เสร็จ',
        },
      ],
    },
    footer: {
      tagline: 'ระบบบริหารรายได้ห้องพักอัตโนมัติสำหรับโรงแรมและรีสอร์ทอิสระในเอเชียตะวันออกเฉียงใต้',
      crosslink:
        'RateDesk.ai เป็นส่วนหนึ่งของ Aurasea — แพลตฟอร์มปัญญาเชิงปฏิบัติการสำหรับ SME ในไทย ดูเพิ่มเติมที่ MenuDesk.ai สำหรับร้านอาหารและคาเฟ่',
      sections: {
        product: {
          title: 'ผลิตภัณฑ์',
          links: [
            { label: 'วิธีใช้งาน', href: '#how' },
            { label: 'การเชื่อมต่อ', href: '#integrations' },
            { label: 'คำถามที่พบบ่อย', href: '#faq' },
          ],
        },
        ecosystem: {
          title: 'Aurasea',
          links: [
            { label: 'Aurasea OS ↗', href: 'https://www.auraseaos.com' },
            { label: 'MenuDesk.ai (เร็วๆ นี้) ↗', href: 'https://www.aurasea.ai' },
            { label: 'บริษัท Aurasea ↗', href: 'https://www.aurasea.ai' },
          ],
        },
        contact: {
          title: 'ติดต่อ',
          email: 'hello@ratedesk.ai',
          location: 'กรุงเทพฯ · นครราชสีมา · ประเทศไทย',
        },
      },
      copyright: '© 2026 Aurasea Co., Ltd. สงวนลิขสิทธิ์',
    },
  },
  en: {
    locale: 'en',
    other: 'th',
    nav: {
      howItWorks: 'How it works',
      integrations: 'Integrations',
      pricing: 'Pricing',
      faq: 'FAQ',
    },
    cta: {
      contact: 'Contact us',
    },
    hero: {
      eyebrow: 'AUTOMATED REVENUE MANAGEMENT · NOW OPEN',
      title: 'The right room rate,\nevery night.',
      lead: 'RateDesk.ai is automated revenue management built for independent hotels and resorts across Southeast Asia — the right rate recommendation, every morning, on LINE.',
      caption:
        'Built on Aurasea OS — the operational intelligence platform for SEA small businesses.',
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Rate decisions made too slowly.\nRevenue lost every night.',
      body: [
        'Independent hotel and resort owners check competitor rates, analyse daily pickup, and adjust prices in their channel manager — all manually, every morning before the office opens.',
        'The result: rates lag the market by 24–48 hours. In peak periods you miss the chance to push price. In soft periods you sit on empty rooms when a small adjustment would have closed the booking.',
        'RateDesk.ai works through the night so you don\'t have to — pulling pickup data, shopping 5–10 competitors, and sending the right rate recommendation to LINE before your first coffee.',
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'Three layers of rate intelligence.',
      steps: [
        {
          n: '01',
          title: 'Rate recommendations',
          body: 'Each night, RateDesk analyses your booking pace, seasonal demand, and revenue targets — then recommends the right rate for the next 30 nights, with the reasoning explained in plain language.',
        },
        {
          n: '02',
          title: 'Automated competitor shopping',
          body: 'Screenshot an OTA search page and send it in. We read every rate on it, match them to the competitors you track, and hand them back for you to check before anything saves. From then on the morning brief shows you which way the gap has moved.',
        },
        {
          n: '03',
          title: 'A 7am LINE briefing',
          body: 'Yesterday\'s ADR, RevPAR, occupancy. Next week\'s pickup. Three things to do today. Delivered every morning to LINE — the channel SEA hoteliers actually use.',
        },
      ],
    },
    integrations: {
      eyebrow: 'Integrations',
      title: 'Works with the systems you already use.',
      lead:
        'RateDesk connects to the major PMS and channel managers used in Thailand and across the region — no system replacement, no double entry.',
      partners: ['Easyfo', 'Cloudbeds', 'SiteMinder', 'Little Hotelier'],
      note: 'Need a different PMS? Talk to us — we open integrations based on customer demand.',
    },
    designPartner: {
      eyebrow: 'Design partner',
      title: 'Built with Crystal Resort.',
      body: 'RateDesk.ai is shaped by real operations at Crystal Resort — a boutique resort in Nakhon Ratchasima that serves as our design partner. Every feature is used in production before it reaches a customer.',
      attribution: 'Crystal Resort · Nakhon Ratchasima · Aurasea design partner',
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'One price. Everything included.',
      lead: 'One price per branch — rate recommendations, the per-room-type morning brief, competitor rate tracking, and Aurasea OS. No add-ons.',
      standard: {
        label: 'Monthly',
        price: '฿890',
        unit: '/ branch / month',
        note: 'Cancel any time. No contract.',
        badge: 'One price',
      },
      bundle: {
        label: 'Hotel + F&B',
        price: '฿990',
        unit: '/ month',
        note: 'For your first pair — RateDesk ฿890 + MenuDesk ฿199 together for ฿990. Further branches are list price.',
      },
      promos: [
        { icon: '60', text: '60-day free trial, no credit card required' },
        { icon: 'OS', text: 'Aurasea OS included at no extra cost' },
      ],
      includes: [
        'Rate recommendations for the next 30 days',
        'Per-room-type morning brief by LINE and email, 7am daily',
        'Competitor rate tracking — screenshot an OTA page, we read it, you check it before it saves',
        'Aurasea OS — the operating system for your business',
      ],
      notYet: {
        label: 'Not live yet',
        items: [
          'Auto Push — approve a rate and have it written back to your PMS. Included in the price, but we have not finished rate write-back for any PMS yet.',
        ],
      },
      cta: 'Start 60-day free trial',
      ctaSecondary: 'Talk to us first',
      menudesk: 'MenuDesk.ai for cafes and restaurants — available now',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions from hotel owners.',
      items: [
        {
          q: 'Is RateDesk.ai available now?',
          a: 'Yes — RateDesk.ai is live. Start with a 60-day free trial, no credit card required. Questions, or want a walkthrough first? Write to hello@ratedesk.ai.',
        },
        {
          q: 'What size of property is RateDesk for?',
          a: 'RateDesk is built for independent hotels and resorts in the 20–150 room range, particularly properties without a full-time revenue management team.',
        },
        {
          q: 'How is this different from Western RMS platforms?',
          a: 'RateDesk is built for Southeast Asia — it understands Thai seasonality, runs on LINE, prices for independents (not global chains), and ships in Thai from day one.',
        },
        {
          q: 'Is my data safe?',
          a: 'Your data is yours. We do not share data across customers, never sell to third parties, and store everything encrypted at rest. Full privacy details will be published with launch.',
        },
        {
          q: 'How much does it cost?',
          a: '฿890 / branch / month. One price, no add-ons — rate recommendations, the per-room-type morning brief, competitor rate tracking, and Aurasea OS. Running a hotel and an F&B venue? Your first pair is ฿990 a month (RateDesk ฿890 + MenuDesk ฿199). 60-day free trial, no credit card. Auto Push is included in the price but is not working yet — we have not finished rate write-back for any PMS.',
        },
      ],
    },
    footer: {
      tagline:
        'Automated revenue management for independent hotels and resorts in Southeast Asia.',
      crosslink:
        'RateDesk.ai is part of Aurasea — the operational intelligence platform for SEA small businesses. See also MenuDesk.ai for cafes and restaurants.',
      sections: {
        product: {
          title: 'Product',
          links: [
            { label: 'How it works', href: '#how' },
            { label: 'Integrations', href: '#integrations' },
            { label: 'FAQ', href: '#faq' },
          ],
        },
        ecosystem: {
          title: 'Aurasea',
          links: [
            { label: 'Aurasea OS ↗', href: 'https://www.auraseaos.com' },
            { label: 'MenuDesk.ai (coming soon) ↗', href: 'https://www.aurasea.ai' },
            { label: 'Aurasea (corporate) ↗', href: 'https://www.aurasea.ai' },
          ],
        },
        contact: {
          title: 'Contact',
          email: 'hello@ratedesk.ai',
          location: 'Bangkok · Nakhon Ratchasima · Thailand',
        },
      },
      copyright: '© 2026 Aurasea Co., Ltd. All rights reserved.',
    },
  },
} as const;

export type ContentType = typeof content.en;

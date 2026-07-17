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
      eyebrow: 'AI REVENUE MANAGEMENT · เปิดให้ใช้งานแล้ว',
      title: 'ราคาห้องที่ใช่\nสำหรับทุกคืน',
      lead: 'RateDesk.ai เป็นระบบบริหารรายได้ AI ออกแบบมาเพื่อโรงแรมและรีสอร์ทอิสระในเอเชียตะวันออกเฉียงใต้ — แนะนำราคาที่เหมาะสมทุกเช้า ผ่าน LINE',
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
          body: 'ระบบช้อปราคาคู่แข่งวันละ 4 ครั้ง — เห็นทันทีว่าใครเปลี่ยนราคา ใครเริ่มขาย ใครเปิด promotion ก่อนที่ pickup ของคุณจะตก',
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
      lead: 'ราคาเดียว รวมทุกอย่าง — Auto Push, คำแนะนำ AI, สรุปเช้ารายประเภทห้อง และ Aurasea OS ไม่มีค่าเพิ่มเติม',
      annual: {
        label: 'รายปี (แนะนำ)',
        price: '฿575',
        unit: '/ สาขา / เดือน',
        note: 'เทียบเท่า ฿6,900 / ปี — ประหยัด 2 เดือนเมื่อจ่ายรายปี',
        badge: 'ราคาเริ่มต้น',
      },
      monthly: {
        label: 'รายเดือน',
        price: '฿690',
        unit: '/ สาขา / เดือน',
        note: 'ยืดหยุ่น ยกเลิกได้ทุกเมื่อ',
      },
      founding: {
        label: 'Founding Members',
        price: '฿490',
        unit: '/ สาขา / เดือน',
        note: 'ล็อกราคาตลอดชีพ · เหลือ 50 สาขาแรกเท่านั้น',
        badge: 'พิเศษ',
        perks: [
          'ราคา ฿490 ล็อกตลอดชีพ',
        ],
      },
      promos: [
        { icon: '90', text: 'ทดลองฟรี 90 วัน ไม่ต้องใช้บัตรเครดิต' },
        { icon: '−15%', text: 'ส่วนลด 15% เมื่อมี 3 สาขาขึ้นไป' },
        { icon: '1mo', text: 'แนะนำเพื่อนเจ้าของโรงแรม — ทั้งคู่ได้ฟรี 1 เดือน' },
        { icon: 'OS', text: 'Aurasea OS รวมอยู่แล้ว ไม่คิดเพิ่ม' },
      ],
      includes: [
        'Auto Push (อนุมัติหรือปรับราคาผ่าน LINE)',
        'คำแนะนำ สำหรับ 30 วันข้างหน้า',
        'สรุปเช้ารายประเภทห้องผ่าน LINE และ Email',
        'ช้อปราคาคู่แข่งอัตโนมัติ วันละ 4 ครั้ง',
        'Aurasea OS — ระบบปฏิบัติการสำหรับธุรกิจ SME',
      ],
      cta: 'เริ่มทดลองฟรี 90 วัน',
      ctaSecondary: 'สมัคร Founding Members',
      menudesk: 'MenuDesk.ai สำหรับร้านอาหารและคาเฟ่ — เปิดให้บริการ Q4 2026',
    },
    faq: {
      eyebrow: 'คำถามที่พบบ่อย',
      title: 'คำถามจากเจ้าของโรงแรม',
      items: [
        {
          q: 'RateDesk.ai เปิดให้ใช้งานได้แล้วหรือยัง?',
          a: 'เปิดให้ใช้งานแล้ว เริ่มต้นด้วยการทดลองฟรี 90 วัน ไม่ต้องใช้บัตรเครดิต หากสนใจสมัครเป็น Founding Member (50 สาขาแรก) ส่งอีเมลมาที่ hello@ratedesk.ai',
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
          a: 'ราคารายปี ฿575 / สาขา / เดือน (ประหยัด 2 เดือน) หรือ ฿690 รายเดือน รวม Auto Push, คำแนะนำ AI, สรุปเช้ารายประเภทห้อง และ Aurasea OS ทุกอย่างครบในราคาเดียว Founding Members 50 สาขาแรกได้ราคา ฿490 ล็อกตลอดชีพ ทดลองฟรี 90 วัน ไม่ต้องใช้บัตรเครดิต',
        },
      ],
    },
    footer: {
      tagline: 'ระบบบริหารรายได้ AI สำหรับโรงแรมและรีสอร์ทอิสระในเอเชียตะวันออกเฉียงใต้',
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
      eyebrow: 'AI REVENUE MANAGEMENT · NOW OPEN',
      title: 'The right room rate,\nevery night.',
      lead: 'RateDesk.ai is AI revenue management built for independent hotels and resorts across Southeast Asia — the right rate recommendation, every morning, on LINE.',
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
          body: 'We shop your competitor set four times a day — so you see the moment a neighbour drops their price, opens a promotion, or sells out, before your own pickup softens.',
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
      lead: 'One all-in price — Auto Push, AI rate recommendations, per-room-type morning brief, and Aurasea OS. No add-ons, no surprises.',
      annual: {
        label: 'Annual (recommended)',
        price: '฿575',
        unit: '/ branch / mo',
        note: '฿6,900 billed annually — save 2 months',
        badge: 'Best value',
      },
      monthly: {
        label: 'Monthly',
        price: '฿690',
        unit: '/ branch / mo',
        note: 'Flexible, cancel any time',
      },
      founding: {
        label: 'Founding Members',
        price: '฿490',
        unit: '/ branch / mo',
        note: 'Locked for life · First 50 branches only',
        badge: 'Limited',
        perks: [
          '฿490 locked for the life of your account',
          'Free 1-on-1 onboarding',
          'Direct founder access',
          'Case-study partnership',
        ],
      },
      promos: [
        { icon: '90', text: '90-day free trial, no credit card required' },
        { icon: '−15%', text: '15% off at 3+ branches' },
        { icon: '1mo', text: 'Refer a fellow owner — you both get 1 month free' },
        { icon: 'OS', text: 'Aurasea OS included, at no extra cost' },
      ],
      includes: [
        'Auto Push (approve or adjust rates via LINE)',
        'AI rate recommendations for the next 30 nights',
        'Per-room-type morning brief via LINE and email',
        'Automated competitor shopping 4× daily',
        'Aurasea OS — the operational platform for SMEs',
      ],
      cta: 'Start 90-day free trial',
      ctaSecondary: 'Join Founding Members',
      menudesk: 'MenuDesk.ai for cafes and restaurants — coming Q4 2026',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions from hotel owners.',
      items: [
        {
          q: 'Is RateDesk.ai available now?',
          a: 'Yes — RateDesk.ai is live. Start with a 90-day free trial, no credit card required. To join as a Founding Member (first 50 branches), write to hello@ratedesk.ai.',
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
          a: '฿575 / branch / month billed annually (saves 2 months), or ฿690 monthly. Everything is included — Auto Push, AI recommendations, per-room-type brief, and Aurasea OS. No add-ons. Founding Members (first 50 branches) pay ฿490 locked for life. 90-day free trial, no credit card.',
        },
      ],
    },
    footer: {
      tagline:
        'AI revenue management for independent hotels and resorts in Southeast Asia.',
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

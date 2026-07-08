export type Lang = "zh" | "en";

export type WorkLabelKey = "fashion" | "fnb" | "interior" | "realestate";

export const dictionaries = {
  zh: {
    nav: { about: "介绍", pricing: "价格", work: "作品", contact: "联系" },
    header: { brand: "你好，我叫MAX", toggle: "EN", contactAria: "联系我" },
    hero: {
      tag: "Social Media Marketing 接单中",
      headlineLine1: "策划到发布",
      headlineHighlight: "Social Media",
      headlineLine3: "交给我",
      desc: "两年的 Agency 经验。与其一次过 handle 十几二十家公司的内容，现在的我更想去专注几个账号产出更好的内容。",
      ctaWork: "查看作品",
      annotation: "这就是麦克斯",
      serviceEyebrow: "服务流程",
      serviceHeading: "从策划到发布的完整服务",
      serviceDesc: "我相信好的产品是工程与设计共同作用的结果。比起炫技，我更在意最终体验是否顺畅、是否真的解决了问题。",
      ctaService: "查看服务",
      steps: ["策划", "拍摄", "剪辑", "管理与发布"],
    },
    results: {
      heading: "Before & After",
      growthCaption: "单条内容平均曝光量变化",
      before: "Before",
      after: "After",
      beforeAlt: "合作前内容截图",
      afterAlt: "合作后内容截图",
      metrics: [
        { label: "粉丝数", sublabel: "", before: "1,200", after: "12,000" },
        {
          label: "平均互动率",
          sublabel: "(点赞 + 评论 + 分享 ÷ 粉丝数)",
          before: "1.2%",
          after: "8.5%",
        },
        { label: "单条内容平均曝光量", sublabel: "", before: "100~", after: "20K++" },
      ],
      disclaimer:
        "* 以上数据为占位示意，实际效果将在项目完成后替换为真实数据。数据表现因账号基础、行业类目及内容类型而异，不构成收益保证或承诺。",
    },
    projects: {
      heading: "领域作品",
      subtitle: "不管是个人IP 还是 企业IP 我们都轻松拿捏！",
      labels: {
        fashion: "潮流服饰",
        fnb: "F&B",
        interior: "装修 / 室内设计",
        realestate: "房产",
      } as Record<WorkLabelKey, string>,
    },
    contact: {
      headingLine: "脑力有限，只接能力范围。",
      headingHighlight: "先到先得哦！",
      whatsappBtn: "WhatsApp 联系我",
    },
    footer: "先到先得",
    pricing: {
      heading: "价格方案",
      subtitle: "简单透明的合作报价",
      packageLabel: "标准配套",
      per: "/ 月",
      growthNote: "预计增长 15%-30%",
      deliverables: [
        "每月 20-22 支内容 (每周 3 个视频 + 2 个图片内容)",
        "IG / Facebook / TikTok / 小红书",
        "内容策划",
        "拍摄设备提供",
        "剪辑制作",
        "文案撰写",
        "上传与账号管理",
        "Influencer 对接",
      ],
      note: "* 不包含出镜 / 演员人员，如需要另外报价洽谈。",
      cta: "预约咨询",
    },
  },
  en: {
    nav: { about: "About", pricing: "Pricing", work: "Work", contact: "Contact" },
    header: { brand: "Hi, I'm MAX", toggle: "中文", contactAria: "Contact me" },
    hero: {
      tag: "Social Media Marketing — Now Booking",
      headlineLine1: "Plan to Publish —",
      headlineHighlight: "Social Media",
      headlineLine3: "Leave It to Me",
      desc: "Two years of agency experience. Instead of juggling content for a dozen-plus brands at once, I now focus on a few accounts to produce better content.",
      ctaWork: "View Work",
      annotation: "That's MAX",
      serviceEyebrow: "Service Flow",
      serviceHeading: "Full service from plan to publish",
      serviceDesc: "I believe great work comes from strategy and creativity working together. More than flashy tricks, I care whether the final experience flows and truly solves the problem.",
      ctaService: "View Services",
      steps: ["Plan", "Shoot", "Edit", "Manage & Publish"],
    },
    results: {
      heading: "Before & After",
      growthCaption: "Avg. reach per post",
      before: "Before",
      after: "After",
      beforeAlt: "Content before",
      afterAlt: "Content after",
      metrics: [
        { label: "Followers", sublabel: "", before: "1,200", after: "12,000" },
        {
          label: "Avg. Engagement Rate",
          sublabel: "(Likes + Comments + Shares ÷ Followers)",
          before: "1.2%",
          after: "8.5%",
        },
        { label: "Avg. Reach per Post", sublabel: "", before: "100~", after: "20K++" },
      ],
      disclaimer:
        "* Figures shown are illustrative placeholders and will be replaced with real data once a project is complete. Results vary by account baseline, industry and content type, and do not constitute any guarantee of returns.",
    },
    projects: {
      heading: "Featured Work",
      subtitle: "Personal brand or business brand — we've got it covered!",
      labels: {
        fashion: "Fashion",
        fnb: "F&B",
        interior: "Renovation / Interior",
        realestate: "Real Estate",
      } as Record<WorkLabelKey, string>,
    },
    contact: {
      headingLine: "Limited bandwidth — I only take what I can do well.",
      headingHighlight: "First come, first served!",
      whatsappBtn: "Message me on WhatsApp",
    },
    footer: "First come, first served",
    pricing: {
      heading: "Pricing",
      subtitle: "Simple, transparent pricing",
      packageLabel: "Standard Package",
      per: "/ month",
      growthNote: "Est. 15%–30% growth",
      deliverables: [
        "20–22 pieces/month (3 videos + 2 graphics weekly)",
        "IG / Facebook / TikTok / RedNote",
        "Content planning",
        "Filming equipment provided",
        "Editing & production",
        "Copywriting",
        "Posting & account management",
        "Influencer outreach",
      ],
      note: "* On-camera talent / actors not included; quoted separately on request.",
      cta: "Book a Consultation",
    },
  },
} as const;

export function getDict(lang: Lang) {
  return dictionaries[lang];
}

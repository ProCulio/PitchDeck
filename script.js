const slides = [
  {
    title: 'ProCulio',
    subtitle: 'Verified cross-border sourcing platform and procurement marketplace for CEE SMEs',
    cover: true,
    stage: 'Pre-seed / MVP',
    hq: 'Zagreb,Croatia',
    raise: '€350,000',
    runway: '18 months'
  },
  {
    title: 'The Problem',
    body: 'SMEs in Central and Eastern Europe lose margin and speed due to fragmented supplier discovery and low trust in cross-border transactions.',
    bullets: [
      'Supplier sourcing is still manual, slow, and relationship-driven.',
      'Quality verification and payment safety are inconsistent across markets.',
      'Procurement teams lack a single workflow from discovery to order fulfillment.'
    ],
    stage: 'Market Validation',
    hq: 'Zagreb,Croatia',
    raise: '€350,000',
    runway: '18 months'
  },
  {
    title: 'Our Solution',
    body: 'ProCulio combines verified sourcing, supplier intelligence, and secure procurement tools into one buyer-first platform.',
    bullets: [
      'Pre-vetted supplier onboarding with trust scores.',
      'Built-in quote comparison and compliance-ready data trails.',
      'Escrow-backed ordering flow for safer international transactions.'
    ],
    stage: 'Product Built',
    hq: 'Zagreb,Croatia',
    raise: '€350,000',
    runway: '18 months'
  },
  {
    title: 'Market Opportunity',
    body: 'The CEE SME procurement segment is large, underserved, and rapidly digitizing as cross-border trade complexity increases.',
    bullets: [
      'Over 1.4M target SMEs across CEE and adjacent EU corridors.',
      'TAM estimated at €32B in annual procurement value under management.',
      'Initial wedge: manufacturing, packaging, and consumer goods importers.'
    ],
    stage: 'Expansion Ready',
    hq: 'Zagreb,Croatia',
    raise: '€350,000',
    runway: '18 months'
  },
  {
    title: 'Product Experience',
    body: 'The platform delivers a guided procurement journey from intent capture to supplier shortlist, quote comparison, and order management.',
    bullets: [
      'AI-assisted supplier matching tuned for CEE trade routes.',
      'Document, certification, and trade-term visibility in one panel.',
      'Simple collaboration for founders, finance teams, and operators.'
    ],
    stage: 'Beta Users',
    hq: 'Zagreb,Croatia',
    raise: '€350,000',
    runway: '18 months'
  },
  {
    title: 'Business Model',
    body: 'We monetize through transaction fees, premium verification services, and workflow subscriptions.',
    bullets: [
      '2.5-4.0% fee on completed cross-border transactions.',
      'Tiered SaaS plan for advanced analytics and team workflows.',
      'High-margin add-ons: supplier audits, logistics checks, and compliance packs.'
    ],
    stage: 'Revenue Pilot',
    hq: 'Zagreb,Croatia',
    raise: '€350,000',
    runway: '18 months'
  },
  {
    title: 'Traction',
    body: 'Early validation signals show strong demand from procurement-heavy SMEs seeking faster and safer sourcing.',
    bullets: [
      '38 active pilot companies onboarded in first rollout cohort.',
      '€1.1M GMV in validated pipeline discussions.',
      'Average onboarding cycle cut from 3 weeks to 5 days.'
    ],
    stage: 'Pilot Growth',
    hq: 'Zagreb,Croatia',
    raise: '€350,000',
    runway: '18 months'
  },
  {
    title: 'Go-to-Market',
    body: 'Our GTM combines partnership-led channels, targeted vertical campaigns, and product-led conversion loops.',
    bullets: [
      'Trade associations and industry media partnerships for trust distribution.',
      'Outbound pods focused on procurement heads in high-friction categories.',
      'Referral incentives tied to transaction milestones.'
    ],
    stage: 'Channel Buildout',
    hq: 'Zagreb,Croatia',
    raise: '€350,000',
    runway: '18 months'
  },
  {
    title: 'Competition',
    body: 'Generic B2B marketplaces lack regional trust infrastructure while enterprise suites are too heavy for SMEs.',
    bullets: [
      'Differentiation: verification depth + procurement workflow + regional focus.',
      'Faster onboarding and clearer risk controls than broad marketplaces.',
      'Local execution model with scalable digital rails.'
    ],
    stage: 'Positioning Strong',
    hq: 'Zagreb,Croatia',
    raise: '€350,000',
    runway: '18 months'
  },
  {
    title: 'Financial Outlook',
    body: 'We target efficient growth with high gross margins and disciplined CAC recovery in under 8 months.',
    bullets: [
      'Year 1 projected net revenue: €410k with 67% gross margin.',
      'Year 3 projected net revenue: €3.2M with positive EBITDA.',
      'Primary growth levers: transaction volume and upsell penetration.'
    ],
    stage: 'Forecast Ready',
    hq: 'Zagreb,Croatia',
    raise: '€350,000',
    runway: '18 months'
  },
  {
    title: 'Team',
    body: 'Founding team blends procurement, product, and cross-border operations experience across CEE markets.',
    bullets: [
      'CEO: sourcing and trade operations leadership.',
      'CTO: marketplace architecture and trust systems.',
      'Advisors: logistics, legal compliance, and B2B growth.'
    ],
    stage: 'Hiring Core Roles',
    hq: 'Zagreb,Croatia',
    raise: '€350,000',
    runway: '18 months'
  },
  {
    title: 'Funding Ask',
    body: 'We are raising €350,000 to scale product, expand verified supplier coverage, and accelerate market entry across CEE.',
    bullets: [
      '45% product and engineering acceleration.',
      '35% go-to-market and partnership activation.',
      '20% operations, compliance, and working capital buffer.'
    ],
    stage: 'Raising Now',
    hq: 'Zagreb,Croatia',
    raise: '€350,000',
    runway: '18 months'
  },
  {
    title: 'Thank You',
    body: 'We are building the trust layer for SME cross-border procurement in CEE. Let\'s transform sourcing together.',
    bullets: ['Contact: founders@proculio.com', 'Website: proculio.com', 'Next step: product demo + data room access'],
    stage: 'Next: Due Diligence',
    hq: 'Zagreb,Croatia',
    raise: 'Open Round',
    runway: '18+ months'
  }
];

const deckSections = [
  'Brand platform',
  'Problem mapping',
  'Solution design',
  'Market scope',
  'Product journey',
  'Monetization',
  'Traction proof',
  'Go-to-market',
  'Competitive edge',
  'Financial story',
  'Team strength',
  'Capital use',
  'Closing'
];

const slideContent = document.getElementById('slide-content');
const stageValue = document.getElementById('stage');
const hqValue = document.getElementById('hq');
const raiseValue = document.getElementById('raise');
const runwayValue = document.getElementById('runway');
const currentValue = document.getElementById('slide-current');
const totalValue = document.getElementById('slide-total');
const meterFill = document.getElementById('meter-fill');
const dotNav = document.getElementById('dot-nav');
const numberNav = document.getElementById('number-nav');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let currentIndex = 0;

totalValue.textContent = String(slides.length).padStart(2, '0');

function buildTemplate(slide) {
  if (slide.cover) {
    const tpl = document.getElementById('cover-slide-template').content.cloneNode(true);
    tpl.querySelector('.eyebrow').textContent = deckSections[0];
    tpl.querySelector('.subtitle').textContent = slide.subtitle;
    return tpl;
  }

  const tpl = document.getElementById('content-slide-template').content.cloneNode(true);
  tpl.querySelector('.eyebrow').textContent = deckSections[currentIndex];
  tpl.querySelector('h3').textContent = slide.title;
  tpl.querySelector('.body').textContent = slide.body;

  const list = tpl.querySelector('.bullet-list');
  slide.bullets.forEach((point) => {
    const item = document.createElement('li');
    item.textContent = point;
    list.append(item);
  });

  return tpl;
}

function renderSlide(index) {
  const slide = slides[index];
  currentIndex = index;
  slideContent.replaceChildren(buildTemplate(slide));

  stageValue.textContent = slide.stage;
  hqValue.textContent = slide.hq;
  raiseValue.textContent = slide.raise;
  runwayValue.textContent = slide.runway;

  currentValue.textContent = String(index + 1).padStart(2, '0');
  meterFill.style.width = `${((index + 1) / slides.length) * 100}%`;

  [...dotNav.children].forEach((node, idx) => {
    node.classList.toggle('active', idx === index);
    node.setAttribute('aria-current', idx === index ? 'true' : 'false');
  });

  [...numberNav.querySelectorAll('button')].forEach((node, idx) => {
    node.classList.toggle('active', idx === index);
  });
}

function jumpTo(index) {
  renderSlide((index + slides.length) % slides.length);
}

function initializeNav() {
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.title = `Go to slide ${index + 1}`;
    dot.addEventListener('click', () => jumpTo(index));
    dotNav.append(dot);

    const item = document.createElement('li');
    const number = document.createElement('button');
    number.type = 'button';
    number.textContent = String(index + 1);
    number.addEventListener('click', () => jumpTo(index));
    item.append(number);
    numberNav.append(item);
  });
}

initializeNav();
renderSlide(0);

nextBtn.addEventListener('click', () => jumpTo(currentIndex + 1));
prevBtn.addEventListener('click', () => jumpTo(currentIndex - 1));

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown') {
    jumpTo(currentIndex + 1);
  }

  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    jumpTo(currentIndex - 1);
  }
});

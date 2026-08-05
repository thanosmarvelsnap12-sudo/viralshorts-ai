const channels = [
  { name: 'YouTube Shorts', icon: '▶', accent: '#ff3156', status: 'Ready' },
  { name: 'TikTok', icon: '⚡', accent: '#14f1d9', status: 'Queued' },
  { name: 'Instagram Reels', icon: '◎', accent: '#ff9f1c', status: 'Draft' },
];

const workflow = [
  {
    title: 'Research profitable ideas',
    copy: 'Evaluate search demand, viewer pain, advertiser fit, and originality before a script is approved.',
    icon: '🪄',
  },
  {
    title: 'Produce for watch time',
    copy: 'Structure strong openings, credible evidence, satisfying pacing, and clear next-video paths.',
    icon: '✂️',
  },
  {
    title: 'Improve from analytics',
    copy: 'Use CTR, retention dips, subscriber conversion, RPM, and revenue attribution to choose the next bet.',
    icon: '🗓️',
  },
];

const metrics = [
  { value: '42%', label: 'target watch-time lift' },
  { value: '+28%', label: 'CTR testing upside' },
  { value: '12', label: 'channels per portfolio pod' },
];

const businessPillars = [
  'Original research-led scripts',
  'Viewer satisfaction scoring',
  'YPP-safe policy checks',
  'Affiliate and sponsor fit',
];


const channelPortfolio = [
  {
    name: 'Money Mechanics',
    niche: 'Personal finance explainers',
    stage: 'Script review',
    watchTime: '7.8 min',
    ctr: '8.6%',
    revenue: '$18.40 RPM',
  },
  {
    name: 'Creator Systems Lab',
    niche: 'AI workflow tutorials',
    stage: 'Thumbnail test',
    watchTime: '63%',
    ctr: '11.2%',
    revenue: '2 sponsors queued',
  },
  {
    name: 'Healthspan Brief',
    niche: 'Evidence-led wellness',
    stage: 'Compliance gate',
    watchTime: '6.1 min',
    ctr: '7.4%',
    revenue: 'Affiliate fit: high',
  },
];




const monetizationStreams = [
  { name: 'YouTube Partner Program', fit: 'Always-on baseline', plan: 'Optimize retention, session starts, and advertiser-safe topics before scale.' },
  { name: 'Affiliate offers', fit: 'High-intent tutorials', plan: 'Match products only when they solve the viewer problem introduced in the video.' },
  { name: 'Sponsors', fit: 'Trusted channels', plan: 'Bundle topic clusters, forecast views, and protect viewer satisfaction with short integrations.' },
  { name: 'Digital products', fit: 'Repeat pain points', plan: 'Turn proven frameworks into templates, guides, and mini-courses after demand is validated.' },
];

const analyticsSignals = [
  { metric: 'Average view duration', value: '6:42', target: '7:30', trend: 'Needs stronger mid-video loops' },
  { metric: 'Thumbnail CTR', value: '8.9%', target: '10.5%', trend: 'Test clearer outcome-driven packaging' },
  { metric: 'Subscriber conversion', value: '2.7%', target: '3.4%', trend: 'Move channel promise before final CTA' },
  { metric: 'Blended revenue', value: '$22.10 RPM', target: '$28 RPM', trend: 'Add sponsor segment only after value proof' },
];

const recommendations = analyticsSignals.map((signal) => ({
  title: signal.metric,
  action: signal.trend,
  detail: `${signal.value} current vs ${signal.target} target`,
}));

const defaultStrategies = [
  {
    channel: 'Money Mechanics',
    audience: 'Busy professionals learning practical personal finance',
    thesis: 'Original explainers that make complex money decisions simple and trustworthy.',
    monetization: 'YPP + affiliate tools + sponsor integrations',
  },
  {
    channel: 'Creator Systems Lab',
    audience: 'Solo creators and small teams adopting AI operations',
    thesis: 'Workflow tutorials that convert tactical AI use cases into repeatable systems.',
    monetization: 'Sponsors + templates + paid digital products',
  },
];

const strategyStorageKey = 'viralshorts-ai-hub-strategies';

function loadStrategies() {
  try {
    const savedStrategies = localStorage.getItem(strategyStorageKey);
    return savedStrategies ? JSON.parse(savedStrategies) : defaultStrategies;
  } catch (error) {
    console.warn('Unable to read saved strategies. Falling back to defaults.', error);
    return defaultStrategies;
  }
}

function saveStrategies(strategies) {
  localStorage.setItem(strategyStorageKey, JSON.stringify(strategies));
}

function renderStrategies(strategies) {
  const strategyList = document.querySelector('[data-strategy-list]');

  if (!strategyList) {
    return;
  }

  strategyList.innerHTML = strategies.map((strategy, index) => `
    <article class="strategy-card">
      <button type="button" data-remove-strategy="${index}" aria-label="Remove ${strategy.channel}">×</button>
      <span>${strategy.monetization}</span>
      <h3>${strategy.channel}</h3>
      <p><strong>Audience:</strong> ${strategy.audience}</p>
      <p><strong>Thesis:</strong> ${strategy.thesis}</p>
    </article>
  `).join('');
}

const productionQueue = [
  { step: 'Idea validation', owner: 'Strategy AI', status: 'Search demand + advertiser intent verified' },
  { step: 'Originality review', owner: 'Human editor', status: 'Sources, expert angle, and reused-content risks checked' },
  { step: 'Packaging lab', owner: 'Growth AI', status: '3 thumbnails and 5 titles ready for CTR test' },
  { step: 'Revenue plan', owner: 'Operator', status: 'YPP, affiliate, sponsor, and product CTA mapped' },
];

const operatingSystem = [
  {
    title: 'Portfolio strategy',
    copy: 'Manage dozens of channels with separate niches, audience promises, revenue models, and publishing cadences.',
  },
  {
    title: 'Profit analytics',
    copy: 'Connect retention, CTR, subscribers, RPM, affiliate revenue, sponsors, and product sales to every content bet.',
  },
  {
    title: 'Quality governance',
    copy: 'Require originality, human review, source notes, and YouTube/API compliance before automation can publish.',
  },
];

const channelMarkup = channels.map((channel) => `
  <div class="channel" style="--accent:${channel.accent}">
    <span class="channel-icon">${channel.icon}</span>
    <span>${channel.name}</span>
    <b>${channel.status}</b>
  </div>
`).join('');

const workflowMarkup = workflow.map((step) => `
  <article class="workflow-card">
    <span class="card-icon">${step.icon}</span>
    <h3>${step.title}</h3>
    <p>${step.copy}</p>
  </article>
`).join('');

const metricsMarkup = metrics.map((metric) => `
  <div>
    <strong>${metric.value}</strong>
    <span>${metric.label}</span>
  </div>
`).join('');

const pillarMarkup = businessPillars.map((pillar) => `<li>✓ ${pillar}</li>`).join('');




const monetizationMarkup = monetizationStreams.map((stream) => `
  <article class="monetization-card">
    <span>${stream.fit}</span>
    <h3>${stream.name}</h3>
    <p>${stream.plan}</p>
  </article>
`).join('');

const analyticsMarkup = analyticsSignals.map((signal) => `
  <article class="analytics-card">
    <span>${signal.metric}</span>
    <strong>${signal.value}</strong>
    <p>Target: ${signal.target}</p>
  </article>
`).join('');

const recommendationMarkup = recommendations.map((recommendation) => `
  <li>
    <strong>${recommendation.title}</strong>
    <span>${recommendation.detail}</span>
    <p>${recommendation.action}</p>
  </li>
`).join('');

const portfolioMarkup = channelPortfolio.map((channel) => `
  <article class="portfolio-card">
    <div>
      <span>${channel.stage}</span>
      <h3>${channel.name}</h3>
      <p>${channel.niche}</p>
    </div>
    <dl>
      <div><dt>Watch time</dt><dd>${channel.watchTime}</dd></div>
      <div><dt>CTR</dt><dd>${channel.ctr}</dd></div>
      <div><dt>Revenue</dt><dd>${channel.revenue}</dd></div>
    </dl>
  </article>
`).join('');

const queueMarkup = productionQueue.map((item) => `
  <li>
    <strong>${item.step}</strong>
    <span>${item.owner}</span>
    <p>${item.status}</p>
  </li>
`).join('');

const operatingMarkup = operatingSystem.map((item) => `
  <article class="operating-card">
    <h3>${item.title}</h3>
    <p>${item.copy}</p>
  </article>
`).join('');

document.querySelector('#root').innerHTML = `
  <main>
    <nav class="nav" aria-label="Primary navigation">
      <a class="brand" href="#top" aria-label="ViralShorts AI home">
        <span class="brand-mark">🎬</span>
        ViralShorts AI
      </a>
      <div class="nav-links">
        <a href="#workflow">Workflow</a>
        <a href="#studio">Studio</a>
        <a href="#operating-system">Scale</a>
        <a href="#hub">Hub</a>
        <a href="#strategy-workspace">Strategy</a>
        <a href="#analytics">Analytics</a>
        <a href="#monetization">Monetization</a>
        <a href="#pricing">Pricing</a>
      </div>
      <a class="nav-cta" href="#studio">Launch studio</a>
    </nav>

    <section class="hero" id="top">
      <div class="hero-copy">
        <div class="eyebrow">✨ AI media business operating system</div>
        <h1>Build a profitable AI media business around original YouTube content.</h1>
        <p>
          ViralShorts AI helps operators grow sustainable audiences, increase watch time and CTR, expand subscriber revenue, and manage monetization across YouTube channels, affiliates, sponsors, and digital products.
        </p>
        <div class="hero-actions">
          <a class="primary-button" href="#studio">🚀 Build the portfolio</a>
          <a class="secondary-button" href="#workflow">▶ See the operating system</a>
        </div>
        <div class="metrics" aria-label="Business growth highlights">${metricsMarkup}</div>
        <ul class="pillar-list" aria-label="Quality and compliance pillars">${pillarMarkup}</ul>
      </div>

      <section class="studio-card" id="studio" aria-label="AI video studio preview">
        <div class="card-header">
          <span>🎞️ Creator Command Center</span>
          <span class="live-pill">Live brief</span>
        </div>
        <div class="prompt-box">
          <label for="creative-brief">Creative brief</label>
          <textarea id="creative-brief">Create a 9-minute original explainer for a finance channel. Optimize for retention, subscriber intent, YPP compliance, and affiliate fit.</textarea>
        </div>
        <div class="timeline">
          <div class="clip clip-one">Opening loop + viewer promise</div>
          <div class="clip clip-two">Original script + sources</div>
          <div class="clip clip-three">Monetization + compliance review</div>
        </div>
        <div class="channel-list">${channelMarkup}</div>
      </section>
    </section>

    <section class="workflow" id="workflow">
      <div class="section-heading">
        <span>▣ Revenue-first content system</span>
        <h2>From channel thesis to compounding media asset.</h2>
      </div>
      <div class="workflow-grid">${workflowMarkup}</div>
    </section>

    <section class="operating-system" id="operating-system">
      <div class="section-heading">
        <span>◎ Scale beyond one channel</span>
        <h2>Coordinate strategy, production, analytics, and monetization across a full media portfolio.</h2>
      </div>
      <div class="operating-grid">${operatingMarkup}</div>
    </section>


    <section class="hub" id="hub">
      <div class="section-heading">
        <span>◈ Operator dashboard milestone</span>
        <h2>Track every channel like a media asset, not a content slot.</h2>
      </div>
      <div class="hub-layout">
        <div class="portfolio-grid">${portfolioMarkup}</div>
        <aside class="queue-panel" aria-label="Production quality gates">
          <h3>Next production queue</h3>
          <ol>${queueMarkup}</ol>
        </aside>
      </div>
    </section>


    <section class="strategy-workspace" id="strategy-workspace">
      <div class="section-heading">
        <span>◇ Persistent strategy workspace</span>
        <h2>Save channel theses before production begins.</h2>
      </div>
      <div class="strategy-layout">
        <form class="strategy-form" data-strategy-form>
          <label>
            Channel name
            <input name="channel" required placeholder="Example: AI Founder Brief" />
          </label>
          <label>
            Audience
            <input name="audience" required placeholder="Who this channel serves" />
          </label>
          <label>
            Channel thesis
            <textarea name="thesis" required placeholder="Original promise, format, and audience outcome"></textarea>
          </label>
          <label>
            Monetization plan
            <input name="monetization" required placeholder="YPP + affiliates + sponsors + product" />
          </label>
          <button class="primary-button" type="submit">💾 Save strategy</button>
        </form>
        <div class="strategy-list" data-strategy-list aria-live="polite"></div>
      </div>
    </section>


    <section class="analytics" id="analytics">
      <div class="section-heading">
        <span>◆ Analytics recommendation engine</span>
        <h2>Convert performance signals into the next highest-profit creative decision.</h2>
      </div>
      <div class="analytics-layout">
        <div class="analytics-grid">${analyticsMarkup}</div>
        <aside class="recommendation-panel">
          <h3>Recommended next moves</h3>
          <ol>${recommendationMarkup}</ol>
        </aside>
      </div>
    </section>


    <section class="monetization" id="monetization">
      <div class="section-heading">
        <span>⬡ Monetization planning</span>
        <h2>Design revenue streams around audience trust and content-market fit.</h2>
      </div>
      <div class="monetization-grid">${monetizationMarkup}</div>
    </section>

    <section class="pricing" id="pricing">
      <div>
        <span class="eyebrow">🔥 Built for momentum</span>
        <h2>Turn audience trust into durable revenue streams.</h2>
        <p>
          Prioritize high-quality, original content over publishing volume while using analytics to improve watch time, CTR, subscriber growth, YouTube Partner Program earnings, affiliate campaigns, sponsorship packages, and digital product funnels.
        </p>
      </div>
      <div class="pricing-card">
        <span class="card-icon">📊</span>
        <h3>Growth Studio</h3>
        <p>Channel strategy boards, analytics-driven experimentation, quality gates, monetization planning, and scalable production workflows.</p>
        <ul>
          <li>✅ Originality and viewer-satisfaction reviews</li>
          <li>✅ YouTube/API policy-aware automation</li>
          <li>✅ Revenue attribution by channel and asset</li>
        </ul>
        <a class="primary-button full" href="mailto:hello@viralshorts.ai">☁️ Join waitlist</a>
      </div>
    </section>
  </main>
`;


const strategies = loadStrategies();
renderStrategies(strategies);

const strategyForm = document.querySelector('[data-strategy-form]');
const strategyList = document.querySelector('[data-strategy-list]');

strategyForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(strategyForm);
  const strategy = {
    channel: String(formData.get('channel')).trim(),
    audience: String(formData.get('audience')).trim(),
    thesis: String(formData.get('thesis')).trim(),
    monetization: String(formData.get('monetization')).trim(),
  };

  if (!strategy.channel || !strategy.audience || !strategy.thesis || !strategy.monetization) {
    return;
  }

  strategies.unshift(strategy);
  saveStrategies(strategies);
  renderStrategies(strategies);
  strategyForm.reset();
});

strategyList?.addEventListener('click', (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement) || !target.dataset.removeStrategy) {
    return;
  }

  strategies.splice(Number(target.dataset.removeStrategy), 1);
  saveStrategies(strategies);
  renderStrategies(strategies);
});

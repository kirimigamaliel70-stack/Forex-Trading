# Gama Forex Traders

A static landing page and trading site prototype for **Gama Forex Traders**, inspired by modern forex trading platforms.

## Included pages
- `index.html` — responsive homepage with hero section, market cards, platform features, order entry demo, and account modal.
- `styles.css` — dark trading-style UI with gradient surfaces and modern layout.
- `script.js` — interactive modal dialogs, responsive mobile menu, and lightweight form handling.
- `.github/workflows/pages.yml` — GitHub Actions workflow to deploy the site to GitHub Pages.
- `robots.txt` — search engine indexing settings.
- `sitemap.xml` — sitemap for public discovery.

## index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Gama Forex Traders - Trade Forex, Synthetic Indices and Digital Options with a modern trading experience." />
  <title>Gama Forex Traders</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="page-shell">
    <header class="site-header">
      <div class="brand">
        <span class="brand-mark">G</span>
        <div>
          <p class="brand-name">Gama Forex Traders</p>
          <p class="brand-tag">Trade smarter in Forex and digital markets</p>
        </div>
      </div>
      <nav class="main-nav" aria-label="Primary navigation">
        <a href="#markets">Markets</a>
        <a href="#platforms">Platforms</a>
        <a href="#features">Features</a>
        <a href="#learn">Learn</a>
      </nav>
      <div class="header-actions">
        <button class="btn btn-secondary" id="open-login">Login</button>
        <button class="btn btn-primary" id="open-signup">Sign up</button>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>

    <main>
      <section class="hero-section">
        <div class="hero-copy">
          <p class="eyebrow">Global Forex & CFD trading</p>
          <h1>Trade Forex, indices and digital instruments on a next-gen platform.</h1>
          <p class="hero-text">Explore advanced charts, fast execution, seamless account management and one-click access to hundreds of markets.</p>
          <div class="hero-cta">
            <button class="btn btn-primary" id="heroSignup">Open account</button>
            <a href="#features" class="outline-link">View features</a>
          </div>
          <div class="hero-stats">
            <div>
              <strong>100+</strong>
              <span>Markets</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>
            <div>
              <strong>30+</strong>
              <span>Trading assets</span>
            </div>
          </div>
        </div>
        <div class="hero-preview">
          <div class="trade-card">
            <div class="trade-card-header">
              <div>
                <p>Forex</p>
                <span>EUR/USD</span>
              </div>
              <span class="price-change positive">+0.23%</span>
            </div>
            <div class="chart-placeholder">
              <div class="sparkline"></div>
            </div>
            <div class="trade-card-footer">
              <div>
                <span>Buy</span>
                <strong>1.2345</strong>
              </div>
              <div>
                <span>Sell</span>
                <strong>1.2342</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-alt" id="platforms">
        <div class="section-header">
          <p class="eyebrow">Trading platforms</p>
          <h2>One platform for every trader.</h2>
          <p>Trade using an intuitive web terminal, mobile app or desktop terminal with advanced charting and fast order execution.</p>
        </div>
        <div class="cards-grid">
          <article class="feature-card">
            <h3>Web Terminal</h3>
            <p>Access charting, live pricing and order entry instantly in your browser.</p>
          </article>
          <article class="feature-card">
            <h3>Mobile App</h3>
            <p>Trade on the go with real-time alerts, market news and account control.</p>
          </article>
          <article class="feature-card">
            <h3>Desktop App</h3>
            <p>Dedicated professional workspace with multi-chart layouts and fast execution.</p>
          </article>
        </div>
      </section>

      <section class="section" id="markets">
        <div class="section-header">
          <p class="eyebrow">Markets</p>
          <h2>Trade the markets you know.</h2>
          <p>From forex majors to synthetic indices, Gama Forex Traders supports all the essential instruments for global traders.</p>
        </div>
        <div class="market-grid">
          <div class="market-card">
            <h4>Forex Pairs</h4>
            <p>EUR/USD, GBP/USD, USD/JPY and more with tight spreads.</p>
          </div>
          <div class="market-card">
            <h4>Commodities</h4>
            <p>Gold, Silver, Oil and other high-volume commodities.</p>
          </div>
          <div class="market-card">
            <h4>Indices</h4>
            <p>Global stock indices with reliable charting and execution.</p>
          </div>
          <div class="market-card">
            <h4>Digital Options</h4>
            <p>Predict market direction with fixed-risk digital options.</p>
          </div>
        </div>
      </section>

      <section class="section section-dashboard" id="features">
        <div class="section-header">
          <p class="eyebrow">Platform features</p>
          <h2>All the tools you need to trade confidently.</h2>
        </div>
        <div class="dashboard-grid">
          <div class="dashboard-panel">
            <div class="panel-heading">
              <h3>Live trading dashboard</h3>
              <span>Real-time prices</span>
            </div>
            <div class="trade-table">
              <div class="trade-row header">
                <span>Asset</span>
                <span>Bid</span>
                <span>Ask</span>
                <span>Change</span>
              </div>
              <div class="trade-row">
                <span>EUR/USD</span>
                <span>1.2342</span>
                <span>1.2345</span>
                <span class="positive">+0.12%</span>
              </div>
              <div class="trade-row">
                <span>GBP/USD</span>
                <span>1.4198</span>
                <span>1.4203</span>
                <span class="negative">-0.04%</span>
              </div>
              <div class="trade-row">
                <span>USD/JPY</span>
                <span>151.02</span>
                <span>151.06</span>
                <span class="positive">+0.09%</span>
              </div>
            </div>
          </div>
          <div class="dashboard-panel order-panel">
            <div class="panel-heading">
              <h3>Order entry</h3>
              <span>Quick trade execution</span>
            </div>
            <div class="order-controls">
              <label>Instrument</label>
              <select>
                <option>EUR/USD</option>
                <option>GBP/USD</option>
                <option>Gold/USD</option>
                <option>NAS100</option>
              </select>
              <label>Trade size</label>
              <input type="text" value="1.0" />
              <div class="order-buttons">
                <button class="btn btn-secondary">Sell</button>
                <button class="btn btn-primary">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-alt" id="learn">
        <div class="section-header">
          <p class="eyebrow">Why trade with us</p>
          <h2>Designed for modern forex traders.</h2>
        </div>
        <div class="benefits-grid">
          <article class="benefit-card">
            <h3>Instant execution</h3>
            <p>Place trades quickly with minimal slippage and desktop-grade performance.</p>
          </article>
          <article class="benefit-card">
            <h3>24/7 support</h3>
            <p>Get support whenever you need it via live chat, email or phone.</p>
          </article>
          <article class="benefit-card">
            <h3>Secure accounts</h3>
            <p>Industry-standard encryption and secure fund management for traders worldwide.</p>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <p class="brand-name">Gama Forex Traders</p>
        <p>Trade Forex, CFDs, and digital instruments with confidence.</p>
      </div>
      <div class="footer-links">
        <a href="#markets">Markets</a>
        <a href="#platforms">Platforms</a>
        <a href="#features">Features</a>
      </div>
    </footer>
  </div>

  <div class="modal-backdrop hidden" id="modalBackdrop"></div>
  <section class="modal hidden" id="authModal" aria-hidden="true">
    <div class="modal-content">
      <button class="modal-close" id="closeModal" aria-label="Close dialog">×</button>
      <div class="modal-body">
        <h2>Start trading with Gama Forex Traders</h2>
        <p>Fast registration, secure accounts, and immediate access to markets.</p>
        <form class="auth-form">
          <label>Email address</label>
          <input type="email" placeholder="name@example.com" required />
          <label>Password</label>
          <input type="password" placeholder="Create a password" required />
          <button class="btn btn-primary">Create account</button>
          <p class="modal-note">By signing up, you agree to our terms and conditions.</p>
        </form>
      </div>
    </div>
  </section>

  <script src="script.js"></script>
</body>
</html>
```

## styles.css
```css
:root {
  color-scheme: dark;
  --bg: #020617;
  --surface: rgba(12, 20, 45, 0.96);
  --surface-strong: #0f1734;
  --text: #eef4ff;
  --muted: #9fb4d0;
  --accent: #3c91ff;
  --accent-dark: #1f5edd;
  --success: #44d17a;
  --danger: #ff637d;
  --border: rgba(255, 255, 255, 0.08);
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: radial-gradient(circle at top, rgba(60, 145, 255, 0.14), transparent 28%),
    linear-gradient(180deg, #020617 0%, #080c1f 100%);
  color: var(--text);
}

button,
input,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

.page-shell {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px 40px;
}

.site-header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 18px;
  padding: 28px 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand-mark {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent), #6e9bff);
  color: #fff;
  font-weight: 800;
  font-size: 1.2rem;
}

.brand-name {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
}

.brand-tag {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 0.95rem;
}

.main-nav {
  display: flex;
  gap: 20px;
  align-items: center;
}

.main-nav a {
  color: var(--muted);
  transition: color 0.2s ease;
}

.main-nav a:hover {
  color: var(--text);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-toggle {
  display: none;
  border: 1px solid var(--border);
  background: transparent;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 999px;
  background: var(--text);
  margin: 4px 0;
}

.btn {
  border: none;
  cursor: pointer;
  border-radius: 12px;
  padding: 14px 22px;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--accent);
  color: #fff;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.07);
  color: var(--text);
}

.outline-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  padding: 14px 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  transition: background-color 0.2s ease;
}

.outline-link:hover {
  background: rgba(255, 255, 255, 0.04);
}

.hero-section {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 36px;
  padding: 40px 0 52px;
}

.hero-copy {
  max-width: 620px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent);
  font-size: 0.82rem;
  margin-bottom: 16px;
}

.hero-section h1 {
  margin: 0;
  font-size: clamp(3rem, 4vw, 4.4rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
}

.hero-text {
  margin: 24px 0 0;
  max-width: 540px;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.8;
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 36px 0;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 18px;
}

.hero-stats div {
  padding: 18px 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
}

.hero-stats strong {
  display: block;
  font-size: 1.4rem;
  margin-bottom: 6px;
}

.hero-preview {
  display: grid;
  align-items: center;
  justify-items: center;
}

.trade-card {
  width: min(100%, 420px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 26px;
  box-shadow: var(--shadow);
}

.trade-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;
}

.trade-card-header p {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
}

.trade-card-header span {
  display: block;
  font-size: 0.92rem;
}

.price-change {
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 999px;
}

.price-change.positive {
  color: var(--success);
  background: rgba(68, 209, 122, 0.15);
}

.price-change.negative {
  color: var(--danger);
  background: rgba(255, 99, 125, 0.16);
}

.chart-placeholder {
  min-height: 220px;
  border-radius: 24px;
  background: radial-gradient(circle at top, rgba(60, 145, 255, 0.22), transparent 36%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02));
  display: grid;
  place-items: center;
  margin-bottom: 24px;
}

.sparkline {
  width: 100%;
  height: 100%;
  mask-image: linear-gradient(to right, transparent 0%, white 12%, white 88%, transparent 100%);
  background: linear-gradient(180deg, transparent 0%, #4ea1ff 28%, #81c6ff 56%, transparent 100%);
  clip-path: polygon(0 60%, 6% 60%, 12% 52%, 18% 58%, 24% 46%, 30% 52%, 36% 42%, 42% 36%, 48% 44%, 54% 26%, 60% 34%, 66% 22%, 72% 30%, 78% 18%, 84% 26%, 90% 14%, 96% 20%, 100% 18%, 100% 100%, 0% 100%);
}

.trade-card-footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.trade-card-footer div {
  padding: 18px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
}

.trade-card-footer span {
  display: block;
  color: var(--muted);
  margin-bottom: 8px;
}

.trade-card-footer strong {
  font-size: 1.35rem;
}

.section {
  padding: 60px 0;
}

.section-alt {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 36px;
  padding: 64px 24px;
}

.section-header {
  max-width: 760px;
  margin-bottom: 40px;
}

.section-header h2 {
  margin: 0.5rem 0 12px;
  font-size: clamp(2.1rem, 2.6vw, 3rem);
}

.section-header p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.cards-grid,
.market-grid,
.benefits-grid {
  display: grid;
  gap: 24px;
}

.cards-grid {
  grid-template-columns: repeat(3, minmax(220px, 1fr));
}

.feature-card,
.market-card,
.benefit-card {
  border-radius: 28px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.feature-card h3,
.market-card h4,
.benefit-card h3 {
  margin-top: 0;
}

.market-grid {
  grid-template-columns: repeat(4, minmax(180px, 1fr));
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
}

.dashboard-panel {
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 28px;
}

.panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.panel-heading h3 {
  margin: 0;
}

.panel-heading span {
  color: var(--muted);
  font-size: 0.95rem;
}

.trade-table {
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  overflow: hidden;
}

.trade-row {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1fr;
  gap: 16px;
  align-items: center;
  padding: 18px 22px;
}

.trade-row.header {
  background: rgba(255, 255, 255, 0.06);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-size: 0.85rem;
}

.trade-row:not(.header) {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.order-panel .order-controls {
  display: grid;
  gap: 18px;
}

.order-controls label {
  color: var(--muted);
  font-size: 0.95rem;
}

.order-controls input,
.order-controls select {
  width: 100%;
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}

.order-controls select {
  appearance: none;
}

.order-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.benefits-grid {
  grid-template-columns: repeat(3, minmax(220px, 1fr));
}

.site-footer {
  display: flex;
  justify-content: space-between;
  gap: 28px;
  padding: 40px 0 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-links {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.footer-links a {
  color: var(--muted);
}

.modal-backdrop,
.modal {
  position: fixed;
  inset: 0;
  z-index: 100;
}

.modal-backdrop {
  background: rgba(0, 0, 0, 0.58);
}

.modal {
  display: grid;
  place-items: center;
  padding: 24px;
}

.modal-content {
  width: min(520px, 100%);
  border-radius: 32px;
  background: rgba(6, 14, 44, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow);
}

.modal-body {
  padding: 32px;
}

.modal-close {
  position: absolute;
  right: 28px;
  top: 24px;
  width: 42px;
  height: 42px;
  border: none;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 50%;
  color: var(--text);
  cursor: pointer;
}

.modal-body h2 {
  margin-top: 0;
}

.auth-form {
  display: grid;
  gap: 18px;
  margin-top: 22px;
}

.auth-form input {
  width: 100%;
  border-radius: 16px;
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}

.modal-note {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.hidden {
  display: none !important;
}

@media (max-width: 1080px) {
  .hero-section,
  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .cards-grid,
  .market-grid,
  .benefits-grid {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }
}

@media (max-width: 760px) {
  .site-header {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }

  .nav-toggle {
    display: inline-flex;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .cards-grid,
  .market-grid,
  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .site-footer {
    flex-direction: column;
  }
}
```

## script.js
```js
const modal = document.getElementById('authModal');
const backdrop = document.getElementById('modalBackdrop');
const openButtons = [
  document.getElementById('open-login'),
  document.getElementById('open-signup'),
  document.getElementById('heroSignup'),
];
const closeButton = document.getElementById('closeModal');
const navToggle = document.getElementById('navToggle');
const mainNav = document.querySelector('.main-nav');

const openModal = () => {
  modal.classList.remove('hidden');
  backdrop.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
};

const closeModal = () => {
  modal.classList.add('hidden');
  backdrop.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
};

openButtons.forEach((button) => {
  if (button) {
    button.addEventListener('click', openModal);
  }
});

closeButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('is-open');
  if (mainNav.classList.contains('is-open')) {
    mainNav.style.display = 'flex';
  } else {
    mainNav.style.display = '';
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    mainNav.style.display = '';
    mainNav.classList.remove('is-open');
  }
});

const form = document.querySelector('.auth-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    closeModal();
    alert('Thanks! Your account setup flow starts here.');
  });
}
```

## .github/workflows/pages.yml
```yaml
name: Deploy Gama Forex Traders

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v4

      - name: Upload static site artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: .

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v1
```

## robots.txt
```txt
User-agent: *
Allow: /
Sitemap: https://kirimigamaliel70-stack.github.io/Forex-Trading/sitemap.xml
Host: kirimigamaliel70-stack.github.io
```

## sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kirimigamaliel70-stack.github.io/Forex-Trading/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## Deployment
1. Push the repository to GitHub.
2. GitHub Actions will build and publish the site automatically from the `main` branch.
3. When the workflow completes, the public site is available at:
   `https://kirimigamaliel70-stack.github.io/Forex-Trading/`

## Notes
This project is a static frontend prototype and does not include live trading backend connectivity.


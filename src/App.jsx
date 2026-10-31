
const products = [
  {
    name: "Kite",
    description: "A platform to buy and sell stocks and keep track of the markets.",
    link: "https://kite.zerodha.com/"
  },
  {
    name: "Console",
    description: "Track your investments, portfolio and trading activity.",
    link: "https://console.zerodha.com/"
  },
  {
    name: "Coin",
    description: "Invest in direct mutual funds through an online platform.",
    link: "https://coin.zerodha.com/"
  },
  {
    name: "Varsity",
    description: "Learn about the stock market through free educational resources.",
    link: "https://zerodha.com/varsity/"
  },
  {
    name: "Kite Connect",
    description: "APIs for developers who want to build trading applications.",
    link: "https://kite.trade/"
  },
  {
    name: "TradingQ&A",
    description: "A community to discuss trading and investment-related questions.",
    link: "https://tradingqna.com/"
  }
];

const features = [
  {
    title: "Customer-first approach",
    description: "A simple experience with useful tools for investors."
  },
  {
    title: "No unnecessary distractions",
    description: "Straightforward platforms that let users focus on investing."
  },
  {
    title: "A complete ecosystem",
    description: "Different platforms for trading, investing and learning."
  },
  {
    title: "Better financial decisions",
    description: "Tools that help users understand their activity and manage risk."
  }
];

const statistics = [
  {
    number: "1.8+ crore",
    label: "Customers"
  },
  {
    number: "₹9+ lakh crore",
    label: "Customer investments"
  },
  {
    number: "15%",
    label: "Daily retail exchange volumes"
  }
];

const prices = [
  {
    amount: "₹0",
    label: "Account opening"
  },
  {
    amount: "₹0",
    label: "Equity delivery"
  },
  {
    amount: "₹20",
    label: "Intraday and F&O per executed order"
  }
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha logo"
            className="logo"
          />
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#pricing">Pricing</a>
          <a href="#education">Education</a>
          <a href="https://support.zerodha.com/">Support</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <img
        src="https://zerodha.com/static/images/landing.png"
        alt="Zerodha investment platform"
        className="hero-image"
      />

      <h1>Invest in everything</h1>

      <p>
        Online platform to invest in stocks, IPOs, derivatives,
        mutual funds, ETFs, bonds and more.
      </p>

      <a
        href="https://zerodha.com/open-account"
        className="main-button"
      >
        Sign up for free
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="about-image">
        <img
          src="https://zerodha.com/static/images/ecosystem.png"
          alt="Zerodha ecosystem"
        />

        <div className="image-links">
          <a href="https://zerodha.com/products">
            Explore products
          </a>
          <a href="https://kite-demo.zerodha.com/">
            Try Kite demo
          </a>
        </div>
      </div>

      <div className="about-content">
        <h2>Trust with confidence</h2>

        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Statistics() {
  return (
    <section className="statistics section">
      <div className="section-heading">
        <h2>Our numbers</h2>
        <p>A quick look at Zerodha's reach in the market.</p>
      </div>

      <div className="stats-grid">
        {statistics.map((item, index) => (
          <div className="stat-item" key={index}>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="products section" id="products">
      <div className="section-heading">
        <h2>The Zerodha universe</h2>
        <p>
          Different platforms to help you invest, trade
          and learn about the financial markets.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <a
            href={product.link}
            className="product-card"
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>Explore more →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="pricing-text">
        <h2>Unbeatable pricing</h2>
        <p>
          Simple pricing with no hidden brokerage charges.
          Equity delivery has zero brokerage.
        </p>
        <a href="https://zerodha.com/charges">
          View all charges →
        </a>
      </div>

      <div className="price-grid">
        {prices.map((price, index) => (
          <div className="price-item" key={index}>
            <h3>{price.amount}</h3>
            <p>{price.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="education section" id="education">
      <div className="education-image">
        <img
          src="https://zerodha.com/static/images/varsity.png"
          alt="Market education"
        />
      </div>

      <div className="education-content">
        <h2>Free and open market education</h2>

        <p>
          Learning about the market is an important part of
          investing. Explore free resources and understand
          the basics at your own pace.
        </p>

        <div className="education-links">
          <a href="https://zerodha.com/varsity/">
            <strong>Varsity</strong>
            <span>
              Learn about stocks, trading and investments.
            </span>
          </a>

          <a href="https://tradingqna.com/">
            <strong>TradingQ&A</strong>
            <span>
              Discuss questions with the investing community.
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Signup() {
  return (
    <section className="signup">
      <h2>Open an account today</h2>
      <p>
        Start exploring the financial markets with simple
        and easy-to-use platforms.
      </p>

      <a
        href="https://zerodha.com/open-account"
        className="main-button"
      >
        Sign up for free
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha logo"
            className="footer-logo"
          />

          <p>
            Making investing simple and accessible through
            online financial platforms.
          </p>
        </div>

        <div className="footer-column">
          <h3>Account</h3>
          <a href="https://zerodha.com/open-account">
            Open an account
          </a>
          <a href="https://zerodha.com/charges">Charges</a>
          <a href="https://zerodha.com/products">Products</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <a href="https://zerodha.com/about/">About</a>
          <a href="https://zerodha.com/careers/">Careers</a>
          <a href="https://zerodha.com/contact/">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <a href="https://support.zerodha.com/">
            Support portal
          </a>
          <a href="https://tradingqna.com/">
            TradingQ&A
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          This is an independent student project created for
          educational purposes. It is not affiliated with
          Zerodha Broking Limited.
        </p>

        <p>© 2026 Student Zerodha Clone Project</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Statistics />
      <Products />
      <Pricing />
      <Education />
      <Signup />
      <Footer />
    </>
  );
}

export default App;

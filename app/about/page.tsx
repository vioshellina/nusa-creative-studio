
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Think Creatively",
    description:
      "We explore different perspectives and turn fresh ideas into thoughtful solutions.",
    keyword: "IMAGINE",
    symbol: "✳",
  },
  {
    number: "02",
    title: "Work Together",
    description:
      "We believe the best results happen when people share ideas and build something together.",
    keyword: "COLLABORATE",
    symbol: "↗",
  },
  {
    number: "03",
    title: "Make It Matter",
    description:
      "We focus on creating work that solves real problems and delivers meaningful value.",
    keyword: "MAKE IMPACT",
    symbol: "✳",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="inner-hero">
        <div className="container inner-hero-content">
          <div className="inner-hero-meta">
            <p className="eyebrow">GET TO KNOW US</p>
            <span>ABOUT NUSA / 001</span>
          </div>

          <h1>
            Small team.
            <br />
            <span>Big ideas.</span>
          </h1>

          <div className="inner-hero-bottom">
            <p className="inner-hero-description">
              We are Nusa Creative Studio, an independent creative agency
              bringing strategy, design, and technology together to help
              businesses grow.
            </p>

            <div className="about-hero-mark" aria-hidden="true">
              <span>N</span>
              <span>®</span>
            </div>
          </div>

          <div className="inner-hero-footer">
            <span>INDEPENDENT BY NATURE</span>
            <span>CREATIVE BY DESIGN ↓</span>
          </div>
        </div>
      </section>

      <section className="section about-story-section">
        <div className="container about-story">
          <div className="story-heading">
            <p className="eyebrow">OUR STORY / 002</p>
            <h2 className="section-title">
              Creativity with
              <br />
              a <span>purpose.</span>
            </h2>

            <div className="story-mini-label">
              <span className="story-dot" />
              ESTABLISHED IN 2024
            </div>
          </div>

          <div className="story-content">
            <p className="story-lead">
              Good creative work should do more than look good. It should
              mean something.
            </p>

            <p>
              Nusa Creative Studio was founded in 2024 with a simple
              belief: good creative work should communicate clearly, solve
              problems, and create positive experiences.
            </p>

            <p>
              Based in Jakarta, Indonesia, we bring together different
              creative perspectives to help businesses build their
              identities and strengthen their digital presence.
            </p>

            <p>
              From the first idea to the final result, we work closely
              with our clients to make every project purposeful,
              practical, and memorable.
            </p>

            <Link href="/services" className="text-link story-link">
              WHAT WE CAN DO FOR YOU <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="about-highlight">
        <div className="container highlight-content">
          <div className="highlight-topline">
            <p className="eyebrow">OUR MISSION / 003</p>
            <span>THE WHY BEHIND THE WORK</span>
          </div>

          <h2>
            To make the digital world more
            <span> thoughtful, useful, and human.</span>
          </h2>

          <div className="highlight-bottom">
            <p>
              We combine creativity and technology to create experiences
              that connect businesses with people.
            </p>

            <span className="highlight-symbol" aria-hidden="true">
              ✳
            </span>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="values-heading">
            <div>
              <p className="eyebrow">WHAT GUIDES US / 004</p>
              <h2 className="section-title">
                The values behind
                <br />
                our <span>work.</span>
              </h2>
            </div>

            <p className="values-intro">
              The principles that shape how we think, work, and create
              with the people we partner with.
            </p>
          </div>

          <div className="grid values-grid">
            {values.map((value) => (
              <div className="card value-card" key={value.number}>
                <div className="value-card-top">
                  <span className="value-number">{value.number}</span>
                  <span className="value-symbol" aria-hidden="true">
                    {value.symbol}
                  </span>
                </div>

                <span className="value-keyword">{value.keyword}</span>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

                <div className="value-card-bottom">
                  <span>NUSA PRINCIPLE</span>
                  <span>{value.number} / 03</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <p className="eyebrow">LET'S CREATE TOGETHER / 005</p>

          <h2>
            Every great idea
            <br />
            starts <span>somewhere.</span>
          </h2>

          <div className="about-cta-bottom">
            <p>
              We would love to learn about your business, your goals,
              and the ideas you want to bring to life.
            </p>

            <Link href="/services" className="btn cta-button">
              Explore Our Services <span>↗</span>
            </Link>
          </div>

          <span className="about-cta-watermark" aria-hidden="true">
            ABOUT US
          </span>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div>
            <Link href="/" className="logo">
              NUSA<span>.</span>
            </Link>
            <p>Independent ideas. Meaningful impact.</p>
          </div>

          <div className="footer-location">
            <span>FIND US</span>
            <p>Jakarta, Indonesia</p>
          </div>

          <div className="footer-navigation">
            <span>EXPLORE</span>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/team">Our Team</Link>
          </div>

          <Link href="/" className="back-to-top">
            BACK TO HOME ↑
          </Link>
        </div>

        <div className="footer-bottom">
          <p>© 2026 NUSA CREATIVE STUDIO</p>
          <p>INDEPENDENT BY NATURE. CREATIVE BY DESIGN.</p>
        </div>
      </footer>
    </main>
  );
}

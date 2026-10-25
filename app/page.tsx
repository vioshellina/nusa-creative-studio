
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "✳",
    title: "Brand Identity",
    description:
      "We build memorable brands through thoughtful visual identities, clear messaging, and consistent design.",
    slug: "brand-identity",
    tag: "MAKE YOUR MARK",
  },
  {
    number: "02",
    icon: "⌘",
    title: "Web Development",
    description:
      "We create modern, responsive websites that combine beautiful design with meaningful functionality.",
    slug: "web-development",
    tag: "BUILT FOR WHAT'S NEXT",
  },
  {
    number: "03",
    icon: "↗",
    title: "Digital Strategy",
    description:
      "We help businesses find the right digital direction and connect with the people who matter.",
    slug: "digital-strategy",
    tag: "THINK BEYOND",
  },
];

const stats = [
  { number: "25+", label: "Projects delivered" },
  { number: "15+", label: "Happy clients" },
  { number: "03", label: "Core disciplines" },
  { number: "100%", label: "Made with purpose" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-topline">
            <p className="eyebrow">INDEPENDENT CREATIVE AGENCY</p>
            <span className="hero-index">JKT / ID — 2026</span>
          </div>

          <h1>
            We turn bold
            <br />
            ideas into
            <br />
            <span>real impact.</span>
          </h1>

          <div className="hero-description-row">
            <p className="hero-description">
              Nusa Creative Studio partners with ambitious businesses to
              build thoughtful brands and digital experiences that move
              people forward.
            </p>

            <div className="hero-side-note">
              <span className="hero-status-dot" />
              STRATEGY. DESIGN. DIGITAL.
            </div>
          </div>

          <div className="hero-actions">
            <Link href="/services" className="btn">
              Explore Our Services <span>↗</span>
            </Link>
            <Link href="/about" className="btn btn-outline">
              Get to Know Us <span>↗</span>
            </Link>
          </div>

          <div className="hero-bottom">
            <span>BASED IN JAKARTA, INDONESIA</span>
            <a href="#services">SCROLL TO EXPLORE ↓</a>
            <span>INDEPENDENT IDEAS. MEANINGFUL IMPACT.</span>
          </div>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <div className="decoration-circle">
            <span>NC</span>
          </div>
          <p>CREATIVITY MEETS PURPOSE.</p>
        </div>

        <div className="hero-side-index" aria-hidden="true">
          N — 001
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-index">
                0{index + 1} / IMPACT
              </span>
              <h2>{stat.number}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO / 001</p>
              <h2 className="section-title">
                Small details.
                <br />
                <span>Big difference.</span>
              </h2>
              <p className="section-intro">
                Three disciplines, one shared goal: making good ideas
                impossible to ignore.
              </p>
            </div>

            <Link href="/services" className="text-link">
              VIEW ALL SERVICES <span>↗</span>
            </Link>
          </div>

          <div className="grid">
            {services.map((service) => (
              <Link
                href={`/services/${service.slug}`}
                className="card service-card"
                key={service.number}
              >
                <div className="service-card-top">
                  <span className="card-icon">{service.icon}</span>
                  <span className="service-number">{service.number}</span>
                </div>

                <span className="service-tag">{service.tag}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="card-link">
                  <span>DISCOVER SERVICE</span>
                  <span className="card-arrow">↗</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="services-bottom-note">
            <span>01 — 03</span>
            <span>GOOD WORK STARTS WITH GOOD QUESTIONS.</span>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container about-preview-grid">
          <div className="about-art">
            <div className="art-grid" aria-hidden="true" />

            <div className="art-shape art-shape-one" />
            <div className="art-shape art-shape-two" />

            <div className="art-stamp">
              <span>IDEAS</span>
              <span>IN</span>
              <span>MOTION<span className="stamp-dot">.</span></span>
            </div>

            <span className="art-caption">
              NUSA CREATIVE STUDIO — EST. 2024
            </span>

            <span className="art-index">FIG. 001</span>
          </div>

          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT US / 002</p>

            <h2 className="section-title">
              Good design is more than how it <span>looks.</span>
            </h2>

            <p className="section-description">
              We believe great creative work starts with understanding
              people. Our team brings strategy, design, and technology
              together to solve real problems and create work that lasts.
            </p>

            <div className="about-principles">
              <div>
                <span>01</span>
                <p>Think with purpose.</p>
              </div>
              <div>
                <span>02</span>
                <p>Design with intention.</p>
              </div>
              <div>
                <span>03</span>
                <p>Build for impact.</p>
              </div>
            </div>

            <Link href="/about" className="btn about-button">
              More About Nusa <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <p className="eyebrow">HAVE A PROJECT IN MIND? / 003</p>

          <h2>
            Got a big idea?
            <br />
            <span>Let's make it happen.</span>
          </h2>

          <div className="cta-bottom">
            <p>
              Have an idea, a challenge, or a big dream? Let's turn it
              into something worth remembering.
            </p>

            <Link href="/about" className="btn cta-button">
              LET'S TALK <span>↗</span>
            </Link>
          </div>

          <span className="cta-watermark" aria-hidden="true">
            NUSA®
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
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/team">Our Team</Link>
          </div>

          <Link href="#top" className="back-to-top">
            BACK TO TOP ↑
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

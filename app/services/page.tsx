
import Link from "next/link";

const services = [
  {
    slug: "brand-identity",
    number: "01",
    icon: "✳",
    title: "Brand Identity",
    category: "BRANDING & DESIGN",
    description:
      "Build a brand that people recognize, remember, and trust.",
    details:
      "We help businesses discover who they are and communicate it through a consistent visual identity, meaningful messaging, and a clear brand personality.",
    features: [
      "Logo and visual identity",
      "Brand colors and typography",
      "Brand guidelines",
      "Marketing materials",
    ],
  },
  {
    slug: "web-development",
    number: "02",
    icon: "⌘",
    title: "Web Development",
    category: "DIGITAL EXPERIENCE",
    description:
      "Create digital experiences that look good and work beautifully.",
    details:
      "We design and develop responsive websites that make it easier for people to understand your business, explore your services, and connect with your brand.",
    features: [
      "Responsive website design",
      "Company profile websites",
      "Interactive user interfaces",
      "Website optimization",
    ],
  },
  {
    slug: "digital-strategy",
    number: "03",
    icon: "↗",
    title: "Digital Strategy",
    category: "STRATEGY & GROWTH",
    description:
      "Turn business goals into a clear and actionable digital direction.",
    details:
      "We help businesses understand their audiences, identify opportunities, and plan digital activities that support their long-term goals.",
    features: [
      "Audience research",
      "Digital planning",
      "Content direction",
      "Performance evaluation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="inner-hero services-page-hero">
        <div className="container inner-hero-content">
          <div className="inner-hero-meta">
            <p className="eyebrow">OUR EXPERTISE</p>
            <span>SERVICES / 001</span>
          </div>

          <h1>
            Ideas into
            <br />
            <span>experiences.</span>
          </h1>

          <div className="inner-hero-bottom">
            <p className="inner-hero-description">
              From building your brand to developing digital experiences,
              we help turn business challenges into creative opportunities.
            </p>

            <div className="services-hero-mark" aria-hidden="true">
              <span>✳</span>
              <span>CREATIVE THINKING, REAL RESULTS.</span>
            </div>
          </div>

          <div className="inner-hero-footer">
            <span>STRATEGY. DESIGN. TECHNOLOGY.</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      </section>

      <section className="section services-overview">
        <div className="container">
          <div className="services-heading">
            <div>
              <p className="eyebrow">WHAT WE OFFER / 002</p>
              <h2 className="section-title">
                Creative services,
                <br />
                built around <span>you.</span>
              </h2>
            </div>

            <p className="services-intro">
              Different challenges need different solutions. Explore how
              we can help your business move forward.
            </p>
          </div>

          <div className="services-list">
            {services.map((service) => (
              <article className="service-row" key={service.slug}>
                <div className="service-row-number">
                  {service.number}
                </div>

                <div className="service-row-main">
                  <div className="service-row-top">
                    <span className="service-row-icon" aria-hidden="true">
                      {service.icon}
                    </span>
                    <p className="eyebrow">{service.category}</p>
                  </div>

                  <h2>{service.title}</h2>

                  <p className="service-row-description">
                    {service.description}
                  </p>

                  <p className="service-row-details">
                    {service.details}
                  </p>

                  <div className="service-features">
                    {service.features.map((feature) => (
                      <span key={feature}>
                        <span aria-hidden="true">↗</span> {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="service-detail-link"
                  aria-label={`Explore ${service.title}`}
                >
                  <span>Explore service</span>
                  <span className="service-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </article>
            ))}
          </div>

          <div className="services-list-footer">
            <span>THREE CORE SERVICES</span>
            <span>ONE CREATIVE PARTNER.</span>
          </div>
        </div>
      </section>

      <section className="services-process">
        <div className="container services-process-content">
          <p className="eyebrow">HOW WE THINK / 003</p>

          <h2>
            Good work starts with
            <span> the right questions.</span>
          </h2>

          <div className="process-bottom">
            <p>
              We take time to understand your goals before shaping a
              solution that makes sense for your business and your audience.
            </p>

            <Link href="/about" className="text-link">
              GET TO KNOW NUSA <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <p className="eyebrow">LET'S WORK TOGETHER / 004</p>

          <h2>
            Your next idea
            <br />
            starts <span>here.</span>
          </h2>

          <div className="services-cta-bottom">
            <p>
              Let's find the right creative solution for your business
              and make something meaningful together.
            </p>

            <Link href="/about" className="btn cta-button">
              Meet Our Studio <span>↗</span>
            </Link>
          </div>

          <span className="services-cta-watermark" aria-hidden="true">
            LET'S BUILD
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
            <Link href="/about">About</Link>
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

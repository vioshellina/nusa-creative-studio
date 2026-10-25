
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
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">OUR EXPERTISE</p>
          <h1>
            Ideas into
            <br />
            <span>experiences.</span>
          </h1>
          <p className="inner-hero-description">
            From building your brand to developing digital experiences,
            we help turn business challenges into creative opportunities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE OFFER</p>
              <h2 className="section-title">
                Creative services, built around you.
              </h2>
            </div>
          </div>

          <div className="services-list">
            {services.map((service) => (
              <article className="service-row" key={service.slug}>
                <div className="service-row-number">
                  {service.number}
                </div>

                <div className="service-row-main">
                  <span className="service-row-icon">
                    {service.icon}
                  </span>
                  <p className="eyebrow">{service.category}</p>
                  <h2>{service.title}</h2>
                  <p className="service-row-description">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="service-detail-link"
                >
                  Explore Service <span>↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
          <h2>
            Your next idea
            <br />
            starts <span>here.</span>
          </h2>
          <p>
            Let&apos;s find the right creative solution for your business
            and make something meaningful together.
          </p>
          <Link href="/about" className="btn cta-button">
            Meet Our Studio ↗
          </Link>
        </div>
      </section>

      <footer className="footer">
        <Link href="/" className="logo">
          NUSA<span>.</span>
        </Link>
        <p>Independent ideas. Meaningful impact.</p>
        <p>© 2026 Nusa Creative Studio</p>
      </footer>
    </main>
  );
}

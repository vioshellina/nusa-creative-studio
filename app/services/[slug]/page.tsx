
import Link from "next/link";
import { notFound } from "next/navigation";

const services = [
  {
    slug: "brand-identity",
    number: "01",
    icon: "✳",
    category: "BRANDING & DESIGN",
    title: "Brand Identity",
    firstLine: "Brand",
    secondLine: "Identity.",
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
    statement: "Make your brand impossible to ignore.",
    process: [
      {
        number: "01",
        title: "Discover",
        description:
          "We learn about your business, audience, values, and what makes your brand different.",
      },
      {
        number: "02",
        title: "Define",
        description:
          "We shape your visual direction, personality, and the message you want to communicate.",
      },
      {
        number: "03",
        title: "Design",
        description:
          "We bring the direction to life through a consistent and recognizable brand identity.",
      },
    ],
  },
  {
    slug: "web-development",
    number: "02",
    icon: "⌘",
    category: "DIGITAL EXPERIENCE",
    title: "Web Development",
    firstLine: "Web",
    secondLine: "Development.",
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
    statement: "Turn every click into a better experience.",
    process: [
      {
        number: "01",
        title: "Plan",
        description:
          "We understand your goals, audience, content, and the purpose of your website.",
      },
      {
        number: "02",
        title: "Create",
        description:
          "We design a clear interface and develop a responsive experience around your brand.",
      },
      {
        number: "03",
        title: "Refine",
        description:
          "We review the experience and improve the details for a more polished result.",
      },
    ],
  },
  {
    slug: "digital-strategy",
    number: "03",
    icon: "↗",
    category: "STRATEGY & GROWTH",
    title: "Digital Strategy",
    firstLine: "Digital",
    secondLine: "Strategy.",
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
    statement: "Move forward with purpose, not guesswork.",
    process: [
      {
        number: "01",
        title: "Understand",
        description:
          "We explore your business objectives, audience needs, and current digital presence.",
      },
      {
        number: "02",
        title: "Strategize",
        description:
          "We identify opportunities and develop a direction that supports your priorities.",
      },
      {
        number: "03",
        title: "Optimize",
        description:
          "We evaluate performance and identify ways to keep improving your digital approach.",
      },
    ],
  },
];

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter(
    (item) => item.slug !== service.slug
  );

  return (
    <main>
      <section className="inner-hero service-detail-hero">
        <div className="container inner-hero-content">
          <div className="inner-hero-meta">
            <Link href="/services" className="back-link">
              ← All Services
            </Link>
            <span>SERVICE / {service.number}</span>
          </div>

          <p className="eyebrow service-detail-eyebrow">
            {service.category}
          </p>

          <h1>
            {service.firstLine}
            <br />
            <span>{service.secondLine}</span>
          </h1>

          <div className="inner-hero-bottom">
            <p className="inner-hero-description">
              {service.description}
            </p>

            <div className="service-detail-hero-mark" aria-hidden="true">
              <span>{service.icon}</span>
              <span>{service.number} / 03</span>
            </div>
          </div>

          <div className="inner-hero-footer">
            <span>STRATEGY. DESIGN. TECHNOLOGY.</span>
            <span>BUILT WITH PURPOSE ↓</span>
          </div>
        </div>
      </section>

      <section className="section service-intro-section">
        <div className="container service-intro-layout">
          <div className="service-intro-heading">
            <p className="eyebrow">ABOUT THIS SERVICE / 002</p>
            <h2 className="section-title">
              Thoughtful work.
              <br />
              Meaningful <span>results.</span>
            </h2>
          </div>

          <div className="service-intro-copy">
            <p className="service-detail-statement">
              {service.statement}
            </p>

            <p className="section-description">
              {service.details}
            </p>

            <div className="service-detail-tagline">
              <span className="story-dot" />
              MADE TO FIT YOUR GOALS
            </div>
          </div>
        </div>
      </section>

      <section className="section service-includes-section">
        <div className="container">
          <div className="service-includes-heading">
            <div>
              <p className="eyebrow">THE DELIVERABLES / 003</p>
              <h2 className="section-title">
                What&apos;s <span>included.</span>
              </h2>
            </div>

            <span className="service-includes-icon" aria-hidden="true">
              {service.icon}
            </span>
          </div>

          <div className="service-detail-features">
            {service.features.map((feature, index) => (
              <div className="service-feature-item" key={feature}>
                <span className="service-feature-number">
                  0{index + 1}
                </span>
                <h3>{feature}</h3>
                <span className="service-feature-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process-section">
        <div className="container">
          <div className="service-process-heading">
            <p className="eyebrow">OUR APPROACH / 004</p>
            <h2>
              From first thought
              <br />
              to <span>final result.</span>
            </h2>
            <p>
              A clear process helps us turn your goals into work that
              makes sense for your business and your audience.
            </p>
          </div>

          <div className="service-process-grid">
            {service.process.map((step) => (
              <article className="service-process-card" key={step.number}>
                <span className="service-process-number">
                  {step.number}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className="service-process-symbol" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section other-services-section">
        <div className="container">
          <div className="other-services-heading">
            <div>
              <p className="eyebrow">EXPLORE MORE / 005</p>
              <h2 className="section-title">
                More ways to
                <br />
                make an <span>impact.</span>
              </h2>
            </div>

            <Link href="/services" className="text-link">
              ALL SERVICES <span>↗</span>
            </Link>
          </div>

          <div className="other-services-grid">
            {otherServices.map((item) => (
              <Link
                href={`/services/${item.slug}`}
                className="other-service-card"
                key={item.slug}
              >
                <div className="other-service-card-top">
                  <span>{item.number}</span>
                  <span aria-hidden="true">{item.icon}</span>
                </div>

                <p className="eyebrow">{item.category}</p>
                <h3>{item.title}</h3>
                <p className="other-service-description">
                  {item.description}
                </p>

                <div className="other-service-card-bottom">
                  <span>EXPLORE SERVICE</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-bottom">
        <div className="container detail-bottom-content">
          <p className="eyebrow">READY TO GET STARTED? / 006</p>

          <h2>
            Let&apos;s bring your
            <br />
            <span>ideas to life.</span>
          </h2>

          <div className="detail-bottom-row">
            <p>
              Let&apos;s talk about your goals and find the right creative
              direction for your business.
            </p>

            <div className="hero-actions">
              <Link href="/about" className="btn">
                Meet Our Studio <span>↗</span>
              </Link>
              <Link href="/services" className="btn btn-outline">
                All Services
              </Link>
            </div>
          </div>
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

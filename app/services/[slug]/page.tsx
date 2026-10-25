
import Link from "next/link";
import { notFound } from "next/navigation";

const services = [
  {
    slug: "brand-identity",
    number: "01",
    icon: "✳",
    category: "BRANDING & DESIGN",
    title: "Brand Identity",
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
    category: "DIGITAL EXPERIENCE",
    title: "Web Development",
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
    category: "STRATEGY & GROWTH",
    title: "Digital Strategy",
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

  return (
    <main>
      <section className="inner-hero">
        <div className="container">
          <Link href="/services" className="back-link">
            ← All Services
          </Link>

          <p className="eyebrow service-detail-eyebrow">
            {service.category} / {service.number}
          </p>

          <h1>
            {service.title.split(" ").slice(0, -1).join(" ")}
            {service.title.split(" ").length > 1 && <br />}
            <span>
              {service.title.split(" ").slice(-1).join(" ")}.
            </span>
          </h1>

          <p className="inner-hero-description">
            {service.description}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container detail-layout">
          <div>
            <p className="eyebrow">ABOUT THIS SERVICE</p>
            <h2 className="section-title">
              Thoughtful work. Meaningful results.
            </h2>
            <p className="section-description">
              {service.details}
            </p>
          </div>

          <div className="detail-features">
            <span className="detail-icon">{service.icon}</span>
            <h3>What&apos;s included</h3>

            <ul>
              {service.features.map((feature) => (
                <li key={feature}>
                  <span>↗</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="detail-bottom">
        <div className="container detail-bottom-content">
          <p className="eyebrow">READY TO GET STARTED?</p>
          <h2>
            Let&apos;s bring your
            <br />
            <span>ideas to life.</span>
          </h2>
          <p>
            Explore our other services or learn more about the people
            behind Nusa Creative Studio.
          </p>

          <div className="hero-actions">
            <Link href="/services" className="btn">
              All Services ↗
            </Link>
            <Link href="/about" className="btn btn-outline">
              About Our Studio
            </Link>
          </div>
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

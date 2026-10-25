
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "✳",
    title: "Brand Identity",
    description:
      "We build memorable brands through thoughtful visual identities, clear messaging, and consistent design.",
  },
  {
    number: "02",
    icon: "⌘",
    title: "Web Development",
    description:
      "We create modern, responsive websites that combine beautiful design with meaningful functionality.",
  },
  {
    number: "03",
    icon: "↗",
    title: "Digital Strategy",
    description:
      "We help businesses find the right digital direction and connect with the people who matter.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">INDEPENDENT CREATIVE AGENCY</p>

          <h1>
            We turn bold
            <br />
            ideas into
            <br />
            <span>meaningful impact.</span>
          </h1>

          <p className="hero-description">
            Nusa Creative Studio partners with ambitious businesses to
            build thoughtful brands and digital experiences that move
            people forward.
          </p>

          <div className="hero-actions">
            <Link href="/services" className="btn">
              Explore Our Services ↗
            </Link>
            <Link href="/about" className="btn btn-outline">
              Get to Know Us
            </Link>
          </div>

          <div className="hero-bottom">
            <span>BASED IN JAKARTA, INDONESIA</span>
            <span>DESIGNING WHAT COMES NEXT ↓</span>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="decoration-circle">
            <span>NC</span>
          </div>
          <p>CREATIVITY MEETS PURPOSE.</p>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div>
            <h2>25+</h2>
            <p>Projects Delivered</p>
          </div>
          <div>
            <h2>15+</h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <h2>4</h2>
            <p>Creative Services</p>
          </div>
          <div>
            <h2>100%</h2>
            <p>Made With Purpose</p>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2 className="section-title">
                Creative solutions for a changing world.
              </h2>
            </div>
            <Link href="/services" className="text-link">
              View All Services ↗
            </Link>
          </div>

          <div className="grid">
            {services.map((service) => (
              <Link
                href={`/services/${service.number === "01" ? "brand-identity" : service.number === "02" ? "web-development" : "digital-strategy"}`}
                className="card service-card"
                key={service.number}
              >
                <div className="service-card-top">
                  <span className="card-icon">{service.icon}</span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="card-link">Discover service ↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container about-preview-grid">
          <div className="about-art">
            <div className="art-shape art-shape-one"></div>
            <div className="art-shape art-shape-two"></div>
            <div className="art-text">IDEAS<br />IN MOTION.</div>
            <span className="art-caption">NUSA CREATIVE STUDIO — EST. 2024</span>
          </div>

          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT US</p>
            <h2 className="section-title">
              Good design is more than how it looks.
            </h2>
            <p className="section-description">
              We believe great creative work starts with understanding
              people. Our team brings strategy, design, and technology
              together to solve real problems and create work that lasts.
            </p>
            <Link href="/about" className="btn about-button">
              More About Nusa ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>
            Let&apos;s make
            <br />
            something <span>meaningful.</span>
          </h2>
          <p>
            Have an idea, a challenge, or a big dream? We would love to
            hear about it.
          </p>
          <Link href="/about" className="btn cta-button">
            Let&apos;s Talk ↗
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

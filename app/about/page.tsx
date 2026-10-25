
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Think Creatively",
    description:
      "We explore different perspectives and turn fresh ideas into thoughtful solutions.",
  },
  {
    number: "02",
    title: "Work Together",
    description:
      "We believe the best results happen when people share ideas and build something together.",
  },
  {
    number: "03",
    title: "Make It Matter",
    description:
      "We focus on creating work that solves real problems and delivers meaningful value.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">GET TO KNOW US</p>
          <h1>
            Small team.
            <br />
            <span>Big ideas.</span>
          </h1>
          <p className="inner-hero-description">
            We are Nusa Creative Studio, an independent creative agency
            bringing strategy, design, and technology together to help
            businesses grow.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-story">
          <div>
            <p className="eyebrow">OUR STORY</p>
            <h2 className="section-title">
              Creativity with a purpose.
            </h2>
          </div>

          <div className="story-content">
            <p>
              Nusa Creative Studio was founded in 2024 with a simple
              belief: good creative work should do more than look good.
              It should communicate clearly, solve problems, and create
              positive experiences.
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
          </div>
        </div>
      </section>

      <section className="about-highlight">
        <div className="container highlight-content">
          <p className="eyebrow">OUR MISSION</p>
          <h2>
            To make the digital world more
            <span> thoughtful, useful, and human.</span>
          </h2>
          <p>
            We combine creativity and technology to create experiences
            that connect businesses with people.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">WHAT GUIDES US</p>
          <h2 className="section-title">
            The values behind our work.
          </h2>

          <div className="grid values-grid">
            {values.map((value) => (
              <div className="card value-card" key={value.number}>
                <span className="value-number">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <p className="eyebrow">LET&apos;S CREATE TOGETHER</p>
          <h2>
            Every great idea
            <br />
            starts <span>somewhere.</span>
          </h2>
          <p>
            We would love to learn about your business, your goals,
            and the ideas you want to bring to life.
          </p>
          <Link href="/services" className="btn cta-button">
            Explore Our Services ↗
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

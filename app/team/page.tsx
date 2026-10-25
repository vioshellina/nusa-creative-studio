
import Link from "next/link";

const team = [
  {
    name: "Adrian Pratama",
    role: "Creative Director",
    initials: "AP",
    number: "01",
    description:
      "Leads the creative vision and makes sure every project has a clear purpose.",
  },
  {
    name: "Nadia Putri",
    role: "Brand Designer",
    initials: "NP",
    number: "02",
    description:
      "Turns ideas into memorable visual identities and meaningful brand experiences.",
  },
  {
    name: "Rafael Wijaya",
    role: "Web Developer",
    initials: "RW",
    number: "03",
    description:
      "Builds responsive, user-friendly websites that bring creative ideas to life.",
  },
  {
    name: "Sabrina Amelia",
    role: "Digital Strategist",
    initials: "SA",
    number: "04",
    description:
      "Connects business goals with digital strategies and audience insights.",
  },
];

const colors = ["#d9b9a5", "#c5c9b8", "#c6c0d4", "#e2c99e"];

export default function TeamPage() {
  return (
    <main>
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">THE PEOPLE BEHIND THE IDEAS</p>
          <h1>
            Different minds.
            <br />
            <span>One vision.</span>
          </h1>
          <p className="inner-hero-description">
            Meet the people who bring strategy, creativity, and technology
            together to create meaningful work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MEET OUR TEAM</p>
              <h2 className="section-title">
                Good people make great work.
              </h2>
            </div>
            <p className="team-intro">
              A small, collaborative team with different perspectives
              and a shared passion for creative problem-solving.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <article className="team-card" key={member.number}>
                <div
                  className="team-portrait"
                  style={{ backgroundColor: colors[index] }}
                >
                  <span className="portrait-number">
                    {member.number}
                  </span>
                  <span className="portrait-initials">
                    {member.initials}
                  </span>
                  <span className="portrait-decoration">
                    NUSA STUDIO
                  </span>
                </div>

                <div className="team-member-info">
                  <div>
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                  <span className="team-arrow">↗</span>
                </div>

                <p className="team-description">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-culture">
        <div className="container team-culture-grid">
          <div>
            <p className="eyebrow">HOW WE WORK</p>
            <h2 className="section-title">
              Better ideas happen when we work together.
            </h2>
          </div>

          <div className="culture-points">
            <div>
              <span>01</span>
              <p>We listen before we create.</p>
            </div>
            <div>
              <span>02</span>
              <p>We value different perspectives.</p>
            </div>
            <div>
              <span>03</span>
              <p>We keep learning and improving.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <p className="eyebrow">LET&apos;S MAKE SOMETHING GREAT</p>
          <h2>
            Great work starts
            <br />
            with <span>a conversation.</span>
          </h2>
          <p>
            Explore what we do and discover how our team can help
            bring your next idea to life.
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


import Link from "next/link";

const team = [
  {
    name: "Upin Ipin",
    role: "Creative Director",
    initials: "UI",
    number: "01",
    description:
      "Leads the creative vision and makes sure every project has a clear purpose.",
  },
  {
    name: "Doraemon Nobita",
    role: "Brand Designer",
    initials: "DN",
    number: "02",
    description:
      "Turns ideas into memorable visual identities and meaningful brand experiences.",
  },
  {
    name: "Sopo Jarwo",
    role: "Web Developer",
    initials: "SJ",
    number: "03",
    description:
      "Builds responsive, user-friendly websites that bring creative ideas to life.",
  },
  {
    name: "Spongebob Squarepants",
    role: "Digital Strategist",
    initials: "SS",
    number: "04",
    description:
      "Connects business goals with digital strategies and audience insights.",
  },
];

const colors = ["#A5FF3F", "#D2D8C8", "#C6C0D4", "#E2C99E"];

export default function TeamPage() {
  return (
    <main className="team-page">
      <section className="inner-hero team-hero">
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
          <div className="team-hero-bottom">
            <span>CREATIVE MINDS</span>
            <span>STRATEGIC THINKERS</span>
            <span>DIGITAL BUILDERS</span>
          </div>
        </div>
      </section>

      <section className="section team-members-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MEET OUR TEAM / 2026</p>
              <h2 className="section-title">
                Good people make
                <br />
                <span className="team-title-accent">great work.</span>
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
                  style={{ "--portrait-color": colors[index] } as React.CSSProperties}
                >
                  <span className="portrait-number">{member.number}</span>
                  <span className="portrait-orbit orbit-one" />
                  <span className="portrait-orbit orbit-two" />
                  <span className="portrait-initials">{member.initials}</span>
                  <span className="portrait-decoration">NUSA STUDIO®</span>
                  <span className="portrait-cross">+</span>
                </div>

                <div className="team-member-info">
                  <div>
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                  <span className="team-arrow">↗</span>
                </div>

                <p className="team-description">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-culture">
        <div className="container team-culture-grid">
          <div className="team-culture-heading">
            <p className="eyebrow">HOW WE WORK / OUR CULTURE</p>
            <h2 className="section-title">
              Better ideas happen when we work <span>together.</span>
            </h2>
            <p className="culture-description">
              Great creative work is never a one-person job. It happens when
              people share ideas, challenge assumptions, and build something
              better as a team.
            </p>
          </div>

          <div className="culture-points">
            <div>
              <span>01</span>
              <p>We listen before we create.</p>
              <span className="culture-plus">↗</span>
            </div>
            <div>
              <span>02</span>
              <p>We value different perspectives.</p>
              <span className="culture-plus">↗</span>
            </div>
            <div>
              <span>03</span>
              <p>We keep learning and improving.</p>
              <span className="culture-plus">↗</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section team-cta">
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
            Explore Our Services <span>↗</span>
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

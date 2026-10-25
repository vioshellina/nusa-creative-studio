
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="inner-hero contact-hero">
        <div className="container">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h1>
            Let&apos;s make
            <br />
            <span>it happen.</span>
          </h1>
          <p className="inner-hero-description">
            Have an idea, a challenge, or just want to say hello?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section contact-main">
        <div className="container contact-grid">
          <div className="contact-info">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2 className="section-title">
              Good things start with a conversation.
            </h2>
            <p className="contact-description">
              Tell us a little about what you&apos;re working on.
              Whether it&apos;s a new brand, a website, or a digital
              strategy, let&apos;s explore what we can create together.
            </p>

            <div className="contact-detail">
              <span>01 / EMAIL</span>
              <a href="mailto:hello@nusacreative.studio">
                hello@nusacreative.studio ↗
              </a>
            </div>

            <div className="contact-detail">
              <span>02 / LOCATION</span>
              <p>Jakarta, Indonesia</p>
            </div>

            <div className="contact-detail">
              <span>03 / RESPONSE TIME</span>
              <p>Usually within 1–2 business days</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-heading">
              <span>START A PROJECT</span>
              <span>✳</span>
            </div>

            <form
              className="contact-form"
              action="mailto:hello@nusacreative.studio"
              method="post"
              encType="text/plain"
            >
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="Name"
                type="text"
                placeholder="e.g. Alex Johnson"
                required
              />

              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="Email"
                type="email"
                placeholder="you@example.com"
                required
              />

              <label htmlFor="service">What do you need?</label>
              <select id="service" name="Service" defaultValue="" required>
                <option value="" disabled>
                  Choose a service
                </option>
                <option value="Brand Identity">Brand Identity</option>
                <option value="Web Development">Web Development</option>
                <option value="Digital Strategy">Digital Strategy</option>
                <option value="Other">Something else</option>
              </select>

              <label htmlFor="message">Tell us about your project</label>
              <textarea
                id="message"
                name="Message"
                rows={5}
                placeholder="A little about your idea, goals, or challenges..."
                required
              />

              <button type="submit" className="btn contact-submit">
                Send an Inquiry <span>↗</span>
              </button>

              <p className="contact-form-note">
                Your next big idea could start right here.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-bottom">
        <div className="container contact-bottom-content">
          <p className="eyebrow">NOT SURE WHERE TO START?</p>
          <h2>
            That&apos;s what
            <br />
            <span>we&apos;re here for.</span>
          </h2>
          <Link href="/services" className="btn">
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

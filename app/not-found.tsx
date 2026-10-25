
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-content">
        <p className="section-label">NUSA CREATIVE STUDIO</p>

        <h1>
          4<span>0</span>4
        </h1>

        <h2>Looks like you're lost.</h2>

        <p>
          The page you're looking for doesn't exist or may have
          been moved. Let's get you back on track.
        </p>

        <Link href="/" className="not-found-button">
          Back to homepage <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Button, Photo, Arrow, MaterialStudy } from "@/components/site";
import { prices, whatsapp } from "@/lib/data";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" data-parallax>
          <Image
            src="/images/fireplace-angle.webp"
            alt="Authentic stone-clad fireplace and tiled patio by Clad & Craft Pro Tilers"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-shade" />
        <div className="hero-content wrap">
          <p className="eyebrow">CRAFTED SURFACES. CONSIDERED SPACES.</p>
          <h1>
            Premium tiling
            <br />& cladding that
            <br />
            <em>elevates every space.</em>
          </h1>
          <p className="hero-description">
            From elegant wall cladding and feature fireplaces to beautifully
            finished floors, staircases and entrances, we bring quality
            craftsmanship and modern finishes to residential and commercial
            projects.
          </p>
          <div className="hero-actions">
            <Button href="/projects">Explore Our Projects</Button>
            <Link className="text-link" href="/contact">
              Request a Quote <Arrow />
            </Link>
          </div>
        </div>
        <div className="hero-bottom wrap">
          <span>STONE / TILE / ARCHITECTURAL FINISHES</span>
          <span>
            Discover the craft <span aria-hidden="true">↓</span>
          </span>
        </div>
        <div className="hero-project">
          01 / OUTDOOR LIVING
          <br />
          <span>Stone-clad fireplace & patio</span>
        </div>
      </section>
      <div className="discipline-bar">
        <span>PREMIUM WALL CLADDING</span>
        <i />
        <span>STONE CLADDING</span>
        <i />
        <span>MODERN TILING FINISHES</span>
      </div>
      <section className="intro wrap" data-reveal>
        <div>
          <p className="eyebrow">CLAD & CRAFT PRO TILERS / ZIMBABWE</p>
          <h2>
            Good spaces begin
            <br />
            with a <em>great finish.</em>
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            Texture you can feel. Lines that flow. Finishes that bring
            everything together.
          </p>
          <p>
            We specialise in tiling, stone cladding and architectural
            installations for residential and commercial spaces. Our work is
            guided by careful preparation, considered material choices and
            attention to the details.
          </p>
          <Link className="text-link dark-link" href="/about">
            Meet the craft behind the finish <Arrow />
          </Link>
        </div>
      </section>
      <section className="craft-showcase wrap">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>
              Different surfaces.
              <br />
              <em>The same care.</em>
            </h2>
          </div>
          <Link className="text-link dark-link" href="/services">
            Explore all services <Arrow />
          </Link>
        </div>
        <div className="service-composition">
          <Link
            href="/services#service-0"
            className="service-large"
            data-reveal
          >
            <Photo id="fireplace-front" />
            <div>
              <span>01 / TEXTURE & DEPTH</span>
              <h3>Stone & wall cladding</h3>
              <Arrow />
            </div>
          </Link>
          <div className="service-stack">
            <Link href="/services#service-3" data-reveal>
              <Photo id="hallway-side" />
              <div>
                <span>02 / LINE & CONTINUITY</span>
                <h3>Precision tiling</h3>
                <Arrow />
              </div>
            </Link>
            <Link href="/services#service-5" data-reveal>
              <Photo id="curved-steps" />
              <div>
                <span>03 / THE FIRST IMPRESSION</span>
                <h3>Stairs & entrances</h3>
                <Arrow />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <MaterialStudy />
      <section className="featured wrap">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">A SELECTION OF OUR WORK</p>
            <h2>
              Real spaces.
              <br />
              <em>Lasting impressions.</em>
            </h2>
          </div>
          <Link href="/projects" className="text-link dark-link">
            View the portfolio <Arrow />
          </Link>
        </div>
        <div className="featured-grid">
          <Link href="/projects" data-reveal>
            <Photo id="patio-wide" />
            <div className="project-caption">
              <span>Outdoor fireplace & patio</span>
              <Arrow />
            </div>
          </Link>
          <Link href="/projects" data-reveal>
            <Photo id="hallway-front" />
            <div className="project-caption">
              <span>Marble-effect hallway</span>
              <Arrow />
            </div>
          </Link>
        </div>
      </section>
      <section className="approach">
        <div className="wrap approach-layout">
          <div data-reveal>
            <p className="eyebrow">OUR APPROACH</p>
            <h2>
              Considered from
              <br />
              the first line.
              <br />
              <em>To the last detail.</em>
            </h2>
            <p>We deliver premium, modern & durable finishes.</p>
            <Button href="/contact">Discuss your project</Button>
          </div>
          <div className="approach-steps">
            {[
              [
                "01",
                "Understand the space",
                "We start with your requirements, the surface and how the space will be used.",
              ],
              [
                "02",
                "Resolve the details",
                "Tile layout, material transitions and edges are considered together.",
              ],
              [
                "03",
                "Craft the finish",
                "Careful fitting and attention to alignment bring the design into the space.",
              ],
            ].map(([n, title, copy]) => (
              <div key={n} data-reveal>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pricing-preview wrap" data-reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">PLAN YOUR FINISH</p>
            <h2>
              A clear place <em>to begin.</em>
            </h2>
          </div>
          <Link className="text-link dark-link" href="/pricing">
            View pricing & catalog <Arrow />
          </Link>
        </div>
        <div className="price-lines">
          {prices.map((p) => (
            <Link href={whatsapp(p.name)} key={p.name}>
              <h3>{p.name}</h3>
              <span>
                <strong>US${p.price}</strong>
                <small>{p.unit}</small>
              </span>
              <Arrow />
            </Link>
          ))}
        </div>
        <p className="price-note">
          Prices are indicative and may vary depending on the project
          requirements. Contact us for a detailed quotation.
        </p>
      </section>
    </>
  );
}

import { Button, Photo } from "@/components/site";
import { services, whatsapp } from "@/lib/data";
export const metadata = {
  title: "Tiling, Stone Cladding & Architectural Services",
  description:
    "Explore stone and wall cladding, fireplace finishes, ceramic and porcelain floor installation, staircase tiling and architectural finishes in Zimbabwe.",
  alternates: { canonical: "/services" },
};
export default function Services() {
  return (
    <>
      <section className="page-intro wrap">
        <p className="eyebrow">OUR SERVICES</p>
        <div className="page-heading">
          <h1>
            A surface for
            <br />
            <em>every possibility.</em>
          </h1>
          <p>
            From tactile stone to clean porcelain lines, we bring careful
            workmanship to the materials that define your space.
          </p>
        </div>
        <div className="service-index">
          {services.map((s, i) => (
            <a href={`#service-${i}`} key={s[0]}>
              <span>0{i + 1}</span>
              {s[0]}
            </a>
          ))}
        </div>
      </section>
      <div className="services-list">
        {services.map(([title, line, description, image], i) => (
          <section
            className={`service-detail ${i % 3 === 1 ? "service-reverse" : ""} ${i % 3 === 2 ? "service-dark" : ""}`}
            id={`service-${i}`}
            key={title}
          >
            <div className="wrap service-detail-inner">
              <div className="service-detail-photo" data-reveal>
                <Photo id={image} />
                <span>
                  {image === "ceramic-progress"
                    ? "Installation in progress"
                    : "Selected project photography"}
                </span>
              </div>
              <div className="service-detail-copy" data-reveal>
                <p className="eyebrow">OUR CRAFT / 0{i + 1}</p>
                <h2>{title}</h2>
                <h3>{line}</h3>
                <p>{description}</p>
                {i === 6 && (
                  <p className="small-note">
                    Shown: entrance tiling detail. Ask us about a finish suited
                    to your balcony.
                  </p>
                )}
                <Button href={whatsapp(title)}>
                  Enquire about this service
                </Button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

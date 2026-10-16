import { Photo, Button } from "@/components/site";
import { prices, whatsapp } from "@/lib/data";
export const metadata = {
  title: "Pricing / Catalog",
  description:
    "View supplied catalog prices: tile cladding US$10 service only, 600 × 600 mm ceramic fitting US$3.75/m² and porcelain floor fitting US$4.00/m².",
  alternates: { canonical: "/pricing" },
};
export default function Pricing() {
  return (
    <>
      <section className="page-intro wrap">
        <p className="eyebrow">PRICING / SERVICE CATALOG</p>
        <div className="page-heading">
          <h1>
            Your next finish.
            <br />
            <em>A clear starting point.</em>
          </h1>
          <p>
            Selected fitting prices from our service catalog. Every space is
            different, so a detailed quotation is the best place to finalise the
            scope.
          </p>
        </div>
      </section>
      <section className="catalog wrap">
        {prices.map((p, i) => (
          <article className="catalog-item" key={p.name} data-reveal>
            <Photo id={p.image} />
            <div>
              <p className="eyebrow">SERVICE / 0{i + 1}</p>
              <h2>{p.name}</h2>
              <div className="catalog-price">
                <span>US$</span>
                {p.price}
              </div>
              <p className="catalog-unit">{p.unit}</p>
              <p>{p.detail}</p>
              <Button
                href={whatsapp(
                  `a quotation for ${p.name} (catalog price US$${p.price}, ${p.unit})`,
                )}
              >
                Request a quotation
              </Button>
            </div>
          </article>
        ))}
      </section>
      <section className="pricing-advice wrap" data-reveal>
        <p className="eyebrow">BEFORE WE BEGIN</p>
        <h2>Made for your project.</h2>
        <p>
          Prices are indicative and may vary depending on the project
          requirements. Contact us for a detailed quotation.
        </p>
        <p>
          Send your project location, approximate measurements, tile or cladding
          preferences, and photographs of the existing surface. We’ll discuss
          preparation, materials and the full scope with you.
        </p>
      </section>
    </>
  );
}

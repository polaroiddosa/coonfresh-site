// Content from the client-supplied official Coonvita e-brochure PDF
// (projects/site-rebuild/resources/ebrochure/coonvita-ebrochure.pdf).
// The original /e-brochure/ page on the live site redirected to a PDF
// download that was never archived (see wiki/infrastructure.md) — this is
// a fresh build from the real brochure content, not a port.
import coverImage from "../assets/images/e-brochure/coonvita-ebrochure-cover.jpg";
import familyImage from "../assets/images/e-brochure/coonvita-ebrochure-family.jpg";
import { ButtonLink, CheckIcon, SectionHeading } from "../components/ui";

const uniqueFeatures = [
  "Vitamin D2 prominent drink from mushrooms with nutritious millets is first of its kind in the world.",
  "Heat Pump Technological Drying employed in its production process is unique in the making of this premium product.",
  "Coonvita has 300 to 600 IU of vitamin D in the per serve 8 gms from mushrooms.",
  "Along with Vitamin D, we get other vitamins and minerals of mushrooms and millets which are the rich source of healthy food.",
  "COONVITA is in powder form and has an appealing texture with chocolate coffee flavor.",
  "COONVITA has SIX MONTHS shelf life.",
  "Coonvita has Magnesium derived from Oyster mushrooms which is essential for the absorption of vitamin D in our body.",
  "Coonvita is a product which has Nutri-cereal extract powder in place of maltodextrin which helps in low glycemic index.",
  "Coonvita could be taken by all age groups and it is vitamin D2 which keeps our systems and organs from vascular calcification and hypercalcemia.",
];

const directors = [
  { role: "Managing Director", name: "Shije Thankachan", credentials: "Bsc, PPTTC, IIHR Certification" },
  { role: "Director", name: "T J Thankachan", credentials: "MSW, LLB, IIHR Certification" },
  { role: "Director", name: "Anto T Joseph", credentials: "MA, IIHR Certification" },
];

export default function EBrochure() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-2">
        <div className="relative mx-auto max-w-md">
          <span aria-hidden="true" className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-brand-peach" />
          <img
            src={coverImage}
            alt="Coonfresh Coonvita — Mushroom Millet Nutrition 'D'rink, chocolate flavour"
            className="relative w-full rounded-card border-[6px] border-white shadow-float"
          />
        </div>
        <div>
          <h1 className="font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.08] text-ink">
            Coonvita — Mushroom Millet Nutrition &apos;D&apos;rink
          </h1>
          <p className="mt-3 text-sm font-bold tracking-[0.12em] text-brand-blue-deep">
            CHOCOLATE FLAVOUR
          </p>
          <p className="mt-6 text-lg">
            Coonfresh Coonvita is a mushroom based nutrition drink with millet
            mix in the form of powder to fill the day to day needs of Vitamin
            D in our body. It is processed by Heat Pump Technology to retain
            and enhance the vitamin content in it.
          </p>
          <p className="mt-4 text-lg">
            It is also enriched with other ingredients like Malt extract
            powder, skimmed milk, coco powder and flavoured with Chocolate
            coffee, all in natural form in a specific formula. And it offers
            a shelf life of six months in normal conditions.
          </p>
          <a
            href="/brochures/coonvita-ebrochure.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-8"
          >
            Download Full Brochure (PDF)
          </a>
        </div>
      </section>

      <section className="on-deep mx-auto max-w-7xl px-4 sm:px-6">
        <div className="panel grid gap-8 bg-brand-blue-deep px-6 py-12 text-center text-white sm:grid-cols-2 sm:text-left sm:px-12">
          <div>
            <p className="font-heading text-3xl font-semibold">Enhanced Vitamin D</p>
            <p className="mt-2">Complete protein with all nine essential amino nutrients</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            {["Delicious", "Nutritious", "Revitalising"].map((w) => (
              <span key={w} className="rounded-full bg-white px-5 py-2 font-bold text-brand-blue-deep">
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading className="text-center">What Makes Coonvita Unique?</SectionHeading>
        <ul className="mt-10 space-y-3">
          {uniqueFeatures.map((feature) => (
            <li key={feature} className="card flex gap-4 p-5">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-brand-blue-deep" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <img
          src={familyImage}
          alt="Family enjoying Coonvita mushroom millet nutrition drink"
          loading="lazy"
          className="h-80 w-full rounded-panel object-cover shadow-card sm:h-[420px]"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="panel bg-sand px-6 py-16 text-center sm:px-12">
          <p className="mx-auto max-w-3xl text-lg">
            Coonfresh is a brand from TMJ Foods India Private Limited, a
            mushroom company which is in the mushroom cultivation and its
            diversified activities since 2007.
          </p>

          <h2 className="font-heading mt-12 text-2xl font-semibold text-ink">Board of Directors</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {directors.map((d) => (
              <div key={d.name} className="card p-6">
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-brand-peach-deep">{d.role}</p>
                <p className="font-heading mt-2 text-xl font-semibold text-ink">{d.name}</p>
                <p className="mt-1">{d.credentials}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p>Email: coonfresh124@gmail.com</p>
            <p>Call: (+91) 98953 95021, (+91) 80894 10299, (+91) 88916 41090</p>
            <p>Web: coonfresh.com</p>
          </div>

          <ButtonLink href="https://wa.me/919895395021" umami="WhatsApp click" className="mt-10">
            Order Coonvita on WhatsApp
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

// Content recovered from Wayback Machine archive.org snapshot of
// coonfresh.com/coonvita/ dated 2026-04-22 (the live page currently falls
// through to the blog archive — see wiki/infrastructure.md). Real content,
// verified against an independent source (archive.org), and recent.
// Vitamin D / serving-size / shelf-life figures updated 2026-09-11 to match
// the client-supplied official e-brochure (see wiki/infrastructure.md) —
// the Wayback snapshot's numbers were older and had drifted from current.
import coonvitaBox from "../assets/images/coonvita-mushroom-health-drink.png";
import launchEvent1 from "../assets/images/coonvita/coonfresh-coonvita-launch-event-1.jpg";
import launchEvent2 from "../assets/images/coonvita/coonfresh-coonvita-launch-event-2.jpg";
import launchEvent3 from "../assets/images/coonvita/coonfresh-coonvita-launch-event-3.jpg";
import { ButtonLink, SectionHeading } from "../components/ui";

const stats = [
  { value: "100%", label: "Organic" },
  { value: "0", label: "Added Flavours" },
  { value: "8g", label: "Per Serve" },
  { value: "300-600", label: "IU Vitamin D2" },
];

const features = [
  {
    title: "Nutri-Health Drink",
    copy: "Coonfresh Coonvita is a total nutri-health drink which can be taken by all without any limits of age and gender. It is highly recommended for those suffering from Vitamin D deficiency-related problems.",
  },
  {
    title: "Delicious",
    copy: "Flavored with chocolate, Coonfresh Coonvita is delicious by all means. Add it to your daily diet as a supplement to Vitamin D and proteins.",
  },
  {
    title: "Nutritious",
    copy: "Coonfresh Coonvita is full of nutrients. It embodies all the nutrients found in mushroom and it can be used by people of all age groups.",
  },
  {
    title: "Revitalizing",
    copy: "If you feel tired or feeling nausea, Coonvita is the best supplement you can take in. It is without any symptoms and can help you revitalize your energy.",
  },
];

export default function Coonvita() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <span aria-hidden="true" className="absolute inset-4 rounded-full bg-sand" />
          <span aria-hidden="true" className="absolute -right-2 top-6 h-20 w-20 rounded-full bg-brand-peach" />
          <img
            src={coonvitaBox}
            alt="Coonfresh Coonvita mushroom nutrition drink"
            width={669}
            height={830}
            className="relative mx-auto max-h-[28rem] w-auto drop-shadow-[0_24px_28px_rgb(138_90_53/0.35)]"
          />
        </div>
        <div>
          <h1 className="font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.08] text-ink">
            Mushroom Nutri Health Drink
          </h1>
          <p className="mt-6 text-lg">
            Coonfresh Coonvita is a mushroom-based nutrition drink mixture in
            the form of powder to fill the day-to-day needs of Vitamin D in
            our body. It is made by using UV application and a dehydrated
            drying process using Heat Pump Technology to retain and enhance
            the vitamin content in it.
          </p>
          <p className="mt-4 text-lg">
            It is also enriched with other ingredients like Malt extract
            powder, skimmed milk and coco powder, and flavored with Chocolate
            coffee – all in natural form in a specific formula. It offers a
            shelf life of six months in normal conditions.
          </p>
        </div>
      </section>

      <section className="on-deep mx-auto max-w-7xl px-4 sm:px-6">
        <dl className="panel grid gap-6 bg-brand-blue-deep px-6 py-12 text-center text-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="order-2 mt-1 text-sm font-bold uppercase tracking-[0.12em]">{s.label}</dt>
              <dd className="font-heading order-1 text-5xl font-semibold tabular-nums">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article key={f.title} className="card p-7">
              <h2 className="font-heading text-xl font-semibold text-ink">{f.title}</h2>
              <p className="mt-3">{f.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <SectionHeading className="text-center">Coonvita Launch</SectionHeading>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[launchEvent1, launchEvent2, launchEvent3].map((src, i) => (
            <img
              key={src}
              src={src}
              alt="Coonfresh Coonvita launch event"
              loading="lazy"
              width={400}
              height={400}
              className={`aspect-square w-full rounded-card border-[6px] border-white object-cover shadow-card ${
                i === 1 ? "sm:mt-8" : ""
              }`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="panel bg-sand px-6 py-14 text-center">
          <ButtonLink
            href={`https://wa.me/919895395021?text=${encodeURIComponent("Hi, I'd like to order Coonvita from Coonfresh.")}`}
            umami="WhatsApp click"
          >
            Order Coonvita on WhatsApp
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}

// Content recovered from Wayback Machine archive.org snapshot of
// coonfresh.com/about/ dated 2019-12-13 (the live page currently falls
// through to the blog archive, and no newer archived snapshot has real
// content — see wiki/infrastructure.md). This is real, verified content
// from an independent source, but it is ~7 years old: awards/facilities
// info may be outdated. Flagged for client review before launch.
import freshMushrooms from "../assets/images/fresh-mushrooms-real.jpeg";
import { CheckIcon, PageHero, SectionHeading } from "../components/ui";

const facilities = [
  "Two storied mushroom shed of 2000 sq. feet",
  "Air conditioned laboratory and equipment for spawn production",
  "Hygienic, exclusive mushroom food processing hall",
  "Mushroom bed making hall",
  "Mist irrigation facility inside the shed",
  "Media preparation and storage facility",
  "Freezing facility for the storage of processed food",
  "Buy-back system — assured best rate to support farmers",
  "Experiential learning — professional training in the mushroom farm itself",
  "Standard Operating Procedure (SOP) laid down in a handbook for farmers",
];

const awards = [
  "Best Farmer Award, 2010 — Ezhupunna Panchayath",
  "Best Farmer Award, 2014 — Kuthiathode Block",
  "Progressive Mushroom Grower of India, 2024 — ICAR-DMR",
  "All products branded under Coonfresh — \"an organic way to healthy living\"",
];

const quality = [
  "FSSAI Registration",
  "Medical Fitness Certificate from a qualified, registered medical practitioner",
  "Panchayath License",
  "Certification of food items by an authorized, nationally accredited laboratory",
];

const media = [
  "Featured on Jeevan TV — \"Haritha Keralam\" (31 Aug 2010)",
  "Featured on Kairali TV — \"Bhoomi Geetham\" (19 Aug 2010)",
  "Coverage on Asianet, Amrutha, Indiavision, Mathrubhumi News, Manorama News",
  "Articles in Karshakashree, Karshakan, Kerala Karshakan and others",
  "Articles in The Better India and Startup Pedia",
];

const whatWeDo = [
  {
    title: "High-Tech Mushroom Cultivation",
    copy: "Our eco-friendly, modern farms accommodate over 8,000 mushroom beds simultaneously, utilizing smart, high-tech systems for optimum quality and yield.",
  },
  {
    title: "In-House Spawn Production & Agri-Tech Solutions",
    copy: "We produce premium-quality mushroom spawn and offer end-to-end setup solutions for individuals and organizations looking to establish high-tech mushroom farms.",
  },
  {
    title: "Revolutionary Value-Added Products",
    copy: "Equipped with a mini-manufacturing unit, we transform naturally grown mushrooms into nutrient-rich foods. Proudly featuring COONVITA under our flagship brand COONFRESH — the world's first and unique Vitamin D-enriched mushroom innovation, backed by Central and State grant recognitions.",
  },
  {
    title: "Experiential Training & Demonstration",
    copy: "We empower future agri-preneurs through comprehensive hands-on training programs, physical farm visits, live practical demonstrations, interactive visual presentations, and specialized workshops on mushroom farming, spawn production, and value-added product processing.",
  },
];

export default function About() {
  return (
    <div>
      <PageHero
        title="Coonfresh — by TMJ Foods India Pvt. Ltd."
        subtitle="Cultivating Health, Innovating Tradition."
      >
        <p className="mt-6 text-lg">
          Welcome to TMJ Foods India Private Limited — where innovation meets
          nature to bring you the finest in mushroom farming and nutrition.
        </p>
        <p className="mt-4 text-lg">
          Established in 2007 near Cochin, Kerala, TMJ Foods India Private
          Limited is an award-winning pioneer in the mushroom enterprise. We
          combine cost-efficient, high-tech farming to deliver premium,
          sustainable mushroom products across the nation.
        </p>
        <p className="mt-4 text-lg">
          Driven by passion and backed by recognized excellence, our mission
          is simple: An Organic Way to Healthy Living.
        </p>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading className="text-center">What We Do at a Glance</SectionHeading>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {whatWeDo.map((w) => (
            <article key={w.title} className="card p-8">
              <h3 className="font-heading text-xl font-semibold text-ink">{w.title}</h3>
              <p className="mt-3">{w.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 md:grid-cols-2">
        <div>
          <SectionHeading>Leadership Driven by Excellence</SectionHeading>
          <p className="mt-5 text-lg">
            Led by Managing Director Shije Thankachan — a celebrated State and
            National Award winner — TMJ Foods is built on values of dedication,
            research, and family heritage, ably supported by Directors
            T.J. Thankachan and Anto T. Joseph.
          </p>
        </div>
        <div className="relative mx-auto">
          <span aria-hidden="true" className="absolute -bottom-4 -right-4 h-36 w-36 rounded-full bg-brand-peach" />
          <img
            src={freshMushrooms}
            alt="Fresh oyster mushrooms"
            loading="lazy"
            className="relative h-72 w-72 rounded-full border-[8px] border-white object-cover shadow-float sm:h-80 sm:w-80"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="panel bg-sand px-6 py-16 sm:px-12">
          <SectionHeading className="text-center">How We Farm</SectionHeading>
          <div className="mx-auto mt-8 max-w-[68ch] space-y-4 text-lg">
            <p>
              We have concentrated on cultivating mushroom differently rather than
              doing different things.
            </p>
            <p>
              Ours is a unique multi-storey shed. The lower floor is kept below
              28°C, suited to Oyster mushroom; the upper floor up to 32°C, suited
              to Milky mushroom — two varieties cultivated at the same location
              by putting the different temperature needs to our advantage.
            </p>
            <p>
              Disinfection of the growing media is done with eco-friendly crop
              protectant and calcium carbonate or potassium permanganate, and now
              food-grade hydrogen peroxide imported from Belgium.
            </p>
            <p>
              We developed a handbook on mushroom cultivation with tips for
              trouble-free growing, given to every training participant along
              with one packet of spawn for a trial run. Spawn is produced in our
              most hygienic lab, limited to two generations of multiplication to
              ensure high yield and good quality — and we were the first in
              Kerala to brand our mushroom, spawn, and value-added products.
            </p>
          </div>
        </div>
      </section>

      <section className="on-deep mx-auto mt-20 max-w-7xl px-4 sm:px-6">
        <div className="panel bg-brand-blue-deep px-6 py-16 text-white sm:px-12">
          <SectionHeading tone="light" className="text-center">
            Our Vision, Mission and Values
          </SectionHeading>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3">
            {[
              'Encourage local community to keep "One Room for Mush-Room"',
              'From "Room" to a "Hut" — emphasizing friendship as motivator',
              'Hut to "Mushroom Village"',
              "Mushroom Village metamorphoses to Mushroom Block",
              "Going ahead to generate Mushroom District, Mushroom State and Mushroom Country",
              "Utilize substantial income towards charity",
            ].map((v) => (
              <li key={v} className="flex gap-3 rounded-2xl bg-white/12 px-5 py-4">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading className="text-center">State of the Art Facilities</SectionHeading>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {facilities.map((f) => (
            <li key={f} className="card flex gap-3 p-5">
              <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-brand-blue-deep" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="panel grid gap-10 bg-sand px-6 py-16 sm:px-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-ink">
              Awards, Recognition & National Branding
            </h2>
            <ul className="mt-5 space-y-3">
              {awards.map((a) => (
                <li key={a} className="flex gap-3">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-brand-peach-deep" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-ink">Food Quality & Safety</h2>
            <ul className="mt-5 space-y-3">
              {quality.map((q) => (
                <li key={q} className="flex gap-3">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-brand-peach-deep" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="font-heading text-center text-2xl font-semibold text-ink">Media Coverage</h2>
        <ul className="mt-8 space-y-3">
          {media.map((m) => (
            <li key={m} className="card px-6 py-4">
              {m}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

import { useState } from "react";
import exteriorOverview from "../assets/images/farm-setting/exterior-overview.jpeg";
import exteriorFinished from "../assets/images/farm-setting/exterior-finished.jpeg";
import roofAndCladding from "../assets/images/farm-setting/roof-and-cladding.jpeg";
import coolingPadSystem from "../assets/images/farm-setting/cooling-pad-system.jpeg";
import foundation from "../assets/images/farm-setting/foundation.jpeg";
import framingWithFan from "../assets/images/farm-setting/framing-with-fan.jpeg";
import interiorHangingSystem from "../assets/images/farm-setting/interior-hanging-system.jpeg";
import interiorInProduction from "../assets/images/farm-setting/interior-in-production.jpeg";
import { ButtonLink, Lightbox, PageHero, SectionHeading } from "../components/ui";

const WHATSAPP_NUMBER = "919895395021";
const ENQUIRY_MESSAGE = "Hi, I'd like to know more about Coonfresh's mushroom farm setup and consulting service.";

type Feature = {
  title: string;
  copy: string;
  image: string;
  alt: string;
};

const features: Feature[] = [
  {
    title: "Energy-Efficient & Pest-Proof",
    copy: "Coonfresh constructs energy-efficient farms that are completely protected from pests, rats, and other intrusions — a secure, controlled structure from day one.",
    image: exteriorOverview,
    alt: "A row of completed Coonfresh mushroom farm buildings",
  },
  {
    title: "Built for Controlled Environment Agriculture",
    copy: "Every farm is designed to resist Kerala's hot climate, ventilating and reflecting heat to the maximum — supporting Controlled Environment Agriculture (CEA) for stable growing conditions.",
    image: exteriorFinished,
    alt: "Finished Coonfresh farm building with ventilation louvers and exhaust fan",
  },
  {
    title: "18 Years of Structural Experience",
    copy: "Coonfresh brings 18 years of experience into every farm structure — white-coloured roofing sheets and cladding sidewalls embedded with heat-resisting bubble sheets, purpose-built to keep interiors cool.",
    image: roofAndCladding,
    alt: "Roof truss and cladding under construction, with heat-resisting bubble sheet visible",
  },
  {
    title: "Fan & Pad System, Sized to Your Farm",
    copy: "Coonfresh assesses your farm size, bed capacity, and terrain condition before designing a fan-and-pad cooling system suitable for that specific farm — not a one-size-fits-all setup.",
    image: coolingPadSystem,
    alt: "Close-up of a fan-and-pad evaporative cooling system installed in a Coonfresh farm",
  },
];

const progressPhotos = [
  { image: foundation, alt: "Coonfresh mushroom farm foundation under construction" },
  { image: framingWithFan, alt: "Steel framing with exhaust fan being installed" },
  { image: interiorHangingSystem, alt: "Empty hanging-ring system ready for mushroom beds" },
  { image: interiorInProduction, alt: "Mushroom beds hanging in a completed Coonfresh farm" },
];

export default function FarmSetting() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      <PageHero title="Farm Setting" subtitle="MUSHROOM FARM SETUP & CONSULTING">
        <p className="mx-auto mt-6 max-w-2xl text-lg">
          Alongside fresh mushrooms, spawns, and Coonvita, Coonfresh offers
          training and consulting for mushroom cultivation — helping you set
          up your own mushroom farm from the ground up.
        </p>
      </PageHero>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {features.map((f, i) => (
          <article key={f.title} className="grid items-center gap-8 py-8 md:grid-cols-2 md:gap-14">
            <div className={`relative ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <span
                aria-hidden="true"
                className={`absolute -bottom-3 h-28 w-28 rounded-full bg-brand-peach ${
                  i % 2 === 1 ? "-right-3" : "-left-3"
                }`}
              />
              <img
                src={f.image}
                alt={f.alt}
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-card border-[6px] border-white object-cover shadow-float"
              />
            </div>
            <div>
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-ink">
                {f.title}
              </h2>
              <p className="mt-4 text-lg">{f.copy}</p>
            </div>
          </article>
        ))}

        <div className="card mt-8 p-8 md:p-10">
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-ink">
            Subsidy &amp; Power Connection Support
          </h2>
          <p className="mt-4 max-w-2xl text-lg">
            Coonfresh also helps in arranging subsidy under the Mushroom
            Village Scheme, along with subsidised KSEB power supply for your
            farm.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="panel bg-sand px-6 py-16 sm:px-10">
          <SectionHeading className="text-center">From Foundation to Full Production</SectionHeading>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {progressPhotos.map((p, i) => (
              <button
                key={p.image}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group card block overflow-hidden transition-transform duration-150 active:scale-[0.98]"
                aria-label={`Open photo: ${p.alt}`}
              >
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={progressPhotos.map((p) => ({ src: p.image, alt: p.alt }))}
          index={lightboxIndex}
          onIndexChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <div className="px-6 py-20 text-center">
        <p className="mx-auto max-w-xl text-lg">
          For farm size, cost estimates, and a site-specific plan, message us
          on WhatsApp.
        </p>
        <div className="mt-6">
          <ButtonLink
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(ENQUIRY_MESSAGE)}`}
            umami="WhatsApp click"
          >
            Enquire on WhatsApp
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

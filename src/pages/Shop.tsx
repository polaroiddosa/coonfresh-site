import { Link } from "react-router-dom";
import freshMushrooms from "../assets/images/fresh-mushrooms-real.jpeg";
import mushroomBeds from "../assets/images/mushroom-beds-real.jpeg";
import mushroomSpawns from "../assets/images/mushroom-spawns-real.jpeg";
import coonvitaImg from "../assets/images/coonvita-mushroom-health-drink.png";
import { ArrowIcon, ButtonLink, PageHero } from "../components/ui";

const WHATSAPP_NUMBER = "919895395021";

type Product = {
  title: string;
  image: string;
  copy: string;
  learnMoreTo?: string;
};

// Add a new product here (title + image + copy) as the client sends real
// items — import the photo above the same way as the products below. No
// prices are listed site-wide; every product routes to a WhatsApp order
// chat instead of a checkout.
const products: Product[] = [
  {
    title: "Fresh Mushrooms",
    image: freshMushrooms,
    copy: "Fresh and home-made mushrooms are available for sale. You can prepare a wide range of recipes with fresh mushrooms at home.",
  },
  {
    title: "Mushroom Beds",
    image: mushroomBeds,
    copy: "Coonfresh provides mushroom beds and helps you prepare beds by providing everything required for yielding fruits well.",
  },
  {
    title: "Mushroom Spawns",
    image: mushroomSpawns,
    copy: "Why not grow your own mushroom garden? Coonfresh gives you top quality mushroom spawns ready to fruit with assured production.",
  },
  {
    title: "Coonvita",
    image: coonvitaImg,
    copy: "A mushroom-based nutrition drink mixture in powder form, enriched with malt extract, skimmed milk, and cocoa — flavoured with chocolate coffee.",
    learnMoreTo: "/coonvita",
  },
];

function whatsappHref(title: string) {
  const message = `Hi, I'd like to order ${title} from Coonfresh.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Shop() {
  return (
    <div>
      <PageHero title="Shop">
        <p className="mx-auto mt-4 max-w-xl text-lg">
          Message us on WhatsApp to place an order — we'll confirm price and
          availability there.
        </p>
      </PageHero>
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-24 sm:px-6">
        <div className="grid gap-x-6 gap-y-24 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.title}
              className="card relative flex flex-col items-center px-6 pb-8 pt-28 text-center"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute -top-16 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full border-[6px] border-white bg-cream object-cover shadow-float"
              />
              <h2 className="font-heading text-2xl font-semibold text-ink">{p.title}</h2>
              <p className="mt-3 flex-1">{p.copy}</p>
              <div className="mt-6 flex flex-col items-center gap-2">
                {p.learnMoreTo && (
                  <Link to={p.learnMoreTo} className="link-arrow">
                    Learn More <ArrowIcon />
                  </Link>
                )}
                <ButtonLink href={whatsappHref(p.title)}>
                  Order on WhatsApp
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

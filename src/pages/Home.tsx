import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/images/hero-bg.jpg";
import heroVideo from "../assets/videos/hero-loop.mp4";
import freshMushrooms from "../assets/images/fresh-mushrooms-real.jpeg";
import mushroomBeds from "../assets/images/mushroom-beds-real.jpeg";
import mushroomSpawns from "../assets/images/mushroom-spawns-real.jpeg";
import coonvitaImg from "../assets/images/coonvita-mushroom-health-drink.png";
import foundersImg from "../assets/images/founders-shije-tj.jpeg";
import icon1 from "../assets/images/icon-1.png";
import icon2 from "../assets/images/icon-2.png";
import icon3 from "../assets/images/icon-3.png";
import { ArrowIcon, ButtonLink, PauseIcon, PlayIcon, SectionHeading } from "../components/ui";

const products = [
  {
    title: "Fresh Mushrooms",
    image: freshMushrooms,
    copy: "Fresh and home-made mushrooms are available for sale. You can prepare a wide range of recipes with fresh mushrooms at home.",
  },
  {
    title: "Mushroom Beds",
    image: mushroomBeds,
    copy: "Coonfresh provides mushroom beds and help you prepare beds by providing you everything required for yielding fruits well.",
  },
  {
    title: "Mushroom Spawns",
    image: mushroomSpawns,
    copy: "Why not grow your own mushroom garden? Coonfresh gives you top quality mushroom spawns ready to fruit with assured production.",
  },
];

const uniquePoints = [
  { icon: icon1, label: "Food Quality and Safety" },
  { icon: icon2, label: "Uncompromised Hygiene" },
  { icon: icon3, label: "State of the Art Facilities" },
];

const latestBlogs = [
  {
    title: "Essential Tips for Growing Mushroom Seeds Successfully | Shije Varghese | Coonfresh",
    date: "Dec 9, 2024",
    category: "Mushroom Cultivation",
    excerpt:
      "Join Ms. Shije Varghese, an award-winning mushroom cultivator, as she shares valuable insights on growing mushroom seeds successfully. From preparation tips to cultivation techniques, learn everything you need to know...",
    href: "/blog/essential-tips-for-growing-mushroom-seeds-successfully-shije-varghese-coonfresh",
    image: "/blog-thumbnails/essential-tips-for-growing-mushroom-seeds-successfully-shije-varghese-coonfresh.jpg",
  },
  {
    title: "Koongramam Project: Paving the Way for a Mushroom Revolution",
    date: "Nov 25, 2024",
    category: "Mushroom Cultivation",
    excerpt:
      "The Koongramam Project aims to spark a mushroom revolution by promoting sustainable and profitable mushroom farming practices. This initiative focuses on empowering local farmers with the knowledge, resources, and infrastructure needed to...",
    href: "/blog/koongramam-project-paving-the-way-for-a-mushroom-revolution",
    image: "/blog-thumbnails/koongramam-project-paving-the-way-for-a-mushroom-revolution.jpg",
  },
  {
    title: "Setting Up a Bio Hi-Tech Farm: A Step Towards Modern Farming",
    date: "Nov 22, 2024",
    category: "Mushroom Farm",
    excerpt:
      "Salim Kumar has taken a step into modern agriculture by setting up a Bio Hi-Tech Farm at his house, Laughing Villa. This innovative farm focuses on mushroom cultivation using advanced technology and sustainable methods. It's a perfect...",
    href: "/blog/setting-up-a-bio-hi-tech-farm-a-step-towards-modern-farming",
    image: "/blog-thumbnails/setting-up-a-bio-hi-tech-farm-a-step-towards-modern-farming.jpg",
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  // The hero loop always plays on load (muted, decorative); the Pause button below
  // gives everyone, including people who prefer less motion, a way to stop it.
  function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] items-center gap-10 overflow-x-clip px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-24 lg:pt-14">
        <div className="px-2 text-center lg:px-6 lg:text-left">
          <h1 className="font-heading text-[clamp(2.5rem,9vw,6rem)] font-semibold leading-[0.98] tracking-tight text-brand-blue-deep">
            COONFRESH
          </h1>
          <p className="mt-5 text-lg font-bold tracking-[0.12em] text-ink sm:text-xl">
            AN ORGANIC WAY TO HEALTHY LIVING
          </p>
          <div className="mt-9">
            <ButtonLink to="/about">Learn More</ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] pb-10 pl-6 lg:pb-12">
          <span aria-hidden="true" className="absolute -right-2 top-4 h-28 w-28 rounded-full bg-brand-peach sm:h-36 sm:w-36" />
          <span aria-hidden="true" className="absolute -top-2 left-10 h-16 w-16 rounded-full bg-brand-blue/70" />
          <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-white shadow-float">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              src={heroVideo}
              poster={heroBg}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              tabIndex={-1}
            />
          </div>
          <button
            type="button"
            onClick={toggleVideo}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-float transition-[background-color,transform] duration-150 hover:bg-sand active:scale-95 lg:right-2"
            aria-label={playing ? "Pause background video" : "Play background video"}
          >
            {playing ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="ml-0.5 h-5 w-5" />}
          </button>
          <img
            src={freshMushrooms}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-28 w-28 rounded-full border-[6px] border-white object-cover shadow-float sm:h-36 sm:w-36"
          />
          <img
            src={mushroomSpawns}
            alt=""
            aria-hidden="true"
            className="absolute -right-1 bottom-8 h-20 w-20 rounded-full border-[5px] border-white object-cover shadow-float sm:h-24 sm:w-24"
          />
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="panel bg-white px-5 pb-14 pt-16 text-center shadow-card sm:px-10">
          <SectionHeading>Organic Way to Healthy Living</SectionHeading>
          <div className="mt-24 grid gap-x-8 gap-y-24 md:grid-cols-3">
            {products.map((p, i) => (
              <article
                key={p.title}
                className={`relative rounded-card bg-cream px-6 pb-8 pt-28 ${i === 1 ? "md:mt-8" : ""}`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute -top-16 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full border-[6px] border-white object-cover shadow-float"
                />
                <h3 className="font-heading text-2xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-3">{p.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-14">
            <ButtonLink to="/shop">Full Products</ButtonLink>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="on-deep mx-auto mt-20 max-w-7xl px-4 sm:px-6">
        <div className="panel grid gap-10 bg-brand-blue-deep px-6 py-14 text-white sm:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight !text-white">
              Our Story
            </h2>
            <h3 className="font-heading mt-2 text-xl font-medium !text-white/90">Mushroom couple</h3>
            <div className="relative mt-8">
              <span aria-hidden="true" className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-brand-peach" />
              <img
                src={foundersImg}
                alt="Coonfresh founders Shije Thankachan and T.J. Thankachan"
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-card border-[6px] border-white object-cover shadow-float"
              />
            </div>
          </div>

          <div className="max-w-[68ch] text-lg leading-relaxed">
            <p>
              It started almost by accident. We had just moved to a quiet
              village near the Kochi–Alappuzha border, and with T.J. at work
              and the kids at school, the days got long. Both our families came
              from agricultural backgrounds, so we decided to try something
              productive — growing oyster mushrooms in the 50 square feet of
              space on our balcony. Fifty beds, a few thousand rupees, and a
              lot of patience — that was the whole operation.
            </p>
            <p className="mt-5">
              It worked, and that gave us the confidence to go further — we
              invested around a lakh into a proper 600-bed farm. Then came our
              first real setback: contamination from poor-quality spawn wiped
              out the entire crop. It was disheartening enough that we nearly
              gave up on mushrooms altogether. Instead, we sat down and worked
              out exactly what had gone wrong — too much moisture, and spawn we
              couldn't fully trust — so we built our own tissue culture lab to
              produce spawn in-house, tightened every step of quality control,
              and started again, bed by bed, until the whole farm was running
              clean.
            </p>
            <p className="mt-5">
              That persistence is what built the Coonfresh you see today — a
              climate-controlled farm with room for over 8,000 mushroom beds,
              producing close to 12 tonnes of fresh oyster mushrooms a year, and
              training other farmers to do the same along the way.
            </p>
            <h3 className="font-heading mt-12 border-t border-white/25 pt-10 text-3xl font-semibold !text-white">
              Room for Mush'room'
            </h3>
            <p className="mt-4">
              Coonfresh believes in popularizing the cultivation of mushroom and works
              with a vision and mission to create a room for mushroom at every house.
              Mushroom is tightly packed with Vitamins and proteins and is a healthy
              food which can also be treated as a vitamin and protein supplement.
            </p>
            <p className="mt-5">
              Coonfresh produces and sells fresh mushroom cultivated at highly hygienic
              conditions which make it the most ideal food for all.
            </p>
            <div className="mt-10">
              <ButtonLink href="https://wa.me/919895395021" umami="WhatsApp click">
                Order Now
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Coonvita */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-md">
          <span aria-hidden="true" className="absolute inset-4 rounded-full bg-sand" />
          <span aria-hidden="true" className="absolute -right-2 top-6 h-20 w-20 rounded-full bg-brand-peach" />
          <img
            src={coonvitaImg}
            alt="Coonfresh Coonvita mushroom nutrition drink"
            loading="lazy"
            width={669}
            height={830}
            className="relative mx-auto max-h-[26rem] w-auto drop-shadow-[0_24px_28px_rgb(138_90_53/0.35)]"
          />
        </div>
        <div>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight text-ink">
            Coonfresh Coonvita
          </h2>
          <p className="mt-2 text-sm font-bold tracking-[0.12em] text-brand-blue-deep">
            MUSHROOM NUTRI HEALTH DRINK
          </p>
          <p className="mt-6 text-lg">
            Coonfresh Coonvita is a mushroom based nutrition drink mixture in the
            form of powder to fill the day to day needs of Vitamin D in our body.
            It is made by using UV application and dehydrated drying process using
            Heat Pump Technology to retain and enhance the vitamin content in it.
          </p>
          <p className="mt-4 text-lg">
            It is also enriched with other ingredients like Malt extract
            powder, skimmed milk and coco powder, and flavored with Chocolate
            coffee – all in natural form in a specific formula. It offers a
            shelf life of six months in normal conditions.
          </p>
          <div className="mt-8">
            <ButtonLink to="/coonvita">Learn More</ButtonLink>
          </div>
        </div>
      </section>

      {/* What makes Coonfresh unique */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="panel bg-sand px-6 py-16 text-center sm:px-12">
          <SectionHeading>What Makes Coonfresh Unique</SectionHeading>
          <ul className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {uniquePoints.map((point) => (
              <li key={point.label} className="card flex flex-col items-center px-4 py-8">
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-cream">
                  <img src={point.icon} alt="" width={58} height={58} className="h-14 w-14" />
                </span>
                <h3 className="font-heading mt-5 text-xl font-semibold text-ink">{point.label}</h3>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-lg">
            Coonfresh believes in quality and uncompromising health standards. We
            produce mushrooms under top hygiene conditions to ensure the best
            results and we always maintain the highest food and safety standards.
          </p>
          <div className="mt-10">
            <ButtonLink to="/about">About Us</ButtonLink>
          </div>
        </div>
      </section>

      {/* Latest blogs */}
      <section className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6">
        <SectionHeading>Our Latest Blogs</SectionHeading>
        <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
          {latestBlogs.map((post) => (
            <article key={post.href} className="card flex flex-col overflow-hidden">
              <img
                src={post.image}
                alt=""
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-semibold text-brand-peach-deep">
                  {post.date} | {post.category}
                </p>
                <h3 className="font-heading mt-2 text-xl font-semibold leading-snug text-ink">{post.title}</h3>
                <p className="mt-3 flex-1">{post.excerpt}</p>
                <Link to={post.href} className="link-arrow mt-4 self-start" aria-label={`Read more: ${post.title}`}>
                  Read more <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <ButtonLink to="/blog">Read More</ButtonLink>
        </div>
      </section>

      {/* Come on in / hours */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="panel relative overflow-hidden bg-brand-peach px-6 py-16 text-center">
          <span aria-hidden="true" className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/35" />
          <span aria-hidden="true" className="absolute -bottom-14 -right-8 h-48 w-48 rounded-full bg-brand-blue/30" />
          <div className="relative">
            <h2 className="font-heading text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold text-ink">Come On In!</h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <div className="card w-full max-w-xs px-8 py-5">
                <p className="font-heading text-lg font-semibold text-ink">Weekdays</p>
                <p className="mt-1 tabular-nums">09 AM – 06 PM</p>
              </div>
              <div className="card w-full max-w-xs px-8 py-5">
                <p className="font-heading text-lg font-semibold text-ink">Weekends</p>
                <p className="mt-1 tabular-nums">09 AM – 02 PM</p>
              </div>
            </div>
            <div className="mt-10">
              <a
                data-umami-event="WhatsApp click"
                href="https://wa.me/919895395021"
                target="_blank"
                rel="noreferrer"
                className="btn bg-ink text-white shadow-float hover:bg-black"
              >
                Place Your Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

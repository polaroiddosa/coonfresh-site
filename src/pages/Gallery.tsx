import ImageStack, { type ImageGroup } from "../components/ImageStack";
import launchEvent1 from "../assets/images/coonvita/coonfresh-coonvita-launch-event-1.jpg";
import launchEvent2 from "../assets/images/coonvita/coonfresh-coonvita-launch-event-2.jpg";
import launchEvent3 from "../assets/images/coonvita/coonfresh-coonvita-launch-event-3.jpg";
import manoramaSeminar1 from "../assets/images/gallery/manorama-seminar/photo-1.jpeg";
import manoramaSeminar2 from "../assets/images/gallery/manorama-seminar/photo-2.jpeg";
import manoramaSeminar3 from "../assets/images/gallery/manorama-seminar/photo-3.jpeg";
import telanganaTour1 from "../assets/images/gallery/telangana-university-study-tour/photo-1.jpeg";
import liveMushroom1 from "../assets/images/gallery/live-mushrooms-from-our-farm/photo-1.jpeg";
import liveMushroom2 from "../assets/images/gallery/live-mushrooms-from-our-farm/photo-2.jpeg";
import liveMushroom3 from "../assets/images/gallery/live-mushrooms-from-our-farm/photo-3.jpeg";
import liveMushroom4 from "../assets/images/gallery/live-mushrooms-from-our-farm/photo-4.jpeg";
import liveMushroom5 from "../assets/images/gallery/live-mushrooms-from-our-farm/photo-5.jpeg";
import liveMushroom6 from "../assets/images/gallery/live-mushrooms-from-our-farm/photo-6.jpeg";
import manageExhibition1 from "../assets/images/gallery/manage-exhibition-hyderabad/photo-1.jpeg";
import pelletMedium1 from "../assets/images/gallery/mushroom-on-pellet-medium/photo-1.jpeg";
import pelletMedium2 from "../assets/images/gallery/mushroom-on-pellet-medium/photo-2.jpeg";
import startupPedia1 from "../assets/images/gallery/startup-pedia-feature/shije-with-coonvita-products.jpg";
import startupPedia2 from "../assets/images/gallery/startup-pedia-feature/shije-harvesting-mushrooms.jpg";
import { PageHero } from "../components/ui";

// Add a new group here (title + 3-5 images) for each new set of photos —
// drop the image files under src/assets/images/gallery/<group>/ and import
// them the same way as the groups below.
const groups: ImageGroup[] = [
  {
    title: "Coonvita Launch Event",
    images: [launchEvent1, launchEvent2, launchEvent3],
  },
  {
    title: "Shije and Thankachan taking class at a seminar organised by Malayalam Manorama, Kottayam",
    images: [manoramaSeminar1, manoramaSeminar2, manoramaSeminar3],
  },
  {
    title: "IT Professor Ms Sudha from Telangana University on a study tour at Coonfresh",
    images: [telanganaTour1],
  },
  {
    title: "Live mushrooms from our farm",
    images: [
      liveMushroom1,
      liveMushroom2,
      liveMushroom3,
      liveMushroom4,
      liveMushroom5,
      liveMushroom6,
    ],
  },
  {
    title:
      "Coonfresh Team at an Exhibition organised by MANAGE, Hyderabad where COONVITA was recognised as one among the top 25 Products in India 2024",
    images: [manageExhibition1],
  },
  {
    title: "Mushroom produced using pellet as medium",
    images: [pelletMedium1, pelletMedium2],
  },
  {
    title: "Shije Thankachan at Coonfresh — as featured in Startup Pedia",
    images: [startupPedia1, startupPedia2],
  },
];

export default function Gallery() {
  return (
    <div>
      <PageHero title="Gallery">
        <p className="mx-auto mt-4 max-w-xl text-lg">Click a photo to see the full set.</p>
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {groups.map((group) => (
          <ImageStack key={group.title} group={group} />
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import { Lightbox } from "./ui";

export interface ImageGroup {
  title: string;
  images: string[];
}

export default function ImageStack({ group }: { group: ImageGroup }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const count = group.images.length;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
        className="group card relative block aspect-[4/3] w-full overflow-hidden text-left transition-transform duration-150 active:scale-[0.99]"
      >
        <img
          src={group.images[0]}
          alt={group.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {count > 1 && (
          <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-sm font-bold text-ink shadow-card">
            +{count - 1} more
          </span>
        )}
        <span className="absolute inset-x-0 bottom-0 bg-dark/80 p-4">
          <span className="font-heading text-base font-semibold leading-snug text-white">{group.title}</span>
        </span>
      </button>

      {open && (
        <Lightbox
          images={group.images.map((src, i) => ({ src, alt: `${group.title} ${i + 1} of ${count}` }))}
          index={index}
          onIndexChange={setIndex}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

// Hook imports
import { useState } from "react";

// Data imports
import { galleryButtons, galleryImages } from "../data/gallery";

// Component imports
import GalleryButton from "./GalleryButton";
import { getCldImageUrl } from "astro-cloudinary/helpers";

galleryImages.forEach((el) => {
  el.id = getCldImageUrl({
    src: el.id,
    crop: {
      height: 250,
      width: 250,
      type: "auto",
      source: true,
    },
  });
});

export default function GalleryFilter() {
  const [filter, setFilter] = useState("all");

  const filterImages = galleryImages.filter((el) =>
    filter === "all" ? true : el.colors.includes(filter)
  );

  return (
    <div className="grid gap-8">
      {/* Button Group */}
      <div className="flex flex-wrap justify-center gap-4">
        {galleryButtons.map((el) => (
          <GalleryButton
            aria={el.aria}
            key={el.id}
            buttonText={el.id}
            styles={`${el.styles.join(" ")} ${filter === el.id ? el.active.join(" ") : ""}`}
            onClick={() => setFilter(el.id)}
            isSelected={filter === el.id ? true : false}
          />
        ))}
      </div>
      {/* Images */}
      <div className="grid grid-cols-auto place-items-center gap-x-4 gap-y-8 p-8 md:p-12 lg:p-16">
        {filterImages.map((el) => (
          <img
            className="rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 dark:shadow-neutral-700"
            key={el.id}
            src={el.id}
            height={250}
            width={250}
            alt={el.alt}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

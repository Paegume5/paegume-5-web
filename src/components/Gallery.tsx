"use client";
import { galleryImages, lightboxSlides } from "@constants/constants";
import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="w-full">
      <div className="grid h-full grid-cols-3 gap-4 px-32 py-12 lg:px-16 md:px-8 md:grid-cols-2">
        {galleryImages.map((image, index) => {
          return (
            <div
              key={index}
              className="relative w-full aspect-[4_/_3] shadow-card select-none transition-all duration-300 ease-in-out cursor-pointer group hover:transform hover:scale-105"
              onClick={() => {
                setOpen(true);
                setImageIndex(index);
              }}
            >
              <Image src={image} alt="Gallery Image" fill />
              <div className="absolute w-full h-full bg-black/0 transition-all duration-300 group-hover:bg-black/70"></div>
            </div>
          );
        })}
      </div>
      <Lightbox
        open={open}
        index={imageIndex}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        slides={lightboxSlides}
      />
    </div>
  );
};

export default Gallery;

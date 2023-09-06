"use client";
import { galleryImages, slides } from "@constants/constants";
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
      <div className="">
        <div className="grid flex-wrap h-full grid-cols-3 gap-4 px-32 py-12 lg:px-16 md:px-8 md:grid-cols-2">
          {galleryImages.map((image, index) => {
            return (
              <div
                key={index}
                className="relative w-full aspect-[4_/_3] transition-all duration-300 ease-in-out cursor-pointer hover:opacity-90 hover:transform hover:scale-105"
                onClick={() => {
                  setOpen(true);
                  setImageIndex(index);
                }}
              >
                <Image src={image} alt="Gallery Image" fill />
              </div>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        index={imageIndex}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        slides={slides}
      />
    </div>
  );
};

export default Gallery;

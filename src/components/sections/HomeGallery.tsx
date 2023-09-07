import { homeGallery } from "@constants/constants";
import Image from "next/image";
import "@styles/homeGallery.css";
import { useState } from "react";
import { toggleBodyScroll } from "@utils/utils";

const HomeGallery = () => {
  const [isImageFull, setIsImageFull] = useState(false);
  const [currentFullImage, setCurrentFullImage] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(
    homeGallery.map(() => false)
  );

  const FullScreenImage = (
    <>
      <button
        className="hidden sm:block fixed z-30 text-2xl border-2 rounded-full top-4 right-4"
        onClick={() => {
          setIsImageFull(false);
          toggleBodyScroll("show")
        }}
      >
        <Image src="/svg/icons/close.svg" width={32} height={32} alt="" />
      </button>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-20 cursor-zoom-out bg-black/90"
        onClick={() => {
          setIsImageFull(false);
          toggleBodyScroll("show")
        }}
      ></div>
      <div className="fixed top-[50%] left-[50%] z-30 transform translate-x-[-50%] translate-y-[-50%]">
        <div className="relative bg-blue-500 w-[70vw] sm:w-screen aspect-video p-8">
          <Image src={currentFullImage} alt="Gallery Image" fill />
        </div>
      </div>
    </>
  );

  return (
    <div className="flex flex-col justify-center gap-1 px-8 mb-16 overflow-hidden md:px-4">
      <a
        className="flex items-center self-end gap-1 text-color-2 group hover:text-color-2/75"
        href="/gallery"
      >
        <span className="">View more</span>
        <span className="invisible group-hover:visible">&gt;</span>
      </a>
      <div
        id="scrollbar"
        className="grid items-center grid-flow-col grid-rows-1 gap-6 p-2 pb-4 overflow-x-scroll overflow-y-hidden scroll-smooth"
      >
        {homeGallery.map((image, index) => {
          return (
            <div
              className="relative w-80 aspect-[4_/_3] shadow cursor-zoom-in select-none hover:transform hover:scale-105 transition-all duration-300"
              key={index}
              onClick={() => {
                setIsImageFull(true);
                setCurrentFullImage(`/img/gallery/${image}`);
                toggleBodyScroll("hide")
              }}
            >
              <Image
                src={`/img/gallery/${image}`}
                alt="Gallery Image"
                fill
                onLoad={() => {
                  let arr = [...isImageLoaded];
                  arr[index] = true;
                  setIsImageLoaded(arr);
                  console.log(image, "loaded")
                }}
              />
              {isImageLoaded[index] || (
                <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-white bg-black/60">
                  <div className="animate-pulse">Loading ...</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {isImageFull && FullScreenImage}
    </div>
  );
};

export default HomeGallery;

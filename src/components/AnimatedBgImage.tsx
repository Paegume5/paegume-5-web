import Image from "next/image";
import { useEffect, useState } from "react";
import "@styles/animatedBgImage.css";

interface AnimatedBgImageProps {
  images: Array<string>;
  slideInterval?: number;
}

const AnimatedBgImage = ({
  images,
  slideInterval = 4000,
}: AnimatedBgImageProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex == images.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <Image
          src={image}
          alt=""
          fill
          key={index}
          objectFit="cover"
          style={{
            opacity: index == currentImageIndex ? "1" : "0",
            // zIndex: index == currentImageIndex ? "1" : "0",
            visibility: index == currentImageIndex ? "visible" : "hidden",
            animation:
              index == currentImageIndex
                ? `zoomOut ${slideInterval + 900}ms`
                : "",
          }}
          className={`transition-all duration-[0.8s] ease-in-out`}
        />
      ))}
    </div>
  );
};

export default AnimatedBgImage;

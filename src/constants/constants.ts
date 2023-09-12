export const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Our Goals",
    to: "/goals",
  },
  {
    name: "Gallery",
    to: "/gallery",
  },
  {
    name: "Join us",
    to: "/register",
  },
  {
    name: "About Us",
    to: "/about-us",
  },
];

export const navHeight = 76;

export const headerImages = [
  "/img/gallery/g2.jpg",
  "/img/gallery/g1.jpg",
  "/img/gallery/g3.jpg",
  "/img/gallery/g4.jpg",
  "/img/gallery/g5.jpg",
];

export const homeGalleryImages = [
  "/img/gallery/g1.jpg",
  "/img/gallery/g2.jpg",
  "/img/gallery/g3.jpg",
  "/img/gallery/g4.jpg",
  "/img/gallery/g5.jpg",
];

export const galleryImages = [
  "/img/gallery/g1.jpg",
  "/img/gallery/g2.jpg",
  "/img/gallery/g3.jpg",
  "/img/gallery/g4.jpg",
  "/img/gallery/g5.jpg",
  "/img/gallery/g6.jpg",
  "/img/gallery/g7.jpg",
  // "/img/gallery/g8.jpg",
  // "/img/gallery/g9.jpg",
  // "/img/gallery/g10.jpg",
  // "/img/gallery/g11.jpg",
  // "/img/gallery/g12.jpg",
  // "/img/gallery/g13.jpg",
  // "/img/gallery/g14.jpg",
];

export const lightboxSlides = galleryImages.map((item) => ({
  src: item,
  width: 3840,
  height: 2560,
  srcSet: [
    { src: item, width: 320, height: 213 },
    { src: item, width: 640, height: 426 },
    { src: item, width: 1200, height: 800 },
    { src: item, width: 2048, height: 1365 },
    { src: item, width: 3840, height: 2560 },
  ],
}));

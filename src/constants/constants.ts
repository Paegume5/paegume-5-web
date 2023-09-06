import { Metadata } from "next";

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

export const homeGallery = [
  "g1.jpg",
  "g2.jpg",
  "g3.jpg",
  "g4.jpg",
  "g5.jpg",
  "g6.jpg",
  "g7.jpg",
];

export const navHeight = 76;

export function topMargin(height: number, add?: number) {
  let margin = height + (add ?? 0);

  return `${margin}px`;
}

export const galleryImages = [
  "/img/gallery/g1.jpg",
  "/img/gallery/g2.jpg",
  "/img/gallery/g3.jpg",
  "/img/gallery/g4.jpg",
  "/img/gallery/g5.jpg",
  "/img/gallery/g6.jpg",
  "/img/gallery/g7.jpg",
];

export const slides = galleryImages.map((item) => ({
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

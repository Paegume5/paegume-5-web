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
    name: "Projects",
    to: "/projects",
  },
  {
    name: "Gallery",
    to: "/gallery",
  },
  {
    name: "Donate",
    to: "/donate",
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

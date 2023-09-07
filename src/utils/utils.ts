export function toggleBodyScroll(command: "hide" | "show") {
  command === "hide"
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");
}

export function makeTopMargin(height: number, add?: number) {
  let margin = height + (add ?? 0);

  return `${margin}px`;
}

export type PaperType =
  | "UNBLEACHED ORGANIC HEMP"
  | "UNBLEACHED CLASSIC"
  | "WHITE"
  | "ALFALFA"
  | "BAMBOO"
  | "VERGE"
  | "FLAVOURED"
  | "COLOURED";

export interface Product {
  id: string;
  name: string;
  slug: string; // URL-friendly name
  categorySlug: string; // e.g., "rolling-paper"
  description: string;
  longDescription: string;
  availablePaperTypes: PaperType[];
  image: string; // Placeholder image URL
  features?: string[];
}

export const products: Product[] = [
  {
    id: "ks-slim-filters",
    name: "KING SIZE SLIM + FILTERS",
    slug: "king-size-slim-plus-filters",
    categorySlug: "rolling-paper",
    description:
      "Our popular King Size Slim papers conveniently packaged with high-quality filters.",
    longDescription:
      "Experience the ultimate convenience with our King Size Slim papers bundled with premium filters. This combo ensures a smooth draw and prevents unwanted particles, providing a cleaner and more enjoyable smoking experience. Perfect for those who value both quality and practicality in their rolling essentials.",
    availablePaperTypes: ["UNBLEACHED CLASSIC", "WHITE", "FLAVOURED"],
    image: "/ryo/kss-filters.png",
    features: ["Integrated Filters", "Easy to Roll", "Smooth Draw"],
  },
  {
    id: "one-quarter-filters",
    name: "1 ¼ + FILTERS",
    slug: "one-quarter-plus-filters",
    categorySlug: "rolling-paper",
    description:
      "Convenient 1 ¼ papers with included filters for a complete rolling solution.",
    longDescription:
      "Simplify your rolling process with our 1 ¼ papers, complete with high-quality filters. This all-in-one pack ensures you have everything you need for a perfect roll, providing a clean and enjoyable draw every time. Ideal for smokers who value convenience without compromising on quality.",
    availablePaperTypes: ["WHITE", "BAMBOO", "FLAVOURED"],
    image: "/ryo/1-14.png",
    features: ["All-in-One Pack", "Clean Draw", "Effortless Rolling"],
  },
  {
    id: "block-200-king-size",
    name: "Block King Size",
    slug: "block-200-king-size",
    categorySlug: "rolling-paper",
    description:
      "A block of 100/200/500 King Size papers, offering great value and a consistent experience.",
    longDescription:
      "Our Block of King Size provides a generous supply of our popular papers in a convenient block format. Ideal for regular smokers, this pack ensures you always have a high-quality, paper ready for your next roll. Enjoy consistency and value with every sheet.",
    availablePaperTypes: ["UNBLEACHED ORGANIC HEMP", "UNBLEACHED CLASSIC"],
    image: "/ryo/kss.png",
    features: ["Bulk Pack", "Economical", "Consistent Slim"],
  },
  {
    id: "block-1-1-4",
    name: "Block 1 1/4",
    slug: "block-1-1-4",
    categorySlug: "rolling-paper",
    description:
      "A large block of classic 1 ¼ papers, perfect for heavy users.",
    longDescription:
      "For the dedicated enthusiast, our Block of 100/300/500 1 ¼ delivers a substantial quantity of our beloved classic papers. This bulk pack is designed for convenience and ensures you're always stocked with the perfect everyday rolling paper, offering superior quality and value.",
    availablePaperTypes: ["WHITE", "ALFALFA", "BAMBOO"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Large Pack", "Great Value", "Reliable Classic"],
  },
  {
    id: "rolled-cones",
    name: "Rolled Cones",
    slug: "rolled-cones",
    categorySlug: "rolling-paper",
    description:
      "Pre-rolled cones for those who prefer convenience without sacrificing quality.",
    longDescription:
      "Our Rolled Cones are the perfect solution for smokers who want the ease of a pre-rolled option without compromising on quality. Made from our premium rolling paper, these cones are ready to fill, ensuring a hassle-free experience. Enjoy a consistent burn and a smooth draw with every cone, ideal for on-the-go use or social gatherings.",
    availablePaperTypes: ["VERGE", "FLAVOURED", "COLOURED"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Mega Pack", "Unbeatable Value", "Long Lasting Supply"],
  },
  {
    id: "custom-size",
    name: "CUSTOM SIZE",
    slug: "custom-size",
    categorySlug: "rolling-paper",
    description:
      "Connect with us directly for your custom needs. Your unique dimensions, our quality.",
    longDescription:
      "Anything can be customized. Our Custom Size option is designed for those who require a specific dimension for their unique rolling needs. Whether you need extra-long, extra-wide, or any other custom size, we can accommodate your request. Crafted with the same quality and care as our standard products, these papers ensure a perfect roll every time, tailored to your specifications.",
    availablePaperTypes: [
      "UNBLEACHED ORGANIC HEMP",
      "UNBLEACHED CLASSIC",
      "WHITE",
    ],
    image: "/ryo/images/king-size-slim.png",
    features: ["Extra Long", "Large Rolls", "Creative Freedom"],
  },
];

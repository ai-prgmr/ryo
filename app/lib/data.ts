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
    id: "ks-slim",
    name: "KING SIZE SLIM",
    slug: "king-size-slim",
    categorySlug: "rolling-paper",
    description:
      "The quintessential choice for a longer, thinner roll. Perfect for a refined smoking experience.",
    longDescription:
      "Crafted for connoisseurs, our King Size Slim rolling papers offer an extended burn and a sleek profile. Designed for those who appreciate a longer, unhurried session, these papers ensure an even burn and minimal paper taste, allowing the natural flavor of your blend to shine through. Available in a variety of premium paper types to suit your preference.",
    availablePaperTypes: ["UNBLEACHED CLASSIC", "WHITE", "FLAVOURED"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Ultra Thin", "Slow Burn", "Minimal Ash"],
  },
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
    image: "/ryo/images/king-size-slim.png",
    features: ["Integrated Filters", "Easy to Roll", "Smooth Draw"],
  },
  {
    id: "ks-mini-slim",
    name: "KING SIZE MINI SLIM",
    slug: "king-size-mini-slim",
    categorySlug: "rolling-paper",
    description:
      "A shorter, more compact King Size option, ideal for quick sessions.",
    longDescription:
      "The King Size Mini Slim offers the quality of a King Size paper in a more discreet and faster-burning format. Its reduced length makes it perfect for those moments when you desire a quick yet satisfying smoke without committing to a full-sized roll. Compact and convenient, without compromising on the premium feel.",
    availablePaperTypes: ["WHITE", "ALFALFA", "BAMBOO"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Compact Size", "Quick Burn", "Portable"],
  },
  {
    id: "ks-wide",
    name: "KING SIZE WIDE",
    slug: "king-size-wide",
    categorySlug: "rolling-paper",
    description:
      "For those who prefer a wider roll, offering more space for your blend.",
    longDescription:
      "Our King Size Wide papers are designed for smokers who enjoy a more substantial roll. The increased width provides ample space for packing your preferred blend, allowing for a fuller and richer smoking experience. Crafted with care, these papers ensure a consistent burn and superior handling.",
    availablePaperTypes: ["UNBLEACHED CLASSIC", "VERGE", "COLOURED"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Extra Width", "Robust Roll", "Enhanced Flavor"],
  },
  {
    id: "one-quarter",
    name: "1 ¼",
    slug: "one-quarter",
    categorySlug: "rolling-paper",
    description: "The classic 1 ¼ size, a popular choice for everyday rolling.",
    longDescription:
      "The timeless 1 ¼ size remains a staple for many. Our papers in this classic dimension offer a perfect balance of length and width, making them incredibly versatile and easy to roll. Experience a clean burn and a smooth draw with every use, a testament to our commitment to quality.",
    availablePaperTypes: ["UNBLEACHED ORGANIC HEMP", "WHITE", "ALFALFA"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Classic Size", "Versatile", "Even Burn"],
  },
  {
    id: "one-half",
    name: "1 ½",
    slug: "one-half",
    categorySlug: "rolling-paper",
    description:
      "A wider 1 ½ size, allowing for a thicker, more substantial roll.",
    longDescription:
      "For those who appreciate a thicker roll, our 1 ½ papers provide the extra width you need. This size is ideal for a more generous packing of your blend, delivering a richer and more prolonged smoking experience. Enjoy the superior quality and smooth feel of our carefully crafted papers.",
    availablePaperTypes: ["UNBLEACHED CLASSIC", "VERGE", "FLAVOURED"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Thicker Roll", "Generous Capacity", "Enhanced Aroma"],
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
    image: "/ryo/images/king-size-slim.png",
    features: ["All-in-One Pack", "Clean Draw", "Effortless Rolling"],
  },
  {
    id: "sw-regular",
    name: "SW – REGULAR",
    slug: "sw-regular",
    categorySlug: "rolling-paper",
    description:
      "Standard width regular papers, a timeless choice for everyday use.",
    longDescription:
      "Our SW – Regular papers offer a classic and reliable choice for daily rolling. Designed for consistency and ease of use, these papers provide an even burn and a neutral taste, allowing the true essence of your smoking material to come through. A dependable staple for any smoker.",
    availablePaperTypes: ["UNBLEACHED CLASSIC", "WHITE", "COLOURED"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Standard Size", "Reliable Performance", "Neutral Taste"],
  },
  {
    id: "sw-cut-corner",
    name: "SW CUT CORNER",
    slug: "sw-cut-corner",
    categorySlug: "rolling-paper",
    description:
      "Regular size papers with a convenient cut corner for easier rolling.",
    longDescription:
      "The SW Cut Corner papers are thoughtfully designed with a clipped corner, making it significantly easier to start your roll. This subtle innovation enhances the rolling experience, ensuring a smoother and quicker process without compromising on the quality or burn of the paper. Perfect for those who appreciate small details that make a big difference.",
    availablePaperTypes: ["UNBLEACHED ORGANIC HEMP", "ALFALFA", "BAMBOO"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Easy Start", "Smooth Rolling", "Precision Cut"],
  },
  {
    id: "rolls-37mm",
    name: "Rolls 37mm",
    slug: "rolls-37mm",
    categorySlug: "rolling-paper",
    description:
      "Continuous rolls, 37mm wide, allowing you to customize the length of your paper.",
    longDescription:
      "Unleash your creativity with our 37mm wide continuous rolls. This format gives you the freedom to tear off exactly the length of paper you desire, offering unparalleled flexibility for custom-sized rolls. Experience the premium quality of our papers in a format that adapts to your unique preferences.",
    availablePaperTypes: ["UNBLEACHED CLASSIC", "VERGE", "COLOURED"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Custom Length", "Versatile", "Continuous Paper"],
  },
  {
    id: "sw-dw",
    name: "SW DW",
    slug: "sw-dw",
    categorySlug: "rolling-paper",
    description:
      "Special double-width papers for a truly substantial and robust roll.",
    longDescription:
      "Our SW DW (Double Width) papers are engineered for the ultimate rolling experience, providing significantly more surface area for your blend. This substantial paper allows for larger, more robust rolls, perfect for extended sessions or sharing. Crafted for durability and a smooth, even burn.",
    availablePaperTypes: ["WHITE", "ALFALFA", "BAMBOO"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Double Width", "Large Capacity", "Robust Build"],
  },
  {
    id: "rolls-44mm",
    name: "Rolls 44mm",
    slug: "rolls-44mm",
    categorySlug: "rolling-paper",
    description:
      "Wider continuous rolls at 44mm, for custom-length papers with more capacity.",
    longDescription:
      "Step up your rolling game with our 44mm wide continuous rolls. Offering even more width than standard rolls, these allow you to create custom-length papers that can accommodate larger quantities of your favorite blend. Enjoy the freedom to roll exactly how you want, every time.",
    availablePaperTypes: ["UNBLEACHED ORGANIC HEMP", "FLAVOURED", "COLOURED"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Wider Roll", "Custom Length", "Enhanced Volume"],
  },
  {
    id: "rolls-54mm",
    name: "Rolls 54mm",
    slug: "rolls-54mm",
    categorySlug: "rolling-paper",
    description:
      "The widest continuous rolls at 54mm, for maximum customization and volume.",
    longDescription:
      "For the ultimate in rolling freedom, our 54mm wide continuous rolls are unmatched. This super-wide format allows for the creation of truly massive, custom-length papers, perfect for group sessions or when you desire the largest possible roll. Experience premium quality and limitless possibilities.",
    availablePaperTypes: ["UNBLEACHED CLASSIC", "WHITE", "VERGE"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Maximum Width", "Ultimate Customization", "High Capacity"],
  },
  {
    id: "block-200-slim",
    name: "Block 200 Slim",
    slug: "block-200-slim",
    categorySlug: "rolling-paper",
    description:
      "A block of 200 slim papers, offering great value and a consistent slim experience.",
    longDescription:
      "Our Block 200 Slim provides a generous supply of our popular slim papers in a convenient block format. Ideal for regular smokers, this pack ensures you always have a high-quality, slim paper ready for your next roll. Enjoy consistency and value with every sheet.",
    availablePaperTypes: ["UNBLEACHED ORGANIC HEMP", "UNBLEACHED CLASSIC"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Bulk Pack", "Economical", "Consistent Slim"],
  },
  {
    id: "block-300-1-1-4",
    name: "Block 300 1 1/4",
    slug: "block-300-1-1-4",
    categorySlug: "rolling-paper",
    description:
      "A large block of 300 classic 1 ¼ papers, perfect for heavy users.",
    longDescription:
      "For the dedicated enthusiast, our Block 300 1 ¼ delivers a substantial quantity of our beloved classic papers. This bulk pack is designed for convenience and ensures you're always stocked with the perfect everyday rolling paper, offering superior quality and value.",
    availablePaperTypes: ["WHITE", "ALFALFA", "BAMBOO"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Large Pack", "Great Value", "Reliable Classic"],
  },
  {
    id: "block-500-1-1-4",
    name: "Block 500 1 1/4",
    slug: "block-500-1-1-4",
    categorySlug: "rolling-paper",
    description:
      "The ultimate bulk pack: 500 classic 1 ¼ papers for unparalleled value.",
    longDescription:
      "Our Block 500 1 ¼ is the pinnacle of value, offering an enormous supply of our classic 1 ¼ rolling papers. This ultimate bulk pack is ideal for those who demand an ample stock of high-quality papers, ensuring you're prepared for any rolling occasion with superior product at hand.",
    availablePaperTypes: ["VERGE", "FLAVOURED", "COLOURED"],
    image: "/ryo/images/king-size-slim.png",
    features: ["Mega Pack", "Unbeatable Value", "Long Lasting Supply"],
  },
  {
    id: "double-size",
    name: "DOUBLE SIZE",
    slug: "double-size",
    categorySlug: "rolling-paper",
    description: "Extra-long papers designed for creating large, custom rolls.",
    longDescription:
      "Our DOUBLE SIZE papers provide an exceptional length for crafting truly substantial and unique rolls. This extended format allows for greater creative freedom in rolling, perfect for those who enjoy a longer, more elaborate smoking experience. Experience the premium quality of our papers in an impressive, oversized format.",
    availablePaperTypes: [
      "UNBLEACHED ORGANIC HEMP",
      "UNBLEACHED CLASSIC",
      "WHITE",
    ],
    image: "/ryo/images/king-size-slim.png",
    features: ["Extra Long", "Large Rolls", "Creative Freedom"],
  },
];

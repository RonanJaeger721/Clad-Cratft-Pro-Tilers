export const business = "CLAD & CRAFT PRO TILERS";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://clad-craft-pro-tilers.vercel.app";
export const whatsapp = (subject = "a tiling or cladding project") =>
  `https://wa.me/263772580824?text=${encodeURIComponent(`Hello Clad & Craft Pro Tilers, I would like to enquire about ${subject}.`)}`;
export const nav = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/services", "Services"],
  ["/projects", "Our Projects"],
  ["/pricing", "Pricing / Catalog"],
  ["/contact", "Contact"],
];
export const services = [
  [
    "Interior & Exterior Stone Cladding",
    "Natural texture. Architectural presence.",
    "Stone cladding brings depth to interior walls and exterior features. We pay attention to the layout, corners and junctions so the finish feels part of the architecture.",
    "fireplace-angle",
  ],
  [
    "Premium Wall Cladding",
    "Give your walls a new dimension.",
    "Carefully aligned wall finishes create a considered backdrop for everyday living, from quiet interior surfaces to expressive feature walls.",
    "hallway-front",
  ],
  [
    "Feature Walls & Fireplaces",
    "A focal point, beautifully resolved.",
    "Create a strong centrepiece with textured fireplace surrounds and feature walls, with careful detailing around openings and adjoining finishes.",
    "fireplace-front",
  ],
  [
    "Ceramic Floor Tiling",
    "Everyday spaces. Carefully finished.",
    "Ceramic tile fitting for practical residential and commercial floors, with attention to setting out, consistent joints and clean perimeter details.",
    "ceramic-progress",
  ],
  [
    "Porcelain Tile Installation",
    "A seamless sense of space.",
    "Porcelain floor installation for a modern, cohesive finish. Discuss tile size, substrate preparation and the intended use of your space with us.",
    "patio-wide",
  ],
  [
    "Staircase & Entrance Tiling",
    "A considered first impression.",
    "Tiled treads, risers, landings and entrances, carefully composed around the shape and dimensions of each staircase.",
    "curved-steps",
  ],
  [
    "Balcony Cladding",
    "Carry the finish outdoors.",
    "Cladding and tiled finishes for balconies and adjoining outdoor areas, with project-specific detailing discussed before installation.",
    "entrance-straight",
  ],
  [
    "Modern Architectural Finishes",
    "The difference is in the detail.",
    "Coordinated wall and floor treatments that connect materials, edges and transitions into a clear architectural language.",
    "hallway-side",
  ],
  [
    "Residential & Commercial Tiling",
    "Craft for the way a space is used.",
    "Tiling and cladding for homes and commercial projects. Share your plans, site requirements and finish preferences for a tailored quotation.",
    "pattern-entrance-a",
  ],
];
export const photos = [
  {
    id: "fireplace-angle",
    title: "Stone-clad outdoor fireplace",
    category: "Stone & cladding",
    group: "Outdoor fireplace & patio",
    status: "Finished detail",
    alt: "Grey stacked-stone fireplace with a tiled patio and timber ceiling",
  },
  {
    id: "patio-wide",
    title: "Patio, floor & stair composition",
    category: "Floors",
    group: "Outdoor fireplace & patio",
    status: "Finishing stage",
    alt: "Wide view of tiled patio steps leading to a stone-clad fireplace",
  },
  {
    id: "fireplace-front",
    title: "Texture, line & proportion",
    category: "Stone & cladding",
    group: "Outdoor fireplace & patio",
    status: "Finished detail",
    alt: "Front elevation of a grey stone-clad outdoor fireplace",
  },
  {
    id: "hallway-front",
    title: "Marble-effect hallway",
    category: "Walls & interiors",
    group: "Grey marble-effect hallway",
    status: "Tiling detail · surrounding works ongoing",
    alt: "Grey marble-effect wall and floor tiles in a narrow hallway",
  },
  {
    id: "hallway-side",
    title: "Continuous wall finishes",
    category: "Walls & interiors",
    group: "Grey marble-effect hallway",
    status: "Tiling detail · surrounding works ongoing",
    alt: "Side view showing alignment of marble-effect hallway wall tiles",
  },
  {
    id: "hallway-alternate",
    title: "A connected interior palette",
    category: "Walls & interiors",
    group: "Grey marble-effect hallway",
    status: "Tiling detail · surrounding works ongoing",
    alt: "Alternative view of grey marble-effect hallway floor and feature wall",
  },
  {
    id: "curved-steps",
    title: "Curved residential entrance",
    category: "Stairs & entrances",
    group: "Curved entrance tiling",
    status: "Finished tiling detail",
    alt: "Rounded tiled entrance steps photographed in warm evening light",
  },
  {
    id: "entrance-straight",
    title: "Clean lines at the entrance",
    category: "Stairs & entrances",
    group: "Straight entrance tiling",
    status: "Finished tiling detail",
    alt: "Light grey tiled steps and raised entrance along a residential facade",
  },
  {
    id: "pattern-entrance-a",
    title: "Stone-pattern entrance",
    category: "Stairs & entrances",
    group: "Patterned entrance tiling",
    status: "Finished tiling detail",
    alt: "Stone-pattern tiled porch with coordinated skirting and riser",
  },
  {
    id: "pattern-entrance-b",
    title: "Edges that complete the space",
    category: "Stairs & entrances",
    group: "Patterned entrance tiling",
    status: "Finished tiling detail",
    alt: "Second view of stone-pattern porch tiles around brick columns",
  },
  {
    id: "ceramic-progress",
    title: "Ceramic floor fitting",
    category: "Installation progress",
    group: "Ceramic floor installation",
    status: "Installation in progress",
    alt: "Installer working on a light-coloured ceramic tiled floor",
  },
];
export const prices = [
  {
    name: "Tile Cladding",
    price: "10.00",
    unit: "Service only",
    image: "fireplace-angle",
    detail:
      "Discuss the scope and pricing basis with us. No area unit is specified in the catalog.",
  },
  {
    name: "600 × 600 mm Ceramic Tile Fitting",
    price: "3.75",
    unit: "per square metre · fitting charge",
    image: "ceramic-progress",
    detail:
      "Ceramic tile installation. Share the floor area and site requirements for a detailed quote.",
  },
  {
    name: "600 × 600 mm Porcelain Floor Tile Fitting",
    price: "4.00",
    unit: "per square metre · fitting charge",
    image: "patio-wide",
    detail:
      "Porcelain floor tile installation. Tell us about your tiles, space and preferred finish.",
  },
];

// --- CONSTANTS ---
export const WHATSAPP_NUMBER = "919876543210";
export const EMAIL_ADDRESS = "sales@techmachinery.com";
import { Cog, LucideIcon } from "lucide-react";


export interface Specification {
  label: string;
  value: string;
}

export interface ProductType {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  "icon": string;
  description: string;
  longDescription: string;
  specifications: Specification[];
  features: string[];
}

export const machines: ProductType[] = [
  {
    "id": 1,
    "name": "Semi-Automatic Booklet Cover Packing Machine (78 mm)",
    "slug": "semi-automatic-booklet-cover-packing-machine-78-mm",
    "icon": "Cog",
    "tagline": "Precision Folding & Export-Grade Booklet Finishing",
    "description": "A robust semi-automatic machine engineered for folding and finishing rolling-paper booklets using only the booklet cover — no film or external packing material needed. Built with a reliable mechanical system for consistent alignment and clean folding.",
    "longDescription": "Designed for manufacturers seeking high-quality booklet finishing without consumables, this semi-automatic booklet cover packing machine operates entirely mechanically, offering exceptional reliability and minimal maintenance requirements. It supports standard 78 mm booklets and can be customized for various sizes. With precise folding, spine pressing, and adjustable alignment systems, the machine ensures export-grade finishing suitable for continuous production environments.",
    "specifications": [
      { "label": "Type", "value": "Semi-Automatic Booklet Cover Packing Machine" },
      { "label": "Application", "value": "Folding & finishing rolling paper booklets using the cover only" },
      { "label": "Booklet Size Support", "value": "78 mm standard, customizable for any size" },
      { "label": "Output Capacity", "value": "20–35 booklets/min (operator dependent)" },
      { "label": "Packing Material", "value": "None required — machine uses booklet cover only" },
      { "label": "Operating Mode", "value": "Manual feed + mechanical folding & pressing" },
      { "label": "Folding System", "value": "Precision mechanical folding unit with spine pressing" },
      { "label": "Alignment System", "value": "Adjustable guide rails for different booklet sizes" },
      { "label": "Power Requirement", "value": "240 V AC (motor only)" },
      { "label": "Controls", "value": "Fully mechanical — no electronics" },
      { "label": "Machine Body", "value": "Mild-steel fabrication with industrial enamel coating" },
      { "label": "Maintenance", "value": "Minimal — simple lubrication & daily cleaning" },
      { "label": "Special Features", "value": "Compact, zero consumables, stable export-grade finish" },
      { "label": "Price (Ex-Works India)", "value": "€ 7,000" },
      { "label": "Delivery Time", "value": "60–90 days from receipt of advance payment" },
      { "label": "Warranty", "value": "6 months on mechanical components" },
      { "label": "Payment Terms", "value": "50% advance / 50% before dispatch" },
      { "label": "Packing & Forwarding", "value": "At actuals" },
      { "label": "Offer Validity", "value": "15 days" }
    ],
    "features": [
      "Works without external packing material — uses the booklet cover only",
      "Precision mechanical folding & spine pressing",
      "Adjustable guide rails for alignment",
      "Fully mechanical control — no electronics for easier maintenance",
      "Compact design with zero consumables",
      "Export-grade finishing quality",
      "Customised tooling available for non-standard booklet sizes"
    ]
  },
  {
    "id": 2,
    "name": "Semi-Automatic Single Cone Making Machine",
    "slug": "semi-automatic-single-cone-making-machine",
    "icon": "Cog",
    "tagline": "Consistent Rolling for Premium Pre-Rolled Cones",
    "description": "A semi-automatic cone rolling machine engineered for consistent seam bonding, clean rolling, and stable cone shapes.",
    "longDescription": "Designed for brands targeting premium-quality cones, this machine supports multiple cone sizes, low maintenance, and controlled heating for perfect seams...",
    "specifications": [
      { "label": "Type", "value": "Semi-Automatic Single Cone Rolling Machine" },
      { "label": "Application", "value": "Production of pre-rolled paper cones" },
      { "label": "Output Capacity", "value": "300–700 cones/hour (operator dependent)" },
      { "label": "Cone Sizes Supported", "value": "70 mm / 84 mm / 98 mm / 109 mm" },
      { "label": "Tip Compatibility", "value": "Suitable for standard pre-rolled filter tips" },
      { "label": "Operating Mode", "value": "Manual feed + automatic rolling assist" },
      { "label": "Heating System", "value": "Controlled heating plate for smooth seam bonding" },
      { "label": "Power Requirement", "value": "240 V AC (single phase)" },
      { "label": "Controls", "value": "Mechanical + adjustable timing" },
      { "label": "Maintenance", "value": "Very low; quick daily cleaning" },
      { "label": "Price (Ex-Works India)", "value": "€ 5,100" },
      { "label": "Delivery Time", "value": "60–90 days" },
      { "label": "Warranty", "value": "6 months" },
      { "label": "Payment Terms", "value": "50% advance / 50% before dispatch" },
      { "label": "Offer Validity", "value": "15 days" }
    ],
    "features": [
      "Compact, low-maintenance design",
      "Stable rolling output",
      "Supports multiple cone sizes",
      "Automation upgrades available",
      "Fully load-tested before dispatch"
    ]
  },
  {
    "id": 3,
    "name": "Two-Bobbin Precision Interleaving Machine (78 mm)",
    "slug": "two-bobbin-precision-interleaving-machine-78-mm",
    "icon": "Cog",
    "tagline": "High-Accuracy Cutting & Interleaving for Rolling Papers",
    "description": "A precision machine designed for cutting, creasing, and interleaving ultra-thin 78 mm cigarette/rolling papers.",
    "longDescription": "This heavy-duty dual-bobbin interleaver is engineered for export-grade accuracy, stability, and low maintenance...",
    "specifications": [
      { "label": "Type", "value": "Two-Bobbin Cigarette Paper Interleaving Machine" },
      { "label": "Application", "value": "Sheet cutting, creasing & interleaving for 78 mm papers" },
      { "label": "Working Speed", "value": "24–60 bundles/min" },
      { "label": "Standard Sheet Count", "value": "32 sheets/booklet (customizable)" },
      { "label": "Bundle Output", "value": "33 bundles per cycle (adjustable)" },
      { "label": "Material Compatibility", "value": "All cigarette/rolling-paper bobbins" },
      { "label": "Cutting System", "value": "Precision depth-controlled cutting" },
      { "label": "Creasing System", "value": "Stainless-steel creasing assembly" },
      { "label": "Operating Voltage", "value": "240 V AC" },
      { "label": "Price", "value": "€ 33,000" },
      { "label": "Delivery Time", "value": "90–120 days" }
    ],
    "features": [
      "Dual-bobbin high productivity",
      "Export-grade calibration",
      "Low-maintenance mechanical drive",
      "Customisation + automation options",
      "Load-tested before dispatch"
    ]
  },
  {
    "id": 4,
    "name": "Precision Gumming Machine",
    "slug": "precision-gumming-machine",
    "icon": "Cog",
    "tagline": "High-Precision Arabic Gum Coating for Rolling Papers",
    "description": "A fully refurbished precision gumming unit with optimized drying and controlled coating application.",
    "longDescription": "This machine is dismantled, inspected, and rebuilt with new rollers, bearings, seals, wiring, and safety systems. Designed for uniform water-based adhesive application...",
    "specifications": [
      { "label": "Type", "value": "Refurbished Precision Gumming Machine" },
      { "label": "Application", "value": "Arabic gum / water-based adhesive coating" },
      { "label": "Working Speed", "value": "25–60 m/min" },
      { "label": "Max Mother Bobbin Width", "value": "600 mm" },
      { "label": "Core Diameter", "value": "76 mm" },
      { "label": "Coating System", "value": "Precision roller application" },
      { "label": "Drying System", "value": "Conductive + IR + hot-air system" },
      { "label": "Voltage", "value": "400 VAC ±10%, 3-phase" },
      { "label": "Compressed Air", "value": "6 Bar (dry & oil-free)" },
      { "label": "Price", "value": "€ 46,000" },
      { "label": "Delivery Time", "value": "120 days" }
    ],
    "features": [
      "Completely refurbished & recalibrated",
      "Energy-efficient multi-stage drying",
      "New gumming roller & mechanical rebuild",
      "Suitable for cigarette/rolling papers",
      "Customisation options available"
    ]
  },
  {
    "id": 5,
    "name": "Twin-Bobbin Flat Sheet Cutting Machine",
    "slug": "twin-bobbin-flat-sheet-cutting-machine",
    "icon": "Cog",
    "tagline": "Zero-Crease Cutting for Premium Cone Production",
    "description": "Precision machine designed for cutting flat, crease-free sheets used in pre-roll cone manufacturing.",
    "longDescription": "Built for high accuracy and stability, this machine delivers perfectly flat tension-controlled sheets ideal for premium cones...",
    "specifications": [
      { "label": "Type", "value": "Twin-Bobbin Flat Sheet Cutting Machine" },
      { "label": "Application", "value": "Cutting crease-free flat sheets for cones" },
      { "label": "Bobbin Width", "value": "440 mm standard (customizable)" },
      { "label": "Output Capacity", "value": "80–150 cuts/min" },
      { "label": "Drive System", "value": "Servo drive" },
      { "label": "Control System", "value": "PLC with digital length setting" },
      { "label": "Paper Compatibility", "value": "12–18 gsm rolling paper" },
      { "label": "Price", "value": "€ 20,000" }
    ],
    "features": [
      "Zero-crease sheet cutting",
      "Servo precision feed",
      "Automatic stacking system",
      "Custom bobbin widths available",
      "Load-tested before dispatch"
    ]
  },
  {
    "id": 6,
    "name": "Twin-Bobbin Interleaving Machine (78 mm / Custom Sizes)",
    "slug": "twin-bobbin-interleaving-machine-78-mm-custom-sizes",
    "icon": "Cog",
    "tagline": "High-Speed, High-Precision Interleaving",
    "description": "A twin-bobbin machine built for high-output, stable, export-grade rolling paper interleaving.",
    "longDescription": "Ideal for mid-to-large RYO paper factories, this model increases productivity with dual-web feed, precision cutting, and stainless-steel creasing...",
    "specifications": [
      { "label": "Type", "value": "Twin-Bobbin Rolling/Cigarette Paper Interleaving Machine" },
      { "label": "Application", "value": "Interleaving 78 mm sheets (custom sizes)" },
      { "label": "Working Speed", "value": "35–70 bundles/min" },
      { "label": "Sheet Count", "value": "32 sheets (customizable)" },
      { "label": "Bobbin Count", "value": "Twin-bobbin" },
      { "label": "Power Requirement", "value": "240 V AC" },
      { "label": "Construction", "value": "Mild-steel frame with enamel finish" },
      { "label": "Price", "value": "€ 35,000" }
    ],
    "features": [
      "Twin-bobbin high productivity",
      "Precision rotary cutting",
      "Stainless-steel creasing",
      "Low-maintenance mechanical drive",
      "Automation upgrades available"
    ]
  }
];


// If you were using TypeScript with actual interfaces, you would define them here:

export interface Seo {
  title: string;
  description: string;
}

export interface Machine {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  imagePlaceholder: string;
  seo: Seo;
}

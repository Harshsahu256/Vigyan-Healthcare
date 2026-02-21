// Mock data for Ambica Pharma clone
import { Users, Briefcase, PackageCheck, TrendingUp } from "lucide-react";
export const companyInfo = {
  name: "Vigyan Healthcare",
  tagline: "Leading Pharmaceutical Wholesaler, Trader & Exporter in India",
  established: "2025",
  yearsOfExperience: "19+",
  description: "Vigyan Healthcare has evolved from a humble startup into a leading force in pharmaceutical distribution. With over 19 years of expertise, we pride ourselves on quality, service, and client satisfaction."
};

export const certifications = [
  {
    id: 1,
    title: "WHO–GMP Units",
    description: "Audited multi-therapeutic lines",
    icon: "shield-check"
  },
  {
    id: 2,
    title: "ISO 9001:2015",
    description: "Documented QMS + GDP SOPs",
    icon: "award"
  },
  {
    id: 3,
    title: "Cold-Chain Ready",
    description: "2–8°C monitored fulfillment",
    icon: "thermometer"
  },
  {
    id: 4,
    title: "Global Export Desk",
    description: "45+ regulated & semi-regulated markets",
    icon: "globe"
  }
];

export const stats = [
  {
    id: 1,
    number: "45+",
    label: "Countries Served",
    icon: "globe"
  },
  {
    id: 2,
    number: "300k+",
    label: "Healthcare Partners",
    icon: "users"
  },
  {
    id: 3,
    number: "5k+",
    label: "Formulations",
    icon: "pill"
  },
  {
    id: 4,
    number: "35+",
    label: "Awards & Citations",
    icon: "trophy"
  }
];

export const productCategories = [
    {
    id: 1,
    title: "Hormones",
    tags: ["IP", "USP", "BP"],
    description: "Pharma-grade hormonal actives supplied in bulk for advanced pharmaceutical manufacturing. Reliable sourcing with complete documentation support.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80"
  },
  {
    id: 2,
    title: "Corticosteroids",
    tags: ["IP", "USP", "BP"],
    description: "Premium-grade raw materials for pharmaceutical manufacturers. Reliable bulk supply with consistent potency, stability, and regulatory documentation.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80"
  },
  {
    id: 3,
    title: "Vitamins",
    tags: ["IP", "USP", "BP"],
    description: "Premium-grade raw materials for tablets, capsules, syrups, and fortified formulations. Reliable bulk supply with complete documentation support.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80"
  },
  {
    id: 4,
    title: "Antibiotics",
    tags: ["IP", "USP", "BP"],
    description: "Reliable bulk supply of pharmagrade antibiotic actives for global manufacturers.Backed by complete regulatory documentation.",
    image: "https://images.unsplash.com/photo-1556228852-80a0ac0a6cf7?w=600&q=80"
  }
];

export const supplySolutions = [
  {
    id: 1,
    title: "Pharmaceutical Company & Industry Supply (India)",
    description: "Reliable pharmaceutical supply solutions for manufacturers, distributors, industry, and domestic buyersm Pharmaceutical companies across India",
    features: [
      "Multi-specialty & pharmaceutical API supply",
      "Procurement & group purchasing support",
      "Stable & consistent distributor network participation",
      "Demand forecasting & uninterrupted supply"
    ]
  },
  {
    id: 2,
    title: "Traders & Digital Pharmacies (India)",
    description: "Compliance with Indian regulatory norms",
    features: [
      "Same week dispatch for key SKUs",
      "Smart inventory & batch traceability",
      "Cold-chain solutions where required",
      "Scalable supply for pharmacy networks"
    ]
  },
  {
    id: 3,
    title: "API → Hormones, Antibiotics, Vitamins and Corticosteroids supplies (India)",
    description: "Consistent and compliant pharmaceutical API for the Indian healthcare ecosystem.",
    features: [
      "Active Pharmaceutical Ingredients (APIs)",
      "Hormonal APIs & specialty products",
      "Antibiotics APIs & specialty products",
      "Vitamins APIs & specialty products",
    ]
  },
  {
    id: 4,
    title: "Private Label & Contract Manufacturing",
    description: "Concept-to-market pharmaceutical manufacturing support for Indian & global organizations and distributors.",
    features: [
      "Private label and contract manufacturing",
      "Artwork, packaging & dossier assistance",
      "Dedicated clinical educator desk",
      "Market-specific compliance support"
    ]
  }
];

export const qualityFeatures = [
  {
    id: 1,
    title: "Regulatory Confidence",
    description: "WHO-GMP compliant sourcing ISO-certified quality systems & GDP-aligned operations ensure consistent compliance across domestic & export markets."
  },
  {
    id: 2,
    title: "Manufacturing Depth",
    description: "Dedicated API & pharmaceutical chemical manufacturing and sourcing partners with validated process controls, environmental and strict in-process quality controls."
  },
  {
    id: 3,
    title: "Secure Logistics",
    description: "Validated packaging, GDP-compliant handling & temperature-controlled logistics to protect product integrity during domestic distribution & global exports."
  },
  {
    id: 4,
    title: "Global Supply Readiness",
    description: "API & chemical portfolios aligned with US / BP / IP standards, supporting regulated & semi-regulated international markets."
  }
];

export const operationalStats = [
  {
    id: 1,
    icon: Briefcase,
    label: "Years of Marketing & Distribution"
  },
  {
    id: 2,
    icon: Users,
    label: "Happy Customers"
  },
  {
    id: 3,
   icon: TrendingUp,
    label: "Years of Experience"
  },
  {
    id: 4,
    icon: PackageCheck,
    label: "Quality Products"
  }
];

export const supplyChainStats = [
  {
    id: 1,
    number: "600+",
    label: "Hospital partners",
    sublabel: "Aggregator & tender-ready"
  },
  {
    id: 2,
    number: "120+",
    label: "Private label launches",
    sublabel: "Concept-to-commercialization"
  },
  {
    id: 3,
    number: "80+",
    label: "SKUs with cold chain",
    sublabel: "Validated insulated shipping"
  }
];

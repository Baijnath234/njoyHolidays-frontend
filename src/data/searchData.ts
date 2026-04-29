// Search data for travel and tour content
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: "destination" | "service" | "page" | "package";
  href: string;
  keywords: string[];
}

export const searchDatabase: SearchResult[] = [
  // Pages
  {
    id: "home",
    title: "Home",
    description: "Welcome to NjoyHolidayz - Discover unforgettable travel experiences",
    category: "page",
    href: "/",
    keywords: ["home", "welcome", "start"],
  },
  {
    id: "about",
    title: "About Us",
    description: "Learn about NjoyHolidayz and our travel expertise",
    category: "page",
    href: "/about",
    keywords: ["about", "company", "team", "mission"],
  },
  {
    id: "packages",
    title: "Tour Packages",
    description: "Browse our curated holiday packages and deals",
    category: "page",
    href: "/packages",
    keywords: ["packages", "tours", "holidays", "deals"],
  },
  {
    id: "booking",
    title: "Bookings",
    description: "Manage and view your travel bookings",
    category: "page",
    href: "/booking",
    keywords: ["booking", "reservations", "my bookings"],
  },
  {
    id: "contact",
    title: "Contact Us",
    description: "Get in touch with our travel experts",
    category: "page",
    href: "/contact",
    keywords: ["contact", "support", "help", "call"],
  },
  {
    id: "services",
    title: "Services",
    description: "Explore our comprehensive travel services",
    category: "page",
    href: "/services",
    keywords: ["services", "offerings", "what we do"],
  },

  // Services
  {
    id: "visa",
    title: "Visa Consultancy",
    description: "Expert visa assistance and consultancy services",
    category: "service",
    href: "/visa",
    keywords: ["visa", "consultancy", "passport", "tourist visa", "business visa", "student visa"],
  },
  {
    id: "flights",
    title: "Flight Booking",
    description: "Book flights to destinations worldwide",
    category: "service",
    href: "/flight",
    keywords: ["flights", "airlines", "tickets", "airfare"],
  },
  {
    id: "hotels",
    title: "Hotels & Accommodation",
    description: "Find and book hotels and accommodations",
    category: "service",
    href: "/hotels",
    keywords: ["hotels", "accommodation", "lodging", "stay", "rooms"],
  },

  // Destinations
  {
    id: "domestic",
    title: "Domestic Tours",
    description: "Explore beautiful domestic travel destinations",
    category: "destination",
    href: "/domestic",
    keywords: ["domestic", "india", "local", "domestic tours"],
  },
  {
    id: "international",
    title: "International Tours",
    description: "Travel to amazing international destinations",
    category: "destination",
    href: "/international",
    keywords: ["international", "abroad", "overseas", "world"],
  },
  {
    id: "maldives",
    title: "Maldives Trip",
    description: "Experience paradise in the Maldives",
    category: "destination",
    href: "/product/bali-adventure-1",
    keywords: ["maldives", "beach", "tropical", "island"],
  },
  {
    id: "dubai",
    title: "Dubai Package",
    description: "Explore the luxury and adventure of Dubai",
    category: "destination",
    href: "/product/bali-adventure-2",
    keywords: ["dubai", "uae", "shopping", "desert"],
  },
  {
    id: "bali",
    title: "Bali Adventure",
    description: "Discover the beauty of Bali, Indonesia",
    category: "destination",
    href: "/domestic",
    keywords: ["bali", "indonesia", "temple", "beach"],
  },
  {
    id: "singapore",
    title: "Singapore Trip",
    description: "Experience modern and traditional Singapore",
    category: "destination",
    href: "/international",
    keywords: ["singapore", "city", "modern", "marina"],
  },
  {
    id: "thailand",
    title: "Thailand Tour",
    description: "Explore temples, beaches, and culture in Thailand",
    category: "destination",
    href: "/international",
    keywords: ["thailand", "bangkok", "phuket", "temples"],
  },
  {
    id: "goa",
    title: "Goa Vacation",
    description: "Relax and party in beautiful Goa",
    category: "destination",
    href: "/domestic",
    keywords: ["goa", "beach", "party", "vacation", "coconut"],
  },

  // Travel Types
  {
    id: "vacations",
    title: "Vacations",
    description: "Plan your perfect vacation getaway",
    category: "page",
    href: "/vacations",
    keywords: ["vacation", "getaway", "relax", "holidays"],
  },
  {
    id: "honeymoon",
    title: "Honeymoon Packages",
    description: "Romantic honeymoon destinations and packages",
    category: "page",
    href: "/packages",
    keywords: ["honeymoon", "romantic", "couples", "newlyweds"],
  },
];

// Search function
export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase().trim();

  return searchDatabase
    .map((item) => {
      let score = 0;

      // Title match (highest priority)
      if (item.title.toLowerCase().includes(lowerQuery)) {
        score += 10;
      }

      // Description match
      if (item.description.toLowerCase().includes(lowerQuery)) {
        score += 5;
      }

      // Keywords match
      if (item.keywords.some((kw) => kw.includes(lowerQuery))) {
        score += 8;
      }

      // Partial keyword match
      if (item.keywords.some((kw) => lowerQuery.includes(kw) || kw.includes(lowerQuery))) {
        score += 3;
      }

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ score, ...item }) => item);
}

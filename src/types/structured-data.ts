export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface OpeningHours {
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

export interface ContactPoint {
  contactType: string;
  availableLanguage: string;
  telephone?: string;
  email?: string;
}

export interface Address {
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry?: string;
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface RestaurantData {
  name: string;
  description: string;
  image: string[];
  priceRange: string;
  servesCuisine: string[];
  telephone?: string;
  email?: string;
  address?: Address;
  geo?: GeoCoordinates;
  openingHours: OpeningHours[];
  contactPoint: ContactPoint;
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

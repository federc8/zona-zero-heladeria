'use client'
import { categories } from "@/constants";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Zona Zero Heladería",
    "description": "Heladería especializada en helados de yogurt, obleas, ensaladas de frutas y postres con variedad de toppings y sabores únicos.",
    "image": [
      "https://zonazero-heladeria.com/icons/Helado.png" // Cambiar por tu dominio real
    ],
    "servesCuisine": [
      "Helados",
      "Postres",
      "Helado de yogurt",
      "Obleas",
      "Ensaladas de frutas"
    ],
    "priceRange": "$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "hasMenu": {
      "@type": "Menu",
      "name": "Menú de Helados y Postres",
      "description": "Variedad de helados de yogurt, obleas, ensaladas de frutas y postres infantiles",
      "hasMenuSection": categories.filter(cat => cat.id !== "todos").map(category => ({
        "@type": "MenuSection",
        "name": category.name,
        "description": `Productos de la categoría ${category.name}`
      }))
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "14:30",
        "closes": "20:30"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;

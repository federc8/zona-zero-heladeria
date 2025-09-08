import { Product } from "./types";

export const products: Product[] = [
  // Helado de yogurt
  {
    id: 1,
    name: "Helado de yogurt pequeño",
    description:
      "Helado cremoso y suave con sabor a yogurt natural acompañado de 2 toppings a elección.",
    price: 9000,
    categories: ["yogurt"],
    images: [
      {
        thumb:
          "https://zona-zero.s3.us-east-1.amazonaws.com/public/YogurthIceCream7_thumb.jpg",
        image:
          "https://zona-zero.s3.us-east-1.amazonaws.com/public/YogurthIceCream7.png",
      },
    ],
    available: true,
  },
  {
    id: 2,
    name: "Helado de yogurt mediano",
    description:
      "Helado cremoso y suave con sabor a yogurt natural acompañado de 4 toppings.",
    price: 12000,
    categories: ["yogurt"],
    images: [
      {
        thumb:
          "https://zona-zero.s3.us-east-1.amazonaws.com/public/YogurthIceCream5_thumb.jpg",
        image:
          "https://zona-zero.s3.us-east-1.amazonaws.com/public/YogurthIceCream5.jpg",
      },
      {
        thumb:
          "https://zona-zero.s3.us-east-1.amazonaws.com/public/YogurthIceCream4_thumb.jpg",
        image:
          "https://zona-zero.s3.us-east-1.amazonaws.com/public/YogurthIceCream4.jpg",
      },
    ],
    available: true,
  },
  {
    id: 3,
    name: "Helado de yogurt grande",
    description:
      "Helado cremoso y suave con sabor a yogurt natural acompañado de 6 toppings.",
    price: 14000,
    categories: ["yogurt"],
    images: [
      {
        thumb:
          "https://zona-zero.s3.us-east-1.amazonaws.com/public/YogurthIceCream6_thumb.jpg",
        image:
          "https://zona-zero.s3.us-east-1.amazonaws.com/public/YogurthIceCream6.jpg",
      },
    ],
    available: true,
  },

  // Ensaladas
  {
    id: 4,
    name: "Ensalada de frutas mediana",
    description:
      "Deliciosa mezcla de frutas en salsa de la casa acompañada de queso, galleta y un sabor de helado a elección.",
    price: 13500,
    categories: ["ensaladas"],
    images: [
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/ensaladaFrutas1_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/ensaladaFrutas1.png",
      },
    ],
    available: true,
  },
  {
    id: 5,
    name: "Ensalada de frutas grande",
    description:
      "Deliciosa mezcla de frutas en salsa de la casa acompañada de queso, galleta y dos sabores de helado a elección.",
    price: 17000,
    categories: ["ensaladas"],
    images: [
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/EnsaladaGrande1_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/EnsaladaGrande1.png",
      },
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/EnsaladaGrande2_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/EnsaladaGrande2.png",
      },
    ],
    available: true,
  },

  // Obleas
  {
    id: 6,
    name: "Oblea tradicional",
    description:
      "Nuestra oblea sencilla cuenta de dos capas de galleta con una exquisita base de arequipe, queso, salsa de mora y leche condensada.",
    price: 6500,
    categories: ["obleas"],
    images: [
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/Obleas1_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/Obleas1.png",
      },
    ],
    available: true,
  },
  {
    id: 7,
    name: "Oblea tropical",
    description:
      "Tres capas de galleta acompañadas de arequipe y queso. Su centro es recubierto por la deliciosa crema de la casa junto a duraznos, banano y fresa.",
    price: 13000,
    categories: ["obleas"],
    images: [
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/Obleas2_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/Obleas2.png",
      },
    ],
    available: true,
  },

  // Preparaciones con helado
  {
    id: 8,
    name: "Fresas con crema",
    description:
      "Fresas con crema de la casa acompañadas de 2 toppings y 1 sabor de helado a elección.",
    price: 15000,
    categories: ["otros"],
    images: [
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/FresasConCrema1_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/FresasConCrema1.png",
      },
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/FresasConCrema2_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/FresasConCrema2.png",
      },
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/FresasConCrema3_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/FresasConCrema3.png",
      },
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/FresasConCrema4_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/FresasConCrema4.png",
      },
    ],
    available: true,
  },
  {
    id: 9,
    name: "Banana split",
    description:
      "Barco de helado con base de queso y crema de la casa con tres sabores de helado a elección acompañados de banano, fresa, chantilly, masmelos y galletas con salsa de chocolate.",
    price: 15500,
    categories: ["otros"],
    images: [
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/BananaSplit_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/BananaSplit.png",
      },
    ],
    available: true,
  },
  {
    id: 10,
    name: "Waffle con fruta y helado",
    description:
      "Acompañado de fresa, banano, mango y 1 sabor de helado a elección. lleva salsa de arequipe, chocolate, chantilly y cereza.",
    price: 15000,
    categories: ["otros"],
    images: [
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/WaffleConHelado_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/WaffleConHelado.png",
      },
    ],
    available: true,
  },
  {
    id: 11,
    name: "Brownie con helado",
    description:
      "Brownie en frio acompañado de 2 sabores de helado a elección, salsa de la casa, fresa, galletas, chantilly y salsa de chocolate.",
    price: 15000,
    categories: ["otros"],
    images: [
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/BrownieConHelado_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/BrownieConHelado.png",
      },
    ],
    available: true,
  },
  {
    id: 12,
    name: "Copa tentación",
    description:
      "3 Frutas y 1 sabor de helado a elección, crema de la casa, queso, galleta, chantilly y cereza.",
    price: 15000,
    categories: ["otros"],
    images: [
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/CopaTentacion_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/CopaTentacion.png",
      },
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/CopaTentacion2_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/CopaTentacion2.png",
      },
    ],
    available: true,
  },

  // Infantil
  {
    id: 13,
    name: "Gusano",
    description: "3 sabores de helado a elección",
    price: 14000,
    categories: ["infantil"],
    images: [
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/Gusano_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/Gusano.png",
      },
    ],
    available: true,
  },
  {
    id: 14,
    name: "Duendecito",
    description: "2 sabores de helado a elección",
    price: 12000,
    categories: ["infantil"],
    images: [
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/Duendecito_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/Duendecito.png",
      },
    ],
    available: true,
  },
  {
    id: 15,
    name: "Búho",
    description: "2 sabores de helado a elección",
    price: 12000,
    categories: ["infantil"],
    images: [
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/Buho_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/Buho.png",
      },
    ],
    available: true,
  },

  // Helados pequeños
  {
    id: 16,
    name: "Cono de helado de yogurt con salsa",
    description: "Cono de helado de yogurt con salsa",
    price: 4500,
    categories: ["yogurt"],
    images: [
      {
        thumb: "https://zona-zero.s3.us-east-1.amazonaws.com/public/HeladosPequenos_thumb.jpg",
        image: "https://zona-zero.s3.us-east-1.amazonaws.com/public/HeladosPequenos.png",
      },
    ],
    available: true,
  },
];
export const categories = [
  { id: "todos", name: "Todos", icon: "🍦" },
  { id: "yogurt", name: "Helado de yogurt", icon: "🍦" },
  { id: "obleas", name: "Obleas", icon: "🥤" },
  { id: "ensaladas", name: "Ensaladas", icon: "🍨" },
  { id: "infantil", name: "Infantil", icon: "🍭" },
  { id: "otros", name: "Otros", icon: "🍭" },
];

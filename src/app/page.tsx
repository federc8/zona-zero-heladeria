"use client";
import ProductImage from "@/components/ProductImage";
import ProductDetailModal from "@/components/ProductDetailModal";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";
import WhatsAppButton from "@/components/WhatsAppButton";
import { categories, products } from "@/constants";
import { Product } from "@/types";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Icon from "../icons/Helado.png";

export default function HeladeriaPrincipal() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Crear índices para optimizar las búsquedas
  const availableProducts = useMemo(
    () => products.filter((product) => product.available),
    []
  );

  const productsByCategory = useMemo(() => {
    const categoryMap = new Map();
    availableProducts.forEach((product) => {
      // Para cada categoría del producto, agregarlo al mapa
      product.categories.forEach((category) => {
        if (!categoryMap.has(category)) {
          categoryMap.set(category, []);
        }
        categoryMap.get(category).push(product);
      });
    });
    return categoryMap;
  }, [availableProducts]);

  // Filtrado optimizado con useMemo para múltiples categorías
  const filteredProducts = useMemo(() => {
    let baseProducts = availableProducts;

    // Filtrar por categoría primero (más eficiente)
    if (selectedCategory !== "todos") {
      baseProducts = productsByCategory.get(selectedCategory) || [];
    }

    // Si no hay término de búsqueda, devolver productos de categoría
    if (!searchTerm.trim()) {
      return baseProducts;
    }

    // Filtrar por término de búsqueda solo en productos de la categoría
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    return baseProducts.filter((product) =>
      product.name.toLowerCase().includes(normalizedSearchTerm)
    );
  }, [selectedCategory, searchTerm, availableProducts, productsByCategory]);

  return (
    <div className="min-h-screen bg-white">
      <SkipToContent />
      <StructuredData />
      {/* Header */}
      <header
        className="sticky top-0 z-10 bg-[var(--primary)] shadow-sm"
        role="banner"
      >
        {/* Desktop Header */}
        <div className="hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo lado izquierdo */}
              <div className="flex items-center">
                <Image
                  src={Icon}
                  alt="Logo de Heladería Zona Zero"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Categorías centro */}
              <nav
                className="flex items-center space-x-2"
                role="navigation"
                aria-label="Categorías de productos"
              >
                {categories.map((category) => {
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
                        selectedCategory === category.id
                          ? "bg-white text-[var(--secondary)] shadow-lg rounded-full"
                          : " text-white hover:underline"
                      }`}
                      aria-pressed={selectedCategory === category.id}
                      aria-label={`Filtrar productos por categoría: ${category.name}`}
                    >
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Buscador y WhatsApp lado derecho */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <label htmlFor="desktop-search" className="sr-only">
                    Buscar productos
                  </label>
                  <input
                    id="desktop-search"
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64 px-4 py-2 pl-10 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent outline-none text-sm backdrop-blur-sm"
                    aria-describedby="search-description"
                  />
                  <div
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 text-sm"
                    aria-hidden="true"
                  >
                    🔍
                  </div>
                  <div id="search-description" className="sr-only">
                    Helado de yogurt...
                  </div>
                </div>

                {/* Botón de WhatsApp para desktop */}
                <WhatsAppButton
                  phoneNumber="573113828117"
                  variant="header"
                  message="Hola, quiero probar la magia de zona zero"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Header */}
        <div className="lg:hidden">
          {/* Primera fila: Logo y título */}
          <div className="px-3 sm:px-4 py-3">
            <div className="flex items-center justify-center">
              <Image
                src={Icon}
                alt="Logo de Heladería Zona Zero"
                width={32}
                height={32}
                className="object-contain mr-3"
              />
              <div>
                <h1 className="text-lg sm:text-lg font-bold text-white font-logo">
                  Zona
                </h1>
                <h1 className="text-lg sm:text-lg font-bold text-white font-logo">
                  Zero
                </h1>
              </div>
            </div>
          </div>

          {/* Segunda fila: Categorías y buscador */}
          <div className="px-3 sm:px-4 pb-3">
            <div className="flex items-center">
              {/* Categorías con scroll horizontal */}
              <div className="flex-1 min-w-0 mr-3">
                <nav
                  className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2"
                  style={{ scrollbarWidth: "none" }}
                  role="navigation"
                  aria-label="Categorías de productos"
                >
                  {categories.map((category) => {
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
                          selectedCategory === category.id
                            ? "bg-white text-[var(--secondary)] shadow-lg"
                            : " text-white hover:underline"
                        }`}
                        aria-pressed={selectedCategory === category.id}
                        aria-label={`Filtrar productos por categoría: ${category.name}`}
                      >
                        <span className="hidden min-[480px]:inline">
                          {category.name}
                        </span>
                        <span className="min-[480px]:hidden">
                          {category.name.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Icono de búsqueda */}
              <button
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label={
                  showMobileSearch ? "Ocultar buscador" : "Mostrar buscador"
                }
                aria-expanded={showMobileSearch}
                aria-controls="mobile-search-container"
              >
                🔍
              </button>
            </div>

            {/* Buscador móvil expandible */}
            <div
              id="mobile-search-container"
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                showMobileSearch
                  ? "max-h-20 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="relative">
                <label htmlFor="mobile-search" className="sr-only">
                  Buscar productos
                </label>
                <input
                  id="mobile-search"
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:border-transparent outline-none text-sm backdrop-blur-sm"
                  aria-describedby="mobile-search-description"
                />
                <div
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 text-sm"
                  aria-hidden="true"
                >
                  🔍
                </div>
                <div id="mobile-search-description" className="sr-only">
                  Escribe para buscar productos por nombre
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main
        id="main-content"
        className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6"
        tabIndex={-1}
      >
        {/* Filtros de categorías - Solo para desktop como respaldo si es necesario */}
        <div className="mb-6 sm:mb-8 hidden">
          <h2 className="text-lg font-semibold text-[var(--darkText)] mb-4 text-center lg:text-left">
            Categorías
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
            {categories.map((category) => {
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50 ${
                    selectedCategory === category.id
                      ? "bg-[var(--primary)] text-white shadow-lg"
                      : "bg-white text-[var(--darkText)] border border-gray-200 hover:bg-[var(--primaryLight)] hover:text-white"
                  }`}
                  aria-pressed={selectedCategory === category.id}
                  aria-label={`Filtrar productos por categoría: ${category.name}`}
                >
                  <span className="hidden min-[480px]:inline">
                    {category.name}
                  </span>
                  <span className="min-[480px]:hidden">
                    {category.name.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lista de productos */}
        <section
          className="mb-6 flex flex-col items-center"
          aria-label="Productos disponibles"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center mb-4 sm:mb-6 gap-2 w-full max-w-6xl">
            <span
              className="text-sm text-[var(--descriptionText)] text-center"
              role="status"
              aria-live="polite"
              aria-label={`Se encontraron ${filteredProducts.length} productos`}
            >
              {filteredProducts.length} productos
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16" role="status" aria-live="polite">
              <div className="text-6xl mb-4" aria-hidden="true">
                😔
              </div>
              <p className="text-[var(--descriptionText)] text-lg">
                No se encontraron productos
              </p>
              <p className="text-sm text-[var(--descriptionText)] mt-2">
                Intenta con otra búsqueda o selecciona una categoría diferente
              </p>
            </div>
          ) : (
            <div className="w-full max-w-6xl">
              <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center"
                role="list"
                aria-label="Productos de la heladería"
              >
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    onClick={() => openProductModal(product)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openProductModal(product);
                      }
                    }}
                    className="bg-white border-none border-gray-100 overflow-hidden hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.04)] lg:rounded-xl transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02] flex flex-col w-full max-w-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50"
                    role="listitem"
                    tabIndex={0}
                    aria-label={`Ver detalles de ${
                      product.name
                    }, precio ${new Intl.NumberFormat("es-CO", {
                      style: "currency",
                      currency: "COP",
                      minimumFractionDigits: 0,
                    }).format(product.price)}`}
                  >
                    {/* Imagen del producto */}
                    <div className="relative w-full h-48 sm:h-52 lg:h-48 overflow-hidden">
                      <ProductImage product={product} />
                    </div>

                    {/* Contenido de la tarjeta */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <div className="text-center mb-4 flex-1">
                        <h3 className="font-semibold text-[var(--darkText)] mb-2 text-base sm:text-lg leading-tight">
                          {product.name}
                        </h3>
                        <p className="text-sm text-[var(--descriptionText)] mb-4 leading-relaxed line-clamp-3">
                          {product.description}
                        </p>
                        <div
                          className="text-lg font-bold text-[var(--primary)]"
                          aria-label={`Precio: ${new Intl.NumberFormat(
                            "es-CO",
                            {
                              style: "currency",
                              currency: "COP",
                              minimumFractionDigits: 0,
                            }
                          ).format(product.price)}`}
                        >
                          {new Intl.NumberFormat("es-CO", {
                            style: "currency",
                            currency: "COP",
                            minimumFractionDigits: 0,
                          }).format(product.price)}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
      />

      {/* Botón flotante de WhatsApp para móvil */}
      <WhatsAppButton
        phoneNumber="573113828117"
        variant="header"
        message="Hola, quiero probar la magia de zona zero"
      />
    </div>
  );
}

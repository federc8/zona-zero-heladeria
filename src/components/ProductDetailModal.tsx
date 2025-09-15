'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Product } from "@/types";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset image index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setImageLoaded(false);
  }, [product]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      // Focus trap - focus on first focusable element
      const modal = document.querySelector('[role="dialog"]');
      if (modal) {
        const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') as HTMLElement;
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const nextImage = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
      setImageLoaded(false);
    }
  };

  const prevImage = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
      setImageLoaded(false);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    setImageLoaded(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-title"
      aria-describedby="product-description"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-opacity-30 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg sm:rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-lg md:max-w-[60vw] lg:max-w-4xl h-[95vh] sm:h-auto sm:max-h-[90vh] overflow-y-auto" style={{
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none', /* Internet Explorer 10+ */
      }}>
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-6 right-3 sm:top-4 sm:right-4 z-[60] w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50"
          aria-label="Cerrar detalles del producto"
        >
          <X size={16} className="sm:w-5 sm:h-5" color="#4B5563" weight="bold" />
        </button>

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Carousel Section */}
          <div className="relative">
            <div 
              className="aspect-square relative overflow-hidden lg:rounded-l-2xl rounded-t-lg sm:rounded-t-2xl lg:rounded-tr-none"
              role="tabpanel"
              aria-label={`Imagen ${currentImageIndex + 1} de ${product.images?.length || 1}: ${product.name}`}
              id="image-panel"
              aria-labelledby={`image-tab-${currentImageIndex}`}
            >
              {product.images && product.images.length > 0 ? (
                <>
                  {/* Main Image */}
                  <Image
                    src={product.images[currentImageIndex].image}
                    alt={`${product.name} - imagen ${currentImageIndex + 1} de ${product.images.length}`}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    objectFit="contain"
                    onLoad={() => setImageLoaded(true)}
                  />
                  
                  {/* Loading placeholder */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <span className="text-4xl animate-pulse" aria-hidden="true">🍦</span>
                      </div>
                      <span className="sr-only">Cargando imagen...</span>
                    </div>
                  )}

                  {/* Navigation Arrows - Only show if multiple images */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50"
                        aria-label="Imagen anterior"
                      >
                        <CaretLeftIcon size={20} color="#374151" weight="bold" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50"
                        aria-label="Siguiente imagen"
                      >
                        <CaretRightIcon size={20} color="#374151" weight="bold" />
                      </button>
                    </>
                  )}

                  {/* Image Indicators - Only show if multiple images */}
                  {product.images.length > 1 && (
                    <div 
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
                      role="tablist"
                      aria-label="Indicadores de imagen"
                    >
                      {product.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
                            index === currentImageIndex
                              ? 'bg-white shadow-lg scale-110'
                              : 'bg-white bg-opacity-60 hover:bg-opacity-80'
                          }`}
                          role="tab"
                          aria-selected={index === currentImageIndex}
                          aria-controls="image-panel"
                          id={`image-tab-${index}`}
                          aria-label={`Ver imagen ${index + 1} de ${product.images.length}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-6xl" aria-hidden="true">🍦</span>
                  <span className="sr-only">Imagen no disponible</span>
                </div>
              )}
            </div>

            {/* Thumbnail Strip - Only show if multiple images */}
            {product.images && product.images.length > 1 && (
              <div className="p-4 bg-gray-50">
                <div 
                  className="flex space-x-2 overflow-x-auto"
                  role="tablist"
                  aria-label="Miniaturas de imágenes"
                >
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-opacity-50 ${
                        index === currentImageIndex
                          ? 'border-[var(--primary)] scale-105'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      role="tab"
                      aria-selected={index === currentImageIndex}
                      aria-controls="image-panel"
                      id={`thumbnail-tab-${index}`}
                      aria-label={`Seleccionar imagen ${index + 1} de ${product.images.length}`}
                    >
                      <Image
                        src={image.thumb}
                        alt={`Miniatura ${index + 1} de ${product.name}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Product Details Section */}
          <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
            <div>
              {/* Product Name */}
              <h1 
                id="product-title"
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--darkText)] mb-3 sm:mb-4 leading-tight"
              >
                {product.name}
              </h1>

              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <span 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--primary)]"
                  aria-label={`Precio: ${formatPrice(product.price)}`}
                >
                  {formatPrice(product.price)}
                </span>
              </div>

              {/* Description */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-[var(--darkText)] mb-2 sm:mb-3">
                  Descripción
                </h3>
                <p 
                  id="product-description"
                  className="text-[var(--descriptionText)] leading-relaxed text-sm sm:text-base"
                >
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;

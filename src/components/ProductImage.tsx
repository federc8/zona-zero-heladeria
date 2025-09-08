'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";

const ProductImage = ({ product }: { product: Product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Verificar si hay imágenes válidas
  if (!product.images || product.images.length === 0 || 
      !product.images[0] || 
      (!product.images[0].image && !product.images[0].thumb)) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <span className="text-4xl">🍦</span>
      </div>
    );
  }

  // Verificar que las URLs no estén vacías
  const hasValidImage = product.images[0].image && product.images[0].image.trim() !== '';
  const hasValidThumb = product.images[0].thumb && product.images[0].thumb.trim() !== '';

  if (!hasValidImage && !hasValidThumb) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <span className="text-4xl">🍦</span>
      </div>
    );
  }

  if (imageError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-2xl text-gray-400">📷</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* Imagen de miniatura (si existe y es válida) */}
      {hasValidThumb && (
        <Image
          src={product.images[0].thumb}
          alt={`${product.name} preview`}
          fill
          className={`object-contain transition-all duration-700 bg-white ${
            imageLoaded ? 'blur-sm opacity-0' : 'blur-sm opacity-100'
          }`}
          priority={true}
          quality={30}
          onError={() => setImageError(true)}
        />
      )}
      
      {/* Imagen principal (si existe y es válida) */}
      {hasValidImage && (
        <Image
          src={product.images[0].image}
          alt={product.name}
          fill
          className={`object-contain transition-all duration-700 hover:scale-110 bg-white ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          quality={85}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          priority={false}
        />
      )}

      {/* Si solo hay thumb pero no imagen principal, mostrar el thumb como imagen principal */}
      {!hasValidImage && hasValidThumb && (
        <Image
          src={product.images[0].thumb}
          alt={product.name}
          fill
          className={`object-contain transition-all duration-700 hover:scale-110 bg-white ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          quality={85}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          priority={false}
        />
      )}

      {/* Indicador de carga */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-[var(--primary)]">
          <div className="w-10 h-10 border-none border-t-transparent rounded-full animate-spin text-3xl">🍦</div>
        </div>
      )}
    </div>
  );
};

export default ProductImage;
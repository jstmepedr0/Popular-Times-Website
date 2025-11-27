'use client';

import { useState } from 'react';
import { Property } from '@/data/properties';

interface PropertyGalleryProps {
  property: Property;
}

export function PropertyGallery({ property }: PropertyGalleryProps) {
  // Separar imagens normais das plantas (que contêm 'p', 'planta' ou são PDFs)
  const regularImages = property.images.filter(img => 
    !img.toLowerCase().includes('/p') && 
    !img.toLowerCase().includes('planta') &&
    !img.toLowerCase().endsWith('.pdf')
  );
  const plantImages = property.images.filter(img => 
    img.toLowerCase().includes('/p') || 
    img.toLowerCase().includes('planta') ||
    img.toLowerCase().endsWith('.pdf')
  );
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllImages, setShowAllImages] = useState(false);
  const [showPlants, setShowPlants] = useState(false);

  const imagesToShow = showAllImages ? regularImages : regularImages.slice(0, 4);

  return (
    <div className="space-y-4">
      {/* Imagem Principal */}
      <div className="relative h-96 rounded-xl overflow-hidden bg-gray-200 group">
        <img
          src={regularImages[selectedImage] || regularImages[0]}
          alt={property.title}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => setShowAllImages(true)}
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e5e7eb" width="800" height="600"/%3E%3Ctext fill="%236b7280" font-family="sans-serif" font-size="32" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EMoradia%3C/text%3E%3C/svg%3E';
          }}
        />
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
            property.status === 'available' 
              ? 'bg-green-500 text-white' 
              : property.status === 'reserved'
              ? 'bg-yellow-500 text-white'
              : 'bg-gray-500 text-white'
          }`}>
            {property.status === 'available' ? 'Disponível' : property.status === 'reserved' ? 'Reservado' : 'Vendido'}
          </span>
        </div>
        {/* Contador de imagens */}
        {regularImages.length > 1 && (
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium">
            {selectedImage + 1} / {regularImages.length}
          </div>
        )}
        {/* Botões de Navegação */}
        {regularImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev === 0 ? regularImages.length - 1 : prev - 1));
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              aria-label="Imagem anterior"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev === regularImages.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              aria-label="Próxima imagem"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Miniaturas das Imagens */}
      {regularImages.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {imagesToShow.map((image, index) => {
            const actualIndex = regularImages.indexOf(image);
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedImage(actualIndex);
                  setShowAllImages(false);
                }}
                className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === actualIndex 
                    ? 'border-primary-600 ring-2 ring-primary-300' 
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${property.title} - ${actualIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="150"%3E%3Crect fill="%23e5e7eb" width="200" height="150"/%3E%3C/svg%3E';
                  }}
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Botão Ver Todas as Imagens */}
      {regularImages.length > 4 && !showAllImages && (
        <button
          onClick={() => setShowAllImages(true)}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Ver Todas as {regularImages.length} Imagens
        </button>
      )}

      {/* Galeria Expandida */}
      {showAllImages && (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Todas as Imagens</h3>
            <button
              onClick={() => {
                setShowAllImages(false);
                setSelectedImage(0);
              }}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {regularImages.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedImage(index);
                  setShowAllImages(false);
                }}
                className="relative h-48 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-primary-600 transition-all"
              >
                <img
                  src={image}
                  alt={`${property.title} - ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3C/svg%3E';
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Botão Ver Plantas */}
      {plantImages.length > 0 && (
        <div>
          {!showPlants ? (
            <button
              onClick={() => setShowPlants(true)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Ver Plantas ({plantImages.length})
            </button>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Plantas</h3>
                <button
                  onClick={() => setShowPlants(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plantImages.map((image, index) => {
                  const isPDF = image.toLowerCase().endsWith('.pdf');
                  return (
                    <div key={index} className="relative rounded-lg overflow-hidden border-2 border-gray-200">
                      {isPDF ? (
                        <a
                          href={image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-8 bg-gray-50 hover:bg-gray-100 transition-colors text-center"
                        >
                          <svg className="w-16 h-16 mx-auto mb-4 text-primary-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <p className="text-gray-700 font-medium">Planta {index + 1}</p>
                          <p className="text-sm text-gray-500 mt-2">Clique para abrir PDF</p>
                        </a>
                      ) : (
                        <img
                          src={image}
                          alt={`${property.title} - Planta ${index + 1}`}
                          className="w-full h-auto object-contain bg-gray-50"
                          onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23e5e7eb" width="600" height="400"/%3E%3Ctext fill="%236b7280" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EPlanta%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


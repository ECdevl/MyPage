import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-slate-200 rounded-2xl">
        <p className="text-slate-500">No hay imágenes para mostrar</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Imagen principal */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].alt || `Imagen ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          
          {/* Gradiente overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>

        {/* Botones de navegación */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={24} />
            </button>

          </>
        )}
      </div>


      
    </div>
  );
}

export default ImageSlider;
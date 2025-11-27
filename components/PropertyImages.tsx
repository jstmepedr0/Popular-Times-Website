'use client';

import { Property } from '@/data/properties';

interface PropertyImagesProps {
  property: Property;
}

export function PropertyImages({ property }: PropertyImagesProps) {
  return (
    <div>
      <div className="space-y-4">
        <div className="relative h-96 rounded-xl overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
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
        </div>
        
        {/* Additional Images */}
        {property.images.length > 1 && (
          <div className="grid grid-cols-3 gap-4">
            {property.images.slice(1, 4).map((image, index) => (
              <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${property.title} - ${index + 2}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="200"%3E%3Crect fill="%23e5e7eb" width="300" height="200"/%3E%3C/svg%3E';
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}





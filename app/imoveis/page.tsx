import { PropertyCard } from '@/components/PropertyCard';
import { ChatBubble } from '@/components/chat/ChatBubble';
import { properties } from '@/data/properties';

export const metadata = {
  title: 'Imóveis - Popular Times sl',
  description: 'Descubra as nossas moradias disponíveis em Santa Luzia, Cabo Verde',
};

export default function ImoveisPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Os Nossos Imóveis
          </h1>
          <p className="text-xl text-primary-100">
            Explore a nossa seleção de moradias de qualidade
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              {properties.length} {properties.length === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>

          {properties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                Não há imóveis disponíveis neste momento.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Chat Bubble */}
      <ChatBubble />
    </>
  );
}





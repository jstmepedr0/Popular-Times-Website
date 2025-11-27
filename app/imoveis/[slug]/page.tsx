import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChatBubble } from '@/components/chat/ChatBubble';
import { getPropertyBySlug, getAllPropertySlugs } from '@/data/properties';
import { siteConfig } from '@/config/site';
import { PropertyGallery } from '@/components/PropertyGallery';

export async function generateStaticParams() {
  const slugs = getAllPropertySlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    return {
      title: 'Imóvel não encontrado',
    };
  }

  return {
    title: `${property.title} - Popular Times sl`,
    description: property.description,
  };
}

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/imoveis"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar aos imóveis
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images Gallery */}
            <PropertyGallery property={property} />

            {/* Details */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {property.title}
              </h1>

              <div className="flex items-center text-gray-600 mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg">{property.location}</span>
              </div>

              <div className="mb-8">
                <p className="text-5xl font-bold text-primary-600 mb-2">
                  {formatPrice(property.price)}
                </p>
                <p className="text-gray-600">{property.type}</p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white rounded-xl">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-primary-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{property.bedrooms}</p>
                  <p className="text-sm text-gray-600">Quartos</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-primary-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{property.bathrooms}</p>
                  <p className="text-sm text-gray-600">Casas de Banho</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-primary-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{property.area}</p>
                  <p className="text-sm text-gray-600">m²</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Descrição</h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Características</h2>
                <ul className="grid grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Interessado neste imóvel?
                </h3>
                <p className="text-gray-600 mb-6">
                  Entre em contacto connosco para mais informações ou agendar uma visita.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold text-center transition-colors"
                  >
                    Ligar Agora
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}?subject=Interesse em ${property.title}`}
                    className="flex-1 bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg font-bold text-center transition-colors"
                  >
                    Enviar Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Bubble with Context */}
      <ChatBubble context={property} />
    </>
  );
}


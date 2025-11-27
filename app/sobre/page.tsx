import { ChatBubble } from '@/components/chat/ChatBubble';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Sobre Nós - Popular Times sl',
  description: 'Conheça a Popular Times sl - empresa de construção em Santa Luzia, Cabo Verde',
};

export default function SobrePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre Nós
          </h1>
          <p className="text-xl text-primary-100">
            Conheça a história e os valores da Popular Times sl
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Quem Somos
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                A <strong>Popular Times sl</strong> é uma empresa de construção especializada 
                na criação de moradias de qualidade superior em Santa Luzia, Cabo Verde.
              </p>
              <p>
                Com um compromisso inabalável com a excelência, combinamos técnicas modernas 
                de construção com um profundo respeito pelas tradições arquitetónicas locais, 
                criando espaços que não são apenas casas, mas verdadeiros lares para as famílias cabo-verdianas.
              </p>
              <p>
                Cada projeto é tratado com atenção personalizada, desde o planeamento inicial 
                até à entrega das chaves, garantindo que cada detalhe reflita os sonhos e 
                necessidades dos nossos clientes.
              </p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-700">
                Transformar sonhos em realidade através da construção de moradias de 
                qualidade excecional, oferecendo soluções personalizadas que superam 
                as expectativas dos nossos clientes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Qualidade e excelência em cada projeto
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Transparência e honestidade
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Compromisso com prazos
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  Atendimento personalizado
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Porquê Escolher-nos?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Qualidade Garantida</h3>
                  <p className="text-gray-700">
                    Utilizamos apenas materiais de primeira qualidade e trabalhamos com 
                    profissionais experientes e certificados.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Prazos Respeitados</h3>
                  <p className="text-gray-700">
                    Planeamento rigoroso e gestão eficiente garantem que os projetos 
                    são concluídos dentro dos prazos acordados.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Acompanhamento Dedicado</h3>
                  <p className="text-gray-700">
                    Cada cliente tem um ponto de contacto dedicado para garantir 
                    comunicação clara e suporte em todas as etapas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary-600 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para Começar o Seu Projeto?
            </h2>
            <p className="text-xl text-primary-100 mb-6">
              Entre em contacto connosco e vamos transformar o seu sonho em realidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-bold transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Bubble */}
      <ChatBubble />
    </>
  );
}





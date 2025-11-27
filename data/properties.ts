export interface Property {
  slug: string;
  title: string;
  price: number;
  location: string;
  type: string;
  description: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  area: number; // em m²
  features: string[];
  status: 'available' | 'sold' | 'reserved';
  folderName?: string; // Nome da pasta (ex: "Moradia1 - Moradia Moderna Vista Oceano")
}

/**
 * Função helper para gerar caminhos de imagens a partir de uma pasta
 * Suporta múltiplos formatos: .jpg, .jpeg, .webp, .png
 * Se nomes específicos forem fornecidos, usa-os; caso contrário, tenta encontrar automaticamente
 */
function getImagesFromFolder(folderName: string, imageNames?: string[]): string[] {
  // Se nomes específicos forem fornecidos, usa-os
  if (imageNames && imageNames.length > 0) {
    return imageNames.map(name => `/images/${folderName}/${name}`);
  }
  
  // Caso contrário, retorna array vazio - as imagens devem ser especificadas manualmente
  // ou usar a função com nomes específicos
  return [];
}

/**
 * Função helper para gerar caminhos de imagens com múltiplos formatos suportados
 * Tenta .jpeg primeiro, depois .jpg, depois .webp
 */
function getImagesWithFormats(folderName: string, count: number, startFrom: number = 1): string[] {
  const images: string[] = [];
  const formats = ['.jpeg', '.jpg', '.webp', '.png'];
  
  for (let i = startFrom; i <= count; i++) {
    // Tenta cada formato
    for (const format of formats) {
      images.push(`/images/${folderName}/${i}${format}`);
      break; // Usa apenas o primeiro formato encontrado (assumindo que existe)
    }
  }
  
  return images;
}

export const properties: Property[] = [
  {
    slug: "horta-das-figuras",
    title: "Moradia T3+1 - Horta das Figuras",
    price: 960000,
    location: "Horta das Figuras, Faro",
    type: "Moradia",
    description: "Moradia T3+1 localizada na prestigiada zona da Horta das Figuras, em Faro. Esta propriedade oferece uma combinação perfeita de localização privilegiada, qualidade de construção e acabamentos de excelência. Com uma área útil generosa e espaços bem distribuídos, esta moradia é ideal para famílias que procuram conforto e qualidade de vida. A zona da Horta das Figuras é conhecida pela sua tranquilidade, proximidade ao centro da cidade e excelentes acessos.",
    folderName: "Moradia 1 - Horta das Figuras",
    images: getImagesFromFolder("Moradia 1 - Horta das Figuras", [
      "1.jpeg",
      "2.jpeg",
      "3.jpeg",
      "4.jpeg",
      "5.jpeg",
      "6.jpeg",
      "7.jpeg",
      "p1.webp",
      "p2.webp"
    ]),
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    features: [
      "Localização privilegiada na Horta das Figuras",
      "T3+1 com distribuição funcional",
      "Área útil generosa",
      "Acabamentos de qualidade",
      "Zona tranquila e residencial",
      "Excelentes acessos",
      "Próximo ao centro de Faro",
      "Ideal para família"
    ],
    status: 'available'
  },
  {
    slug: "montenegro-faro",
    title: "Moradia Contemporânea de Luxo – Montenegro, Faro",
    price: 760000,
    location: "Rua José Saramago, Montenegro, Faro",
    type: "Moradia",
    description: "Moradia contemporânea de luxo localizada na prestigiada zona do Montenegro, em Faro. Projeto de arquitetura moderna criado pela amp, que une design elegante, conforto e personalização. Tipologia V4 (adaptável para V5) com piscina privativa, terraço lounge, zona de fitness, sauna e banho turco. Acabamentos premium totalmente personalizáveis. Localização privilegiada a 5 minutos do Aeroporto de Faro, 10 minutos do centro da cidade e da Praia de Faro. Conclusão da construção prevista para 2026.",
    folderName: "Moradia 2 - Montenegro",
    images: getImagesFromFolder("Moradia 2 - Montenegro", [
      "1.jpeg",
      "2.jpeg",
      "3.jpeg",
      "4.jpeg",
      "5.jpeg",
      "6.jpeg",
      "WhatsApp Image 2025-10-21 at 21.55.53.jpeg",
      "WhatsApp Image 2025-10-21 at 21.55.53 (2).jpeg",
      "WhatsApp Image 2025-10-21 at 21.55.53 (5).jpeg",
      "planta 1.jpg",
      "planta 2.jpg"
    ]),
    bedrooms: 4,
    bathrooms: 4,
    area: 180,
    features: [
      "Moradia contemporânea de luxo",
      "Tipologia V4 (adaptável para V5)",
      "Piscina privativa (14,36 m²)",
      "Terraço lounge (19,06 m²)",
      "Zona de fitness (22,99 m²)",
      "Sauna e banho turco",
      "Bar-Cinema",
      "Jardim zen",
      "Cozinha equipada Bosch",
      "Ar condicionado Samsung Wind-Free",
      "Painel solar Up-Live 300L",
      "Carregador elétrico para viatura",
      "Estores elétricos",
      "Vídeo porteiro a cores",
      "Elevador opcional",
      "Certificado energético A",
      "Sistema de segurança",
      "Estacionamento para 1-2 viaturas",
      "Nova construção - Conclusão 2026",
      "Acabamentos premium personalizáveis"
    ],
    status: 'available'
  },
  {
    slug: "le-parc-apartamento-t2",
    title: "Apartamento T2 no Empreendimento LE PARC – Faro",
    price: 415000,
    location: "Montenegro, Faro",
    type: "Apartamento",
    description: "Elegante apartamento T2 integrado no prestigiado empreendimento Le Parc, em Faro. Design minimalista, linhas modernas e acabamentos premium. Distribuição equilibrada que maximiza luz natural e funcionalidade. Inclui sala espaçosa com acesso direto à varanda, cozinha moderna equipada com eletrodomésticos Bosch, 2 quartos confortáveis com roupeiros, 2 casas de banho equipadas e varanda ampla de 20 m². Localização privilegiada no Montenegro, com acesso rápido ao Aeroporto de Faro, Praia de Faro, Fórum Algarve e centro da cidade. Inclui 1 lugar de garagem em piso subterrâneo e 1 arrecadação privada.",
    folderName: "Moradia 4 - Apartamentos Faro",
    images: getImagesFromFolder("Moradia 4 - Apartamentos Faro", [
      "2025-11-20_112455/2025-11-20_110228.jpg",
      "2025-11-20_112455/2025-11-20_111538 (3).jpg",
      "2025-11-20_112455/2025-11-20_112101 (5).jpg",
      "2025-11-20_112455/Apartamentos (6).jpg",
      "2025-11-20_112455/Documento_2025-11-20_110408 (2).jpg",
      "2025-11-20_112455/Foto_2025-11-20_111205 (2).jpg",
      "2025-11-20_112455/Foto_2025-11-20_111820 (4).jpg",
      "planta1.jpg"
    ]),
    bedrooms: 2,
    bathrooms: 2,
    area: 65,
    features: [
      "Apartamento T2 no Le Parc",
      "Área útil interior ~65 m²",
      "Varanda ampla de 20 m²",
      "Área bruta privativa ~85 m²",
      "Sala espaçosa (23 m²) com acesso à varanda",
      "Cozinha moderna (10 m²) open-space",
      "Eletrodomésticos Bosch",
      "2 Quartos com roupeiros embutidos",
      "2 Casas de banho equipadas",
      "Pavimento multicamadas carvalho",
      "Ar condicionado embutido",
      "Vídeo-porteiro a cores com WiFi",
      "Bomba de calor para águas quentes",
      "Pré-instalação carregamento elétrico",
      "Caixilharia alumínio Cortizo",
      "Estores motorizados",
      "1 Lugar de garagem",
      "1 Arrecadação privada",
      "Localização privilegiada Montenegro",
      "Próximo Aeroporto e Praia de Faro"
    ],
    status: 'available'
  }
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find(property => property.slug === slug);
}

export function getAllPropertySlugs(): string[] {
  return properties.map(property => property.slug);
}


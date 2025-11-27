# Popular Times sl - Website Imobiliário com ChatBot

Website portfolio para a Popular Times sl, empresa de construção especializada em moradias em Faro, Portugal.

## 🚀 Características

- ✅ Website moderno e responsivo com Next.js 14
- ✅ ChatBot inteligente com integração OpenRouter (minimax/minimax-m2)
- ✅ Páginas de Imóveis com detalhes completos
- ✅ Sistema de chat contextual por imóvel
- ✅ Design moderno com Tailwind CSS
- ✅ TypeScript para segurança de tipos

## 📁 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx              # Layout principal com Navbar e Footer
│   ├── page.tsx                # Página inicial
│   ├── globals.css             # Estilos globais Tailwind
│   ├── imoveis/
│   │   ├── page.tsx            # Lista de imóveis
│   │   └── [slug]/
│   │       └── page.tsx        # Detalhes do imóvel
│   ├── sobre/
│   │   └── page.tsx            # Página sobre a empresa
│   ├── contacto/
│   │   └── page.tsx            # Página de contacto
│   └── api/
│       └── chat/
│           └── route.ts        # API do ChatBot
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx          # Barra de navegação
│   │   └── Footer.tsx          # Rodapé
│   ├── PropertyCard.tsx        # Card de imóvel
│   └── chat/
│       └── ChatBubble.tsx      # ChatBot UI
├── config/
│   └── site.ts                 # Configurações do site
├── data/
│   └── properties.ts           # Dados dos imóveis
└── public/
    └── images/                 # Logo e imagens dos imóveis
```

## 🛠️ Instalação

1. **Instalar dependências:**

```bash
npm install
```

2. **Configurar variável de ambiente:**

Cria um ficheiro `.env.local` na raiz do projeto e adiciona a tua API key da OpenRouter:

```env
OPENROUTER_API_KEY=your_api_key_here
```

Para obter uma API key gratuita:
- Visita https://openrouter.ai/
- Cria uma conta
- Obtém a tua API key

3. **Adicionar imagens:**

Organiza as imagens em pastas dentro de `public/images/`:

```
public/images/
├── logo.png
├── Moradia1 - Moradia Moderna Vista Oceano/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── 3.jpg
├── Moradia2 - Moradia Tradicional Centro/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── 3.jpg
└── Moradia3 - Moradia de Luxo com Piscina/
    ├── 1.jpg
    ├── 2.jpg
    └── 3.jpg
```

**Formato da pasta:** `MoradiaX - Nome da Moradia`  
**Nomes das imagens:** `1.jpg`, `2.jpg`, `3.jpg`, etc.

Ver `IMAGES_SETUP.md` para mais detalhes.

## 🚀 Executar o Projeto

```bash
# Modo desenvolvimento
npm run dev

# Build de produção
npm run build

# Executar build de produção
npm start
```

Acede a [http://localhost:3000](http://localhost:3000) no navegador.

## 📝 Personalização

### Adicionar/Editar Imóveis

Edita o ficheiro `data/properties.ts` para adicionar, remover ou modificar imóveis.

### Alterar Informações da Empresa

Edita o ficheiro `config/site.ts` para alterar:
- Nome da empresa
- Descrição
- Contactos
- Redes sociais

### Personalizar Cores

Edita o ficheiro `tailwind.config.js` para alterar o esquema de cores (atualmente azul).

## 🤖 ChatBot

O ChatBot está integrado em todas as páginas e tem contexto específico:

- **Página inicial**: Chat genérico sobre a empresa
- **Página de imóvel específico**: Chat com contexto do imóvel que o utilizador está a ver

O ChatBot responde em Português de Portugal e fornece informações sobre:
- Imóveis disponíveis
- Características dos imóveis
- Informações da empresa
- Contactos

## 📱 Responsividade

O website é totalmente responsivo e funciona perfeitamente em:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## 🌐 Deploy

### Vercel (Recomendado)

1. Faz push do código para GitHub
2. Importa o projeto no Vercel
3. Adiciona a variável de ambiente `OPENROUTER_API_KEY`
4. Deploy automático!

### Outras Plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js 14:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📧 Contacto

**Popular Times sl**
- Telefone: +351 922 263 315
- Email: populartimes.sl@gmail.com
- Instagram: @populartimes.sl

---

Desenvolvido com ❤️ em Next.js 14, React 18 e Tailwind CSS


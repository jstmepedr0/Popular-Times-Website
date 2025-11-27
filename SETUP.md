# 🚀 Guia de Configuração Rápida

## Passo 1: Instalar Dependências

```bash
npm install
```

## Passo 2: Configurar API Key da OpenRouter

**IMPORTANTE:** Cria manualmente um ficheiro chamado `.env.local` na raiz do projeto.

Conteúdo do ficheiro `.env.local`:

```env
OPENROUTER_API_KEY=your_api_key_here
```

### Como obter a API key (GRÁTIS):

1. Visita https://openrouter.ai/
2. Cria uma conta
3. Vai a "Keys" no menu
4. Cria uma nova API key
5. Copia e cola no ficheiro `.env.local`

**Nota:** O modelo `minimax/minimax-m2:free` é gratuito!

## Passo 3: Adicionar Imagens

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

**Formato:** `MoradiaX - Nome da Moradia` (onde X é o número)  
**Imagens:** `1.jpg`, `2.jpg`, `3.jpg` dentro de cada pasta

**Dica:** Se não tiveres as imagens agora, não há problema! O site tem um fallback que mostra placeholders cinzentos.

Ver `IMAGES_SETUP.md` para instruções detalhadas.

## Passo 4: Executar o Projeto

```bash
npm run dev
```

Abre http://localhost:3000 no navegador! 🎉

---

## ⚠️ Problemas Comuns

### ChatBot não funciona?

- Verifica se o ficheiro `.env.local` existe na raiz do projeto
- Verifica se a API key está correta
- Reinicia o servidor (`Ctrl+C` e depois `npm run dev`)

### Imagens não aparecem?

- Verifica se as pastas têm o formato correto: `MoradiaX - Nome da Moradia`
- Verifica se as imagens estão dentro das pastas (não na raiz de `public/images/`)
- Verifica se os nomes das imagens são: `1.jpg`, `2.jpg`, `3.jpg` (números simples)
- Verifica se as extensões estão corretas (.jpg ou .png)

### Erro de TypeScript?

```bash
npm install --save-dev typescript @types/react @types/node
```

---

## 📞 Precisa de Ajuda?

Contacta: populartimes.sl@gmail.com


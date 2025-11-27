# 🚀 Guia de Deploy no Vercel

## Passos para Deploy

### 1. Preparar o Repositório

Certifica-te de que todos os arquivos estão commitados:

```bash
git add .
git commit -m "Preparar para deploy"
git push
```

### 2. Deploy no Vercel

1. Acede a [vercel.com](https://vercel.com) e faz login
2. Clica em "Add New Project"
3. Importa o teu repositório do GitHub/GitLab
4. O Vercel detecta automaticamente que é um projeto Next.js

### 3. Configurar Variáveis de Ambiente

No painel do Vercel, vai a **Settings > Environment Variables** e adiciona:

```
OPENROUTER_API_KEY=your_api_key_here
```

**Importante:** Substitui `your_api_key_here` pela tua chave real da OpenRouter.

### 4. Configurações do Build

O Vercel deve detectar automaticamente:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (automático)
- **Output Directory:** `.next` (automático)
- **Install Command:** `npm install` (automático)

### 5. Deploy

Clica em **Deploy** e aguarda o processo terminar.

## ⚠️ Troubleshooting

### Erro 404 NOT_FOUND

Se receberes este erro, verifica:

1. **Build Logs:**
   - Vai ao painel do Vercel
   - Clica em "Deployments"
   - Abre o último deploy
   - Verifica os "Build Logs" para erros

2. **Arquivos Estáticos:**
   - Certifica-te de que a pasta `public/images/` está incluída no git
   - Verifica se não há arquivos muito grandes (>100MB)

3. **Variáveis de Ambiente:**
   - Verifica se `OPENROUTER_API_KEY` está configurada
   - Reinicia o deploy após adicionar variáveis

4. **Dependências:**
   - Verifica se `package.json` está correto
   - Tenta fazer `npm install` localmente para verificar erros

### Erro de Build

Se o build falhar:

1. Verifica os logs de build no Vercel
2. Tenta fazer build localmente: `npm run build`
3. Verifica se há erros de TypeScript: `npm run lint`

### Imagens Não Aparecem

1. Verifica se as pastas de imagens estão em `public/images/`
2. Verifica se os caminhos em `data/properties.ts` estão corretos
3. Certifica-te de que as imagens estão commitadas no git

## 📝 Checklist Antes do Deploy

- [ ] Todos os arquivos commitados
- [ ] `package.json` está correto
- [ ] `next.config.js` configurado
- [ ] `vercel.json` criado (opcional, mas recomendado)
- [ ] Variáveis de ambiente configuradas no Vercel
- [ ] Build local funciona: `npm run build`
- [ ] Imagens estão na pasta `public/images/`
- [ ] Caminhos de imagens em `data/properties.ts` estão corretos

## 🔄 Após o Deploy

1. Testa todas as páginas:
   - Página inicial (`/`)
   - Lista de imóveis (`/imoveis`)
   - Páginas individuais (`/imoveis/[slug]`)
   - Página de contacto (`/contacto`)
   - Página sobre (`/sobre`)

2. Testa o chatbot:
   - Abre o chat
   - Faz uma pergunta
   - Verifica se funciona corretamente

3. Verifica imagens:
   - Todas as imagens carregam?
   - Galerias funcionam?

## 📞 Suporte

Se continuar com problemas:
- Verifica os logs no painel do Vercel
- Consulta a [documentação do Vercel](https://vercel.com/docs)
- Verifica a [documentação do Next.js](https://nextjs.org/docs)


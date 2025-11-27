# Guia de Deploy no Vercel - Popular Times SL

## ✅ Verificações Antes do Deploy

O projeto já está configurado corretamente:
- ✅ `package.json` com engines especificando Node >= 18
- ✅ `next.config.js` configurado corretamente
- ✅ Build local testado e funcional
- ✅ `.nvmrc` criado para garantir versão Node correta
- ✅ `.vercelignore` criado
- ✅ Estrutura de rotas Next.js App Router correta

## 🚀 Passos para Deploy

### 1. Limpar Build Anterior (Local)
```bash
# Limpar cache do Next.js
rm -rf .next

# Ou no Windows PowerShell:
Remove-Item -Recurse -Force .next
```

### 2. Commitar e Fazer Push das Alterações
```bash
git add .
git commit -m "fix: configure project for Vercel deployment"
git push
```

### 3. Deploy no Vercel

#### Opção A: Via GitHub (Recomendado)
1. Vá para [vercel.com](https://vercel.com)
2. Faça login e clique em "Add New Project"
3. Importe o repositório do GitHub
4. **IMPORTANTE:** Configure as seguintes opções:
   - **Framework Preset:** Next.js (deve detectar automaticamente)
   - **Root Directory:** `./` (raiz do projeto)
   - **Build Command:** `npm run build` (padrão)
   - **Output Directory:** `.next` (padrão)
   - **Install Command:** `npm install` (padrão)
   - **Node Version:** 18.x (detectado pelo .nvmrc)

5. Adicione variáveis de ambiente (opcional):
   - `OPENROUTER_API_KEY` - se quiser ativar o chatbot com IA

6. Clique em "Deploy"

#### Opção B: Via Vercel CLI
```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Ou para produção diretamente
vercel --prod
```

### 4. Verificar o Deploy

Após o deploy, verifique:
- [ ] Página inicial (`/`) carrega corretamente
- [ ] Página de imóveis (`/imoveis`) funciona
- [ ] Páginas dinâmicas (`/imoveis/[slug]`) funcionam
- [ ] Página "Sobre" (`/sobre`) carrega
- [ ] Página "Contacto" (`/contacto`) carrega
- [ ] Imagens são carregadas
- [ ] CSS/Tailwind está aplicado

## 🔍 Resolução de Problemas

### Erro 404: NOT_FOUND

Se ainda receber erro 404, verifique no Vercel Dashboard:

1. **Vá para Deployments > Seu Último Deploy > Build Logs**
   - Veja se há erros no build
   - Verifique se todas as rotas foram geradas

2. **Vá para Settings > General**
   - Confirme que "Framework Preset" está como "Next.js"
   - Confirme que "Root Directory" está como `./`
   - Confirme que "Node.js Version" está como "18.x"

3. **Vá para Settings > Environment Variables**
   - Se estiver usando variáveis de ambiente, certifique-se de que estão configuradas

4. **Force Redeploy**
   - Vá para Deployments
   - Clique nos três pontos do último deploy
   - Selecione "Redeploy"

### Build Falhando

Se o build falhar:
```bash
# Teste localmente primeiro
npm run build

# Se falhar localmente, corrija os erros
# Se funcionar localmente mas falhar no Vercel, verifique:
# - Versão do Node (deve ser >= 18)
# - Variáveis de ambiente necessárias
```

### Imagens Não Carregam

Se as imagens não carregarem:
- Verifique se as imagens estão na pasta `public/`
- Verifique se os caminhos começam com `/` (ex: `/images/logo.png`)
- Verifique se as imagens foram commitadas ao Git

## 📝 Notas Importantes

- O Vercel detecta automaticamente projetos Next.js
- Não é necessário `vercel.json` para projetos Next.js simples
- O build acontece automaticamente a cada push no branch principal
- Variáveis de ambiente devem ser configuradas no Vercel Dashboard
- O chatbot funcionará sem a API key, mas sem respostas de IA

## 🆘 Ainda Com Problemas?

Se o erro 404 persistir:
1. Delete o projeto do Vercel
2. Crie um novo projeto do zero
3. Certifique-se de que está importando o repositório correto
4. Deixe o Vercel detectar automaticamente as configurações

## ✅ Checklist Final

Antes de fazer deploy, certifique-se:
- [ ] `npm run build` funciona localmente
- [ ] `npm run start` funciona localmente após build
- [ ] Todos os arquivos estão commitados no Git
- [ ] `.gitignore` está correto (não exclui arquivos necessários)
- [ ] Não há arquivos `vercel.json` inválidos


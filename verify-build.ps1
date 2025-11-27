# Script de Verificação do Build - Popular Times SL
# Execute este script para verificar se tudo está OK antes do deploy

Write-Host "🔍 VERIFICANDO PROJETO NEXT.JS..." -ForegroundColor Cyan
Write-Host ""

# Verificar se node_modules existe
if (Test-Path "node_modules") {
    Write-Host "✅ node_modules encontrado" -ForegroundColor Green
} else {
    Write-Host "❌ node_modules NÃO encontrado - Execute: npm install" -ForegroundColor Red
    exit 1
}

# Verificar arquivos essenciais
$arquivosEssenciais = @(
    "app/layout.tsx",
    "app/page.tsx",
    "next.config.js",
    "package.json",
    "tsconfig.json"
)

Write-Host ""
Write-Host "📁 Verificando arquivos essenciais..." -ForegroundColor Cyan

foreach ($arquivo in $arquivosEssenciais) {
    if (Test-Path $arquivo) {
        Write-Host "✅ $arquivo" -ForegroundColor Green
    } else {
        Write-Host "❌ $arquivo NÃO encontrado!" -ForegroundColor Red
        exit 1
    }
}

# Verificar se vercel.json existe (NÃO deve existir)
Write-Host ""
if (Test-Path "vercel.json") {
    Write-Host "⚠️  AVISO: vercel.json encontrado - Este arquivo deve ser REMOVIDO!" -ForegroundColor Yellow
    Write-Host "   Execute: Remove-Item vercel.json" -ForegroundColor Yellow
} else {
    Write-Host "✅ vercel.json não existe (correto!)" -ForegroundColor Green
}

# Limpar e fazer build
Write-Host ""
Write-Host "🧹 Limpando cache..." -ForegroundColor Cyan
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "🔨 Executando build..." -ForegroundColor Cyan
Write-Host ""

npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ ✅ ✅ BUILD CONCLUÍDO COM SUCESSO! ✅ ✅ ✅" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 Seu projeto está pronto para o Vercel!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Próximos passos:" -ForegroundColor Cyan
    Write-Host "1. Leia o arquivo ULTIMATE_FIX_VERCEL.md" -ForegroundColor White
    Write-Host "2. Delete o projeto atual do Vercel" -ForegroundColor White
    Write-Host "3. Crie um novo projeto do ZERO" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ BUILD FALHOU! Verifique os erros acima." -ForegroundColor Red
    Write-Host ""
    exit 1
}


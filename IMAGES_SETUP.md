# 📸 Guia de Organização de Imagens

## 📁 Estrutura de Pastas

Organiza as imagens dos imóveis em pastas dentro de `public/images/`:

```
public/images/
├── logo.png
├── Moradia1 - Moradia Moderna Vista Oceano/
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   └── ... (mais imagens conforme necessário)
├── Moradia2 - Moradia Tradicional Centro/
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   └── ...
└── Moradia3 - Moradia de Luxo com Piscina/
    ├── 1.jpg
    ├── 2.jpg
    ├── 3.jpg
    └── ...
```

## 📝 Formato do Nome da Pasta

**Formato:** `Moradia X - Nome da Moradia` (com espaço antes do número)

Onde:
- `X` = Número da moradia (1, 2, 3, etc.)
- `Nome da Moradia` = Título completo da moradia

**Exemplos:**
- `Moradia 1 - Horta das Figuras`
- `Moradia 2 - Moradia Tradicional Centro`
- `Moradia 3 - Moradia de Luxo com Piscina`

**Nota:** Podes usar `Moradia1` (sem espaço) ou `Moradia 1` (com espaço) - ambos funcionam!

## 🖼️ Nomes dos Ficheiros de Imagem

Dentro de cada pasta, podes usar:
- **Nomes numéricos:** `1.jpeg`, `2.jpeg`, `3.jpeg`, etc. (imagem principal aparece no card)
- **Formatos suportados:** `.jpg`, `.jpeg`, `.webp`, `.png`
- **Imagens adicionais:** `p1.webp`, `p2.webp`, etc. (para imagens especiais)

**Exemplo real:**
```
Moradia 1 - Horta das Figuras/
├── 1.jpeg
├── 2.jpeg
├── 3.jpeg
├── 4.jpeg
├── 5.jpeg
├── 6.jpeg
├── 7.jpeg
├── p1.webp
└── p2.webp
```

## ⚙️ Como Adicionar uma Nova Moradia

1. **Cria a pasta** em `public/images/`:
   ```
   Moradia4 - Nome da Nova Moradia
   ```

2. **Adiciona as imagens** dentro da pasta:
   ```
   Moradia4 - Nome da Nova Moradia/
   ├── 1.jpg
   ├── 2.jpg
   └── 3.jpg
   ```

3. **Adiciona a moradia** em `data/properties.ts`:
   ```typescript
   {
     slug: "moradia-nova",
     title: "Nome da Nova Moradia",
     folderName: "Moradia 4 - Nome da Nova Moradia",
     images: getImagesFromFolder("Moradia 4 - Nome da Nova Moradia", [
       "1.jpeg",
       "2.jpeg",
       "3.jpeg",
       "p1.webp"
     ]),
     // ... resto das propriedades
   }
   ```
   
   **Importante:** Especifica manualmente os nomes das imagens no array!

## 🔧 Personalização Avançada

**IMPORTANTE:** Sempre especifica os nomes das imagens manualmente no array:

```typescript
{
  folderName: "Moradia 1 - Horta das Figuras",
  images: getImagesFromFolder(
    "Moradia 1 - Horta das Figuras",
    [
      "1.jpeg",
      "2.jpeg", 
      "3.jpeg",
      "4.jpeg",
      "5.jpeg",
      "6.jpeg",
      "7.jpeg",
      "p1.webp",
      "p2.webp"
    ]
  ),
}
```

Isto permite usar qualquer formato (.jpeg, .webp, .png) e qualquer nome de ficheiro!

## ✅ Checklist

- [ ] Pasta criada com formato: `MoradiaX - Nome`
- [ ] Imagens dentro da pasta com nomes: `1.jpg`, `2.jpg`, `3.jpg`
- [ ] `folderName` atualizado em `data/properties.ts`
- [ ] Imagens testadas no site

## 📌 Notas Importantes

- **Nomes de pastas são sensíveis a maiúsculas/minúsculas**
- **Formatos suportados:** `.jpg`, `.jpeg`, `.webp`, `.png` (extensões em minúsculas)
- **A primeira imagem do array é a que aparece no card da lista**
- **Especifica sempre os nomes das imagens manualmente** no array `images`
- **Podes ter quantas imagens quiseres** - adiciona todas ao array!

---

**Precisa de ajuda?** Contacta: populartimes.sl@gmail.com



# 🤖 Guia de Configuração do ChatBot

## 📁 Ficheiro de Configuração

O ficheiro `config/chatbot.ts` contém todas as instruções e informações que o chatbot usa para responder aos clientes.

## ✏️ Como Personalizar o ChatBot

### 1. Editar Instruções Gerais

Abre `config/chatbot.ts` e edita a secção `instrucoes`:

```typescript
instrucoes: `
Você é um assistente virtual da Popular Times sl...
[Edita aqui as instruções gerais do chatbot]
`
```

**O que podes adicionar:**
- Regras de comportamento
- Tom de voz (formal, casual, etc.)
- Formato de respostas
- Limitações do que pode responder

### 2. Adicionar Informações da Empresa

Na secção `informacoesAdicionais`, adiciona:

```typescript
informacoesAdicionais: `
INFORMAÇÕES ADICIONAIS DA EMPRESA:

- Anos de experiência: X anos
- Número de projetos: X projetos concluídos
- Certificações: [lista]
- Processo de trabalho: [descrição]
- Garantias: [informação]

INFORMAÇÕES SOBRE OS IMÓVEIS:

- Tipos de moradias: [descrição]
- Áreas típicas: [localizações]
- Preços médios: [faixa de preços]
- Características padrão: [lista]

PERGUNTAS FREQUENTES:

Q: Quanto tempo demora a construção?
R: O tempo médio varia entre X e Y meses...

Q: Oferecem financiamento?
R: [Resposta]

Q: Fazem visitas aos terrenos?
R: Sim, oferecemos visitas gratuitas...
`
```

### 3. Personalizar Mensagens

Edita a secção `mensagens`:

```typescript
mensagens: {
  saudacao: "Olá! 👋 Como posso ajudar?",
  despedida: "Foi um prazer ajudar!...",
  semResposta: "Desculpe, não tenho essa informação...",
  contacto: "Para mais informações..."
}
```

## 🔄 Após Editar

**IMPORTANTE:** Sempre que editares `config/chatbot.ts`, tens que **reiniciar o servidor**:

1. Para o servidor: `Ctrl+C`
2. Inicia novamente: `npm run dev`

## 📝 Exemplos de Personalização

### Exemplo 1: Adicionar Informações sobre Processo

```typescript
informacoesAdicionais: `
PROCESSO DE CONSTRUÇÃO:

1. Consulta inicial gratuita
2. Projeto personalizado
3. Aprovação e contrato
4. Construção com acompanhamento
5. Entrega das chaves

TEMPO MÉDIO: 6-12 meses dependendo do projeto
`
```

### Exemplo 2: Adicionar FAQ

```typescript
informacoesAdicionais: `
PERGUNTAS FREQUENTES:

Q: Quanto custa construir uma moradia?
R: O preço varia entre €250.000 e €600.000 dependendo do tamanho e acabamentos.

Q: Oferecem garantia?
R: Sim, oferecemos garantia de 10 anos na estrutura e 2 anos nos acabamentos.

Q: Posso personalizar o projeto?
R: Sim, todos os projetos são personalizados conforme as necessidades do cliente.
`
```

### Exemplo 3: Mudar Tom de Voz

```typescript
instrucoes: `
Você é um assistente virtual da Popular Times sl...

REGRAS DE COMPORTAMENTO:
1. Use um tom amigável e descontraído (mas profissional)
2. Pode usar emojis ocasionalmente 😊
3. Seja entusiasta sobre os projetos
4. Use linguagem simples e acessível
...
`
```

## 🎯 Dicas

1. **Seja específico:** Quanto mais detalhes adicionares, melhor o chatbot responde
2. **Mantenha atualizado:** Atualiza as informações quando houver mudanças
3. **Teste:** Após editar, testa o chatbot para ver se as respostas estão corretas
4. **Seja claro:** Instruções claras = respostas melhores

## ⚠️ Limitações

- O chatbot usa o modelo `minimax/minimax-m2:free` (gratuito)
- Respostas limitadas a 500 tokens (~375 palavras)
- Não tem memória entre conversas (cada mensagem é independente)

## 🚀 Próximos Passos

1. Edita `config/chatbot.ts` com as tuas informações
2. Reinicia o servidor
3. Testa o chatbot no site
4. Ajusta conforme necessário

---

**Precisa de ajuda?** Contacta: populartimes.sl@gmail.com




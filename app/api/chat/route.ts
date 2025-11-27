import { NextRequest, NextResponse } from 'next/server';
import { Property } from '@/data/properties';
import { chatbotInstructions } from '@/config/chatbot';

export async function POST(request: NextRequest) {
  try {
    const { question, context } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: 'Pergunta é obrigatória' },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      console.error('OPENROUTER_API_KEY não está configurada');
      return NextResponse.json(
        { answer: chatbotInstructions.mensagens.semResposta },
        { status: 200 }
      );
    }

    // Construir o contexto para o LLM usando as instruções do chatbot
    let systemPrompt = chatbotInstructions.instrucoes;

    // Adicionar informações adicionais se existirem
    if (chatbotInstructions.informacoesAdicionais.trim()) {
      systemPrompt += `\n\n${chatbotInstructions.informacoesAdicionais}`;
    }

    // Se houver contexto de um imóvel específico, adicionar
    if (context) {
      const property = context as Property;
      systemPrompt += `\n\nO cliente está a visualizar o seguinte imóvel:

Título: ${property.title}
Preço: €${property.price.toLocaleString('pt-PT')}
Localização: ${property.location}
Tipo: ${property.type}
Descrição: ${property.description}
Quartos: ${property.bedrooms}
Casas de banho: ${property.bathrooms}
Área: ${property.area} m²
Características: ${property.features.join(', ')}
Status: ${property.status === 'available' ? 'Disponível' : property.status === 'reserved' ? 'Reservado' : 'Vendido'}

Responda às perguntas do cliente sobre este imóvel especificamente.`;
    }

    // Chamar a API da OpenRouter
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://populartimes.sl',
        'X-Title': 'Popular Times sl'
      },
      body: JSON.stringify({
        model: 'minimax/minimax-m2:free',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: question
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Erro da OpenRouter:', errorData);
      throw new Error('Erro ao comunicar com o serviço de IA');
    }

    const data = await response.json();
    const answer = data.choices[0]?.message?.content || chatbotInstructions.mensagens.semResposta;

    return NextResponse.json({ answer });

  } catch (error) {
    console.error('Erro na API de chat:', error);
    return NextResponse.json(
      { 
        answer: chatbotInstructions.mensagens.semResposta
      },
      { status: 200 }
    );
  }
}



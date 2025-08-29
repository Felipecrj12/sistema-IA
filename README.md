<img width="935" height="929" alt="image" src="https://github.com/user-attachments/assets/162c24af-3520-4c37-b0f0-d0b76b1d770e" />
melhore # Melhorador de Fotos com IA ![Screenshot do Projeto](screenshot.png) Uma aplicação web que utiliza técnicas de processamento de imagem simuladas por IA para melhorar fotos. Ajuste parâmetros como brilho, contraste, saturação e nitidez, e aplique efeitos especiais para transformar suas fotos em imagens profissionais. ## Recursos - **Upload de imagens**: Arraste e solte ou selecione uma imagem para processar - **Controles de ajuste**: - Brilho - Contraste - Saturação - Nitidez - **Efeitos de IA**: - Otimizado (padrão) - Noturno - Retrato - Natureza - Urbano - Artístico - **Visualização em tempo real**: Veja o antes e depois simultaneamente - **Comparação interativa**: Use o slider para comparar a imagem original com a melhorada - **Download**: Baixe sua foto melhorada em alta qualidade - **Interface responsiva**: Funciona em desktop e dispositivos móveis ## Tecnologias Utilizadas - HTML5 - CSS3 (com Flexbox e Grid) - JavaScript (Vanilla) - Font Awesome (ícones) ## Como Usar 1. Abra o arquivo index.html em qualquer navegador moderno 2. Clique em "Selecionar Arquivo" ou arraste e solte uma imagem na área designada 3. Ajuste os controles deslizantes conforme desejado 4. Clique no botão "Melhorar Foto com IA" para processar a imagem 5. Selecione um efeito de IA na seção de efeitos 6. Use o slider de comparação para ver as diferenças entre a original e a melhorada 7. Clique em "Baixar Foto Melhorada" para salvar o resultado ## Estrutura do Projeto melhorador-fotos-ia/ ├── index.html # Arquivo principal ├── README.md # Este arquivo └── screenshot.png # Captura de tela do projeto ## Personalização Você pode personalizar os efeitos de IA modificando as funções de filtro no arquivo JavaScript:
javascript
function applyEffectToEnhanced() {
    let effectFilter = '';
    
    switch(currentEffect) {
        case 'night':
            effectFilter = 'brightness(0.8) contrast(1.2) saturate(1.5) hue-rotate(-10deg)';
            break;
        case 'portrait':
            effectFilter = 'contrast(1.1) brightness(1.05) saturate(1.1) blur(0.5px)';
            break;
        // ... outros efeitos
    }
    
    // Aplicar filtro
}
Limitações
Este projeto é uma simulação que utiliza filtros CSS para demonstrar o conceito
Não utiliza inteligência artificial real (apenas efeitos visuais simulados)
O processamento ocorre inteiramente no navegador
Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.
Nota: Este projeto foi desenvolvido para fins de demonstração. Para um sistema real de melhoria de fotos com IA, seriam necessárias tecnologias mais avançadas como TensorFlow.js ou integração com APIs de IA especializadas.

Este README fornece uma visão geral completa do projeto, incluindo:
- Recursos principais
- Tecnologias utilizadas
- Instruções de uso
- Estrutura do projeto
- Possibilidades de personalização
- Limitações atuais
- Informações de licença
Melhorador de Fotos com IA - README
https://screenshot.png

Visão Geral
O Melhorador de Fotos com IA é uma aplicação web que permite aos usuários melhorar suas fotos usando tecnologia de inteligência artificial simulada. Com uma interface intuitiva, os usuários podem ajustar parâmetros de imagem, aplicar efeitos especiais e visualizar comparações antes/depois em tempo real.

Recursos Principais
Upload de imagens: Arraste e solte ou selecione imagens para processar

Controles avançados: Ajuste brilho, contraste, saturação e nitidez

Efeitos de IA: 6 diferentes efeitos pré-configurados:

Otimizado (padrão)

Noturno

Retrato

Natureza

Urbano

Artístico

Comparação interativa: Slider para comparar versão original e melhorada

Download: Baixe suas fotos melhoradas em alta qualidade

Visualização em tempo real: Veja os resultados enquanto ajusta os parâmetros

Tecnologias Utilizadas
Frontend:

HTML5

CSS3 (Flexbox, Grid, animações)

JavaScript Vanilla

Bibliotecas:

Font Awesome (ícones)

Recursos de IA:

Filtros CSS avançados

Processamento de imagem no navegador

Como Usar
Carregue uma imagem:

Clique em "Selecionar Arquivo" ou arraste e solte uma imagem na área designada

Ajuste os parâmetros:

Use os controles deslizantes para ajustar brilho, contraste, saturação e nitidez

Os valores são atualizados em tempo real

Aplique efeitos de IA:

Selecione um dos 6 efeitos disponíveis na seção "Efeitos de IA"

Processe a imagem:

Clique em "Melhorar Foto com IA" para aplicar as melhorias

Acompanhe o progresso na tela de processamento

Compare e baixe:

Use o slider de comparação para ver as diferenças

Clique em "Baixar Foto Melhorada" para salvar o resultado

Use o slider de comparação para ver as diferenças

Clique em "Baixar Foto Melhorada" para salvar o resultado

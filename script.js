// 1. LISTA DE OBJETOS: Guarda as perguntas, alternativas e os textos da história final
const perguntas = [
    {
        enunciado: "No início das suas tarefas diárias, você costuma usar Inteligência Artificial para buscar ideias ou acelerar processos?",
        alternativas: [
            {
                texto: "Sim, uso IA frequentemente para clarear minhas ideias e começar mais rápido.",
                afirmacao: "Você percebe a Inteligência Artificial como uma parceira de cocriação, usando-a para impulsionar sua produtividade inicial."
            },
            {
                texto: "Não, prefiro fazer meus rascunhos e pesquisas iniciais de forma totalmente tradicional.",
                afirmacao: "Você valoriza a autonomia do pensamento original e prefere construir suas próprias bases antes de buscar automações."
            }
        ]
    },
    {
        enunciado: "Ao revisar um código ou texto produzido por uma IA, qual é a sua postura?",
        alternativas: [
            {
                texto: "Confio na maior parte do que ela entrega e mudo poucos detalhes.",
                afirmacao: "Sua relação com a tecnologia é de muita confiança, o que agiliza suas entregas no dia a dia."
            },
            {
                texto: "Analiso criticamente e refaço as partes que considero incorretas ou artificiais.",
                afirmacao: "Você mantém um olhar crítico afiado, garantindo que o toque humano e a precisão técnica fiquem acima das respostas automatizadas."
            }
        ]
    },
    {
        enunciado: "Pensando no futuro do trabalho e dos estudos, como você enxerga o papel da IA?",
        alternativas: [
            {
                texto: "Acho que ela vai substituir muitas tarefas humanas e precisamos nos adaptar logo.",
                afirmacao: "Sua visão de futuro foca na adaptabilidade rápida diante de ferramentas que transformam o mercado."
            },
            {
                texto: "Acho que ela vai apenas complementar o que fazemos, sem nunca substituir o talento humano.",
                afirmacao: "Por fim, você defende que a essência e a sensibilidade humana permanecem insubstituíveis, independentemente do avanço tecnológico."
            }
        ]
    }
];

// Variáveis de controle do estado do quiz
let perguntaAtual = 0;
let historiaFinal = "";

// Pegando os elementos do HTML (Manipulação de DOM)
const textoPergunta = document.getElementById("texto-pergunta");
const botoesAlternativas = document.getElementById("botoes-alternativas");
const caixaPerguntas = document.getElementById("caixa-perguntas");
const caixaResultado = document.getElementById("caixa-resultado");
const textoResultado = document.getElementById("texto-resultado");

// 2. FUNÇÃO MENOR: Responsável por gerenciar a exibição de cada pergunta
function mostraPergunta() {
    // CONDICÃO DE PARADA: Se o quiz passou da última pergunta, mostra o resultado final
    if (perguntaAtual >= perguntas.length) {
        mostraResultado();
        return;
    }
    
    let objetoPerguntaAtual = perguntas[perguntaAtual];
    textoPergunta.textContent = objetoPerguntaAtual.enunciado;
    botoesAlternativas.textContent = ""; // Limpa os botões anteriores
    
    // 3. MÉTODOS DE MANIPULAÇÃO DO DOM: Criando os botões na tela dinamicamente
    objetoPerguntaAtual.alternativas.forEach((alternativa) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        
        // Adiciona o evento de clique no botão
        botao.addEventListener("click", () => {
            historiaFinal += alternativa.afirmacao + " "; // Guarda a escolha do usuário
            perguntaAtual++; // Avança o contador do quiz
            mostraPergunta(); // Avança para a próxima pergunta
        });
        
        botoesAlternativas.appendChild(botao);
    });
}

// 4. FUNÇÃO MENOR: Finaliza o quiz e exibe a reflexão baseada nas escolhas
function mostraResultado() {
    caixaPerguntas.style.display = "none";
    caixaResultado.style.display = "block";
    textoResultado.textContent = historiaFinal;
}

// Inicia o quiz assim que a página carrega
mostraPergunta();

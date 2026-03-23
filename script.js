var countQues = 0;
var lang;
var score = 0;
var userHistory = []; // Variável que guarda o histórico de respostas do utilizador

var AMAZONIAquestions = [
    { question: "Qual animal é conhecido como o 'rei da Amazônia'?", choices: ["A)Onça-pintada", "B)Tucano", "C)Boto-cor-de-rosa", "D)Macaco-aranha"], answer: 1 },
    { question: "Qual é a planta símbolo da Amazônia?", choices: ["A)Copaíba", "B)Sumaúma", "C)Buriti", "D)Pau-Brasil"], answer: 2 },
    { question: "O que caracteriza a alimentação do peixe-boi?", choices: ["A) É carnívoro e se alimenta de peixes","B) É onívoro, comendo tanto plantas quanto pequenos peixes","C) É herbívoro, se alimentando de algas, aguapés e capim aquático","D) É insetívoro, comendo principalmente insetos aquáticos"], answer: 3 },
    { question: "Qual característica distingue o jacaré-açu como predador?", choices: ["A) Ele é herbívoro e vive isolado","B)Ele caça exclusivamente durante a noite","C)É um predador de topo capaz de caçar outros grandes predadores","D)Alimenta-se apenas de insetos e pequenos roedores"], answer: 3 },
    { question: "Qual é a principal característica da planta buriti?", choices: ["A) Suas folhas são finas e longas.","B) Ela cresce em ambientes secos e áridos.","C) É uma palmeira que cresce em áreas alagadas","D) Produz flores de cores vivas durante o inverno."], answer: 3 },
    { question: "O que o tucano-toco costuma comer além de frutos?", choices: ["A)Ovos e filhotes de outras aves","B)Pequenos mamíferos e répteis","C)Apenas folhas e sementes","D)Peixes e pequenos crustáceos"], answer: 1 },
    { question: "Qual desses animais pode atingir até 135 kg?", choices: ["A) Peixe-boi","B) Jaguatirica","C) Onça-pintada","D) Tucano-toco"], answer: 3 },
    { question: "Na época chuvosa, qual animal se alimenta mais devido à maior disponibilidade de plantas?", choices: ["A) Jacaré-açu","B) Peixe-boi","C) Tucano-toco","D) Onça-pintada"], answer: 2 }
];

var PANTANALquestions = [
    { question: "Qual animal é famoso no Pantanal por sua habilidade de nadar?", choices: ["A)Ariranha", "B)Capivara", "C)Jacaré", "D)Cervo"], answer: 1 },
    { question: "Qual é o cervídeo de maior porte da América do Sul?", choices: ["A)Veado-catingueiro","B)Cervo-do-pantanal","C)Alce","D)Veado-mateiro"], answer: 2 },
    { question: "Qual é o maior mamífero terrestre do Brasil?", choices: ["A)Jaguatirica","B)Onça-pintada","C) Anta","D) Tamanduá-bandeira"], answer: 3 },
    { question: "Por que o dourado é conhecido como o “Rei do Rio”?", choices: ["A) Por ser um dos maiores peixes de água doce","B) Por sua coloração dourada e hábitos predadores","C) Porque se alimenta de algas e pequenos peixes","D) Por viver em grandes cardumes e ser inofensivo"], answer: 2 },
    { question: "Qual planta é comum na flora do Pantanal, adaptada às variações entre a estação seca e chuvosa?", choices: ["A) Vitória-régia","B) Mandacaru","C) Aguapé","D) Araucária"], answer: 3 }
];

var CERRADOquestions = [
    { question: "Qual é o maior canídeo da América do Sul?", choices: ["A) Lobo-guará","B) Raposa-do-campo","C) Coiote","D) Cachorro-do-mato"], answer: 1 },
    { question: "A seriema é uma ave típica de qual bioma brasileiro?", choices: ["A) Mata Atlântica","B) Amazônia","C) Cerrado","D) Caatinga"], answer: 3 },
    { question: "Em que tipo de ambiente o pirarucu costuma viver?", choices: ["A) Rios de águas turbulentas e corrente","B) Lagos e rios de águas calmas e claras","C) Oceanos de águas mornas","D) Manguezais costeiros"], answer: 2 },
    { question: "Qual planta é característica do Cerrado e conhecida por suas adaptações ao clima seco e ao solo ácido?", choices: ["A) Pau-Brasil","B) Candeia","C) Jatobá","D) Ipê"], answer: 4 },
    { question: "Qual é uma característica marcante das queixadas?", choices: ["A) Tamanho pequeno e vida solitária","B) Topete e o bater característico dos dentes","C) Pelagem listrada e hábitos noturnos","D) Habilidade de voar e caçar"], answer: 2 }
];
    
var CAATINGAquestions = [
    { question: "Qual planta é típica da Caatinga?", choices: ["Cactos", "Bromélias", "Copaíba", "Pau-Brasil"], answer: 1 },
    { question: "Qual é uma característica distintiva da jiboia-constritora?", choices: ["A) É peçonhenta e possui veneno poderoso","B) É uma serpente grande e não peçonhenta","C) Vive exclusivamente em ambientes aquáticos","D) É capaz de mudar de cor conforme o ambiente"], answer: 2 },
    { question: "Os macacos-prego são conhecidos por serem capazes de:", choices: ["A) Voar longas distâncias","B) Utilizar ferramentas para forrageio","C) Realizar migrações sazonais","D) Caçar em grupo como predadores"], answer: 2 },
    { question: "Qual é o segundo maior felídeo das Américas?", choices: ["A) Onça-pintada","B) Onça-parda","C) Jaguatirica","D) Leopardo"], answer: 2 },
    { question: "Qual é a dieta predominante do sagui-de-tufo-branco?", choices: ["A) Herbívora, com foco em folhas e frutas","B) Insetívora-gomívora","C) Carnívora, alimentando-se de pequenos vertebrados","D) Onívora, com uma dieta diversificada"], answer: 2 },
    { question: "Qual é o habitat preferido do pássaro buriti?", choices: ["A) Florestas tropicais","B) Cerrado","C) Regiões montanhosas","D) Áreas urbanas"], answer: 2 }
];
    
var MATA_ATLANTICAquestions = [
    { question: "Qual é o nome científico da jaguatirica?", choices: ["A) Panthera onca","B) Felis concolor","C) Leopardus pardalis","D) Lynx rufus"], answer: 3 },
    { question: "Qual é o principal habitat da capivara?", choices: ["A) Florestas densas","B) Ambientes desérticos","C) Áreas semiaquáticas próximas a cursos de água","D) Montanhas e altitudes elevadas"], answer: 3 },
    { question: "Qual é a dieta do tamanduá-bandeira?", choices: ["A) Herbívora, focando em folhas e frutos","B) Carnívora, alimentando-se de pequenos vertebrados","C) Insetívora, com preferência por formigas e cupins","D) Onívora, consumindo uma variedade de alimentos"], answer: 3 },
    { question: "Como a traíra captura suas presas?", choices: ["A) Mergulhando e nadando rapidamente","B) Esperando a presa imóvel e dando um bote rápido","C) Usando iscas para atrair os peixes","D) Atacando em grupo para cercar as presas"], answer: 2 },
    { question: "Qual é uma das árvores mais emblemáticas da Mata Atlântica?", choices: ["A) Araucária","B) Pau-Brasil","C) Castanheira","D) Jequitibá"], answer: 0 },
    { question: "Qual característica se destaca na capivara?", choices: ["A) Maior roedor vivente, podendo atingir até 100 kg", "B) Pequeno mamífero com hábito aquático", "C) Se alimenta exclusivamente de peixes", "D) Vive de forma solitária e territorial"], answer: 1 },
    { question: "Qual das opções descreve a alimentação da Traíra?", choices: ["A) Herbívora, consumindo plantas aquáticas", "B) Onívora, comendo frutas e insetos", "C) Carnívora, se alimentando de pequenos peixes, rãs e insetos", "D) Detritívora, comendo matéria orgânica em decomposição"], answer: 3 },
    { question: "Como o tamanduá-bandeira captura suas presas?", choices: ["A) Usa suas garras para escavar formigueiros e capturar formigas com sua língua longa", "B) Nade rapidamente atrás das presas", "C) Usa armadilhas feitas de folhas", "D) Espera pacientemente que as presas se aproximem"], answer: 1 }
];
    
var PAMPAquestions = [
    { question: "Qual é uma das características distintivas do zorrilho?", choices: ["A) Ele é um animal herbívoro.","B) Ele pode produzir uma substância fétida como defesa.","C) Ele vive em grandes grupos familiares.","D) Ele se alimenta apenas de frutas."], answer: 2 },
    { question: "O que é notável sobre o ninho do joão-de-barro?", choices: ["A) É feito de palha e folhas.","B) Tem formato de forno e é feito de barro.","C) É construído em buracos de árvores.","D) É feito de penas e espuma."], answer: 2 },
    { question: "Qual é a característica que diferencia o sapinho-admirável-de-barriga-vermelha dos outros anfíbios?", choices: ["A) Ele foi descoberto recentemente pela ciência, em 2006.","B) Ele vive apenas em ambientes aquáticos.","C) Ele é um predador de topo em seu habitat.","D) Ele tem pele escamosa."], answer: 1 },
    { question: "Qual é o habitat típico do preá?", choices: ["A) Somente em florestas tropicais.","B) Exclusivamente em desertos.","C) Em áreas abertas, como campos e savanas.","D) Apenas em regiões montanhosas."], answer: 3 },
    { question: "Qual é uma das plantas características da flora do Pampa?", choices: ["A) Palmeira-juçara","B) Grama-de-tapete","C) Capim-laranja","D) Araucária"], answer: 3 }
];

// Inicialização do ecrã
document.getElementById("score").textContent = "Pontuação: " + 0;
document.querySelector(".view-results").style.display = "none";
document.querySelector(".quiz").style.display = "none";
document.querySelector(".final-result").style.display = "none";

// Função utilitária para renderizar as perguntas
function renderQuestion() {
    document.getElementById("ques-left").textContent = "Pergunta: " + (countQues + 1) + "/" + window[lang].length;
    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (let i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];
    }
}

// Evento de clique no botão de iniciar o quiz (Testar Conhecimentos)
document.querySelector(".choose-lang").addEventListener("click", function (e) {
    e.preventDefault(); 
    
    lang = document.getElementById("biome").value + "questions";
    
    document.getElementById("wrapper").style.display = "none"; 
    document.querySelector(".quiz").style.display = "block"; 
    
    window.scrollTo(0, 0); 
    renderQuestion(); // Chama a função render para popular os dados
});

// Evento de clique para enviar resposta
document.querySelector(".submit-answer").addEventListener("click", function () {
    // Impede erro caso clique e não tenha nada marcado
    let selectedInput = document.querySelector('input[name="options"]:checked');
    if(!selectedInput) return; 

    let selectedOption = selectedInput.value;
    let correctOption = window[lang][countQues].choices[window[lang][countQues].answer - 1];
    let isCorrect = (selectedOption === correctOption);

    // Salva a jogada
    userHistory.push({
        question: window[lang][countQues].question,
        userAnswer: selectedOption,
        correctAnswer: correctOption,
        isCorrect: isCorrect
    });

    // Atualiza pontuação
    if (isCorrect) {
        score += 10;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle correct'>" + (countQues + 1) + "</div>";
    } else {
        score -= 5;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle incorrect'>" + (countQues + 1) + "</div>";
    }
    document.getElementById("score").textContent = "Pontuação: " + score;

    // Avança a pergunta ou finaliza
    if (countQues < window[lang].length - 1) {
        countQues++;
        renderQuestion(); // Renderiza a próxima pergunta apenas se ela existir
    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";
    }
});

// Evento de clique para ver os resultados finais
document.querySelector(".view-results").addEventListener("click", function () {
    document.querySelector(".quiz").style.display = "none"; 
    document.querySelector(".final-result").style.display = "block";
    window.scrollTo(0, 0); 
    
    let biomeName = document.getElementById("biome").options[document.getElementById("biome").selectedIndex].text;
    document.querySelector(".solved-ques-no").innerHTML = "Você resolveu " + (countQues + 1) + " perguntas sobre " + biomeName;

    let correctCount = document.getElementById("ques-view").getElementsByClassName("correct").length;
    document.querySelector(".right-wrong").innerHTML = correctCount + " estavam Certas e " + ((countQues + 1) - correctCount) + " estavam Erradas";

    document.getElementById("display-final-score").innerHTML = "Sua Pontuação Final é: " + score;

    // Calcula porcentagem de acertos
    let successRate = correctCount / (countQues + 1);

    if (successRate > 0.8) {
        document.querySelector(".remark").innerHTML = "Comentário: Excepcional! :)";
    } else if (successRate > 0.6) {
        document.querySelector(".remark").innerHTML = "Comentário: Bom, continue melhorando.";
    } else if (successRate > 0.4) {
        document.querySelector(".remark").innerHTML = "Comentário: Satisfatório, aprenda mais.";
    } else {
        document.querySelector(".remark").innerHTML = "Comentário: Insatisfatório, tente novamente.";
    }

    // ==== GERAÇÃO DO GABARITO ====
    let reviewContainer = document.getElementById("review-container");
    if (!reviewContainer) {
        reviewContainer = document.createElement("div");
        reviewContainer.id = "review-container";
        reviewContainer.className = "detailed-review";
        let restartBtn = document.getElementById("restart");
        restartBtn.parentNode.insertBefore(reviewContainer, restartBtn);
    }

    let reviewHTML = "<h3 class='review-title'>Gabarito das Questões</h3>";
    for (let i = 0; i < userHistory.length; i++) {
        let item = userHistory[i];
        let statusClass = item.isCorrect ? "correct-review" : "incorrect-review";
        let badgeText = item.isCorrect ? "✅ ACERTOU" : "❌ ERROU";

        reviewHTML += "<div class='review-item " + statusClass + "'>";
        
        // Cabeçalho do Cartão 
        reviewHTML += "<div class='review-header'>";
        reviewHTML += "<span class='review-badge'>" + badgeText + "</span>";
        reviewHTML += "<span class='review-qnum'>Questão " + (i + 1) + "</span>";
        reviewHTML += "</div>";
        
        // A Pergunta
        reviewHTML += "<div class='review-question'>" + item.question + "</div>";
        
        // As Respostas
        reviewHTML += "<div class='review-answers'>";
        if (item.isCorrect) {
            reviewHTML += "<div class='answer-row success-bg'><span class='answer-label'>Sua resposta:</span> " + item.userAnswer + "</div>";
        } else {
            reviewHTML += "<div class='answer-row error-bg'><span class='answer-label'>Você marcou:</span> <strike>" + item.userAnswer + "</strike></div>";
            reviewHTML += "<div class='answer-row success-bg'><span class='answer-label'>Resposta certa:</span> " + item.correctAnswer + "</div>";
        }
        reviewHTML += "</div>"; 
        reviewHTML += "</div>"; 
    }
    reviewContainer.innerHTML = reviewHTML;
});

// Evento para o botão de Sair do Quiz
document.getElementById("exit-quiz").addEventListener("click", function () {
    if (confirm("Tem certeza que deseja sair? O seu progresso será perdido.")) {
        window.location.href = "index.html";
    }
});

// Evento para reiniciar o quiz
document.getElementById("restart").addEventListener("click", function () {
    location.reload();
});

// Smooth Scroll
$(document).on('click', 'a[href^="#"]', function (event) {
    if(!$(this).hasClass('choose-lang')){ 
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    }
});
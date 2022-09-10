var carta1 = {
    nome: "Seiya de Pegasus",
    imagem:"../assets/Seiya_de_Pegasus.jpg",
    atributos: {
        soco: 49,
        chute: 20,
        conhecimento: 31
    }
};

var carta2 = {
    nome: "Hyoga de Cisne",
    imagem:"../assets/Hyoga_de_Cisne.jpg",
    atributos: {
        soco: 49,
        chute: 30,
        conhecimento: 20
    }
};

var carta3 = {
    nome: "Shiryu de Dragão",
    imagem:"../assets/Shiryu_de_Dragão.jpg",
    atributos: {
        soco: 41,
        chute: 20,
        conhecimento: 23
    }
};

var carta4 = {
    nome: "Aldebaran de Touro",
    imagem:"../assets/Aldebaran_de_Touro.jpg",
    atributos: {
        soco: 47,
        chute: 19,
        conhecimento: 29
    }
};

var cartas = [carta1, carta2, carta3, carta4];

var cartaMaquina = 0
var cartaJogador = 0

//sorteia a carta
function sortearCarta() {
    cartaJogador = cartas[parseInt(Math.random() * 4)];
    console.log(cartaJogador);
  
    var numeroCartaMaquina = parseInt(Math.random() * 4);
    while (cartas[numeroCartaMaquina] == cartaJogador) {
      numeroCartaMaquina = parseInt(Math.random() * 4);
    }
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
 }

// exibe as opções de atributo
function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
    
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + "<br></br>";
    }
    opcoes.innerHTML = opcoesTexto;
}

//obtem o atrituto selecionado
function obtemAtritutoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0;  i < radioAtributos.length; i++){
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value;
        }
    }
}

//função jogar
function jogar() {
    var atributoSelecionado = obtemAtritutoSelecionado();
    var divResultado = document.getElementById("resultado");

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Você venceu 🥳🏆🥇</p>"
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Você perdeu. A carta do adversário era maior 😔😔😔</p>"
    } else {
        htmlResultado = "<p class='resultado-final'>Empate! Tente de novo.</p>"
    }
    divResultado.innerHTML = htmlResultado;

    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina()
}

//função para exibir carta do jogador
function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura = '<img src="../assets/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    // exibe as opções de atributo
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " +
        cartaJogador.atributos[atributo] + "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}<p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

//função para exibir carta da maquina
function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura = '<img src="../assets/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    // exibe as opções de atributo
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " +
        cartaMaquina.atributos[atributo] + "</p>";
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}<p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

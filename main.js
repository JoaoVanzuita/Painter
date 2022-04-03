let corClicada;
const paleta = document.getElementById("paleta")
const desenho = document.getElementById("desenho");

function criarDivsPaleta() {

    let cores = ["black", "blue", "purple", "yellow", "red", "green", "white"];


    cores.forEach(cor => {

        let divCores = document.createElement('div');

        divCores.innerHTML = `<div class="cores" style="background-color:${cor}"></div>`;

        paleta.appendChild(divCores);

    })

}

function criarDivsDesenho() {

    let html = "<div class='espaco'></div>";

    for (i = 0; i < 1081; i++) {

        let divEspaco = document.createElement('div');
        divEspaco.innerHTML = html;

        desenho.appendChild(divEspaco);

    }

}

function cliquePaleta() {

    //Uma função dentro de uma função dentro de uma função dentro de uma função dentro de outra função :/

    let divsPaleta = paleta.querySelectorAll("div")

    paleta.addEventListener("click", event => {

        divsPaleta.forEach(div => {

            div.style.borderColor = "black"

        })

        event.target.style.borderColor = "yellow"

        corClicada = event.target.style.backgroundColor

    })

}


function cliqueDesenho() {

    //ao clicar em uma div do desenho, pegar a cor armazenada na variável corAtual e colocar no background color do target

}

criarDivsPaleta()
criarDivsDesenho()
cliquePaleta()

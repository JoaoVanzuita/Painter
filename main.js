let corClicada;
const paleta = document.getElementById("paleta")
const desenho = document.getElementById("desenho");

function criarDivsPaleta() {

    let cores = ["black", "blue", "purple", "yellow", "red", "green", "cyan", "white"];


    cores.forEach(cor => {

        let divCores = document.createElement('div');

        divCores.innerHTML = `<div class="cores" style="background-color:${cor}"></div>`;

        paleta.appendChild(divCores);

    })

}

function criarDivsDesenho() {

    let html = "<div class='espaco'></div>";

    for (i = 0; i < 1071; i++) {

        let divEspaco = document.createElement('div');
        divEspaco.innerHTML = html;

        desenho.appendChild(divEspaco);

    }

}

function cliquePaleta() {

    let divsPaleta = paleta.querySelectorAll("div")

    divsPaleta.forEach(div => {

        div.addEventListener("click", event => {

            divsPaleta.forEach(div => {

                div.style.borderColor = "black"

            })

            event.target.style.border = "2px solid yellow"

            corClicada = event.target.style.backgroundColor

            let corAtual = document.getElementById("corAtual")

            corAtual.style.backgroundColor = corClicada

        })

    })

}


function cliqueDesenho() {

    let divsDesenho = desenho.querySelectorAll("div")

    divsDesenho.forEach(div => {

        div.addEventListener("click", event => {

            div.style.backgroundColor = corClicada
        })

    })

}

criarDivsPaleta()
criarDivsDesenho()
cliquePaleta()
cliqueDesenho()

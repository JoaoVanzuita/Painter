function criarDivsPaleta() {

    let cores = ["black", "blue", "purple", "yellow", "red", "green", "white"];

    let divPaleta = document.getElementById('paleta');

    cores.forEach(cor => {

        let divCores = document.createElement('div');

        divCores.innerHTML = `<div class="cores" style="background-color:${cor}"></div>`;

        divPaleta.appendChild(divCores);

    })

}

function criarDivsDesenho() {

    let html = "<divp class='espaco'></divp>";
    let divDesenho = document.getElementById('desenho');

    for (i = 0; i < 1081; i++) {

        let divEspaco = document.createElement('div');
        divEspaco.innerHTML = html;

        divDesenho.appendChild(divEspaco);

    }

}

criarDivsPaleta()
criarDivsDesenho()

function cliquePaleta() {


    //ao clicar na div cores, pegar background color do target e guardar em uma variável corAtual
    //colocar borda amarela na cor clicada
}


function cliqueDesenho() {

    //ao clicar em uma div do desenho, pegar a cor armazenada na variável corAtual e colocar no background color do target

}

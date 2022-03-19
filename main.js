function criarCores(){

  let cores = ["black","blue","purple", "yellow", "red", "green", "white"];

  let divPaleta = document.getElementById('paleta');

  for(i=0; i < cores.length; i++){

    let divCores = document.createElement('div');

    divCores.innerHTML =`<div class="cores" style="background-color:${cores[i]}"></div>`;

    divPaleta.appendChild(divCores);

  }

}

function criarDivsDesenho(){

  let html = "<div class='espaco'></div>";
  let divDesenho = document.getElementById('desenho');

  for(i=0; i < 1081; i++){


    let divEspaco = document.createElement('div');
    divEspaco.innerHTML = html;

    divDesenho.appendChild(divEspaco);

  }

}

criarCores()
criarDivsDesenho()

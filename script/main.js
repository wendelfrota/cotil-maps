/*function ativarDiv(divId) {  
    var divs = document.querySelectorAll('.ativa');
    for (var i = 0; i < divs.length; i++) {
      if (divs[i].id !== divId) {
        divs[i].classList.remove("ativa");
      }
    }
    
    var div = document.getElementById(divId);
    div.classList.toggle("ativa");
  }*/


document.getElementById("form").addEventListener("reset", function () {
  document.getElementById("rota-1").style.cssText = ""
  document.getElementById("rota-2").style.cssText = ""
  document.getElementById("rota-3").style.cssText = ""
  document.getElementById("rota-4").style.cssText = ""
  document.getElementById("rota-5").style.cssText = ""
  document.getElementById("imagem-id").remove();
  document.getElementById("resultado").innerText = "Escolha as opções de saída e de chegada."
})


function removeOn() {
  document.getElementById("rota-1").style.cssText = ""
  document.getElementById("rota-2").style.cssText = ""
  document.getElementById("rota-3").style.cssText = ""
  document.getElementById("rota-4").style.cssText = ""
  document.getElementById("rota-5").style.cssText = ""
}

function addImg(imagem) {
  if (!document.getElementById("imagem-id")) {
    imagem.id = "imagem-id";
    document.getElementById("rota-img").appendChild(imagem);
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var saida = document.getElementsByName("saida")[0].value;
  var chegada = document.getElementsByName("chegada")[0].value;
  var imagem = document.createElement("img");
  imagem.src = "img/ponteiro.png";
  var rotaImg = document.getElementById("rota-img");

  if (saida === "academico" && chegada === "administrativo") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 8.26%; top: 54.6%; left: 7.46%;"
    document.getElementById("resultado").innerText = "Caso você esteja no segundo andar, utilize a escadaria principal para descer. Siga em frente e você chegará ao seu destino."
    rotaImg.style.cssText = "position: absolute; left: 13.2%; top: 49.2%; z-index: 99999;"


  } else if (saida === "administrativo" && chegada === "academico") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 8.26%; top: 54.6%; left: 7.46%;"
    document.getElementById("resultado").innerText = "Saia pela porta localizada entre a APM e a Secretaria. Siga em frente e você chegará ao seu destino."
    rotaImg.style.cssText = "position: absolute; left: 4.93%; top: 49.2%; z-index: 99999;"


  } else if (saida === "academico" && chegada === "restaurante universitario") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 10.66%; top: 38.8%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 29.6%; left: 18.13%; height: 9%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "A rota mais rápida é utilizando a saída do lado esquerdo do edifício. Após sair do prédio, o Restaurante Universitário (RU) estará logo em frente. Para entrar, siga reto, vire à esquerda e você chegará ao seu destino."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 24.4%; z-index: 99999;"


  } else if (saida === "restaurante universitario" && chegada === "academico") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 10.66%; top: 38.8%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 29.6%; left: 18.13%; height: 9%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Ao sair do Restaurante Universitário (RU), vire à direita e verá o Prédio Acadêmico. O Prédio possui uma entrada na direita, uma central e uma na esquerda. Escolha uma e você chegará ao seu destino."
    rotaImg.style.cssText = "position: absolute; left: 4.93%; top: 33.4%; z-index: 99999;"


  } else if (saida === "administrativo" && chegada === "restaurante universitario") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 0.26%; top: 31.8%; left: 18.13%; height: 23.6%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "O trajeto mais rápido até o Restaurante Universitário (RU) é pela saída frontal do Prédio Administrativo. Após sair do Prédio, vire à esquerda e continue reto e você chegará ao seu destino."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 24.4%; z-index: 99999;"


  } else if (saida === "restaurante universitario" && chegada === "administrativo") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 0.26%; top: 31.8%; left: 18.13%; height: 23.6%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após sair do Restaurante Universitário (RU), vire à esquerda e em seguida à direita. Siga reto até a entrada principal e você chegará ao seu destino."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 49.2%; z-index: 99999;"


  } else if (saida === "biblioteca" && chegada === "academico") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 14.93%; top: 54.6%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("resultado").innerText = "Após sair, vire à direita e siga reto. Suba as escadas e continue reto até se deparar com o estacionamento ou o quiosque. Vire à direita e siga reto até a entrada do Prédio Administrativo. Entre no prédio, siga em frente até a entrada do Prédio Acadêmico e você chegará ao seu destino."
    rotaImg.style.cssText = "position: absolute; left: 4.93%; top: 246px; z-index: 99999;"


  } else if (saida === "academico" && chegada === "biblioteca") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 14.93%; top: 54.6%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 71.6%; z-index: 99999;"


  } else if (saida === "biblioteca" && chegada === "administrativo") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4%; top: 54.6%; left: 18.4%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 49.2%; z-index: 99999;"


  } else if (saida === "administrativo" && chegada === "biblioteca") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4%; top: 54.6%; left: 18.4%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 71.6%; z-index: 99999;"


  } else if (saida === "entrada-p" && chegada === "biblioteca") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 71.6%; z-index: 99999;"


  } else if (saida === "biblioteca" && chegada === "entrada-p") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 90.4%; z-index: 99999;"


  } else if (saida === "entrada-p" && chegada === "academico") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 14.93%; top: 54.6%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 4.93%; top: 49.2%; z-index: 99999;"


  } else if (saida === "academico" && chegada === "entrada-p") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 14.93%; top: 54.6%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 90.4%; z-index: 99999;"


  } else if (saida === "administrativo" && chegada === "entrada-p") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4%; top: 54.6%; left: 18.4%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 90.4%; z-index: 99999;"


  } else if (saida === "entrada-p" && chegada === "administrativo") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4%; top: 54.6%; left: 18.4%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 49.2%; z-index: 99999;"


  } else if (saida === "restaurante universitario" && chegada === "entrada-p") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4.26%; top: 54.6%; left: 18.13%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("rota-5").style.cssText = "width: 0.26%; top: 31.8%; left: 18.13%; height: 23.6%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 90.4%; z-index: 99999;"


  } else if (saida === "entrada-p" && chegada === "restaurante universitario") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4.26%; top: 54.6%; left: 18.13%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("rota-5").style.cssText = "width: 0.26%; top: 31.8%; left: 18.13%; height: 23.6%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 24.4%; z-index: 99999;"


  } else if (saida === "biblioteca" && chegada === "restaurante universitario") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4.26%; top: 54.6%; left: 18.13%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 31.8%; left: 18.13%; height: 23.6%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 24.4%; z-index: 99999;"


  } else if (saida === "restaurante universitario" && chegada === "biblioteca") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4.26%; top: 54.6%; left: 18.13%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 31.8%; left: 18.13%; height: 23.6%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 71.6%; z-index: 99999;"


  } else if (saida === "academico" && chegada === "quadras") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4.4%; top: 54.6%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 9.2%; top: 16.2%; z-index: 99999;"


  } else if (saida === "quadras" && chegada === "academico") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4.4%; top: 54.6%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 4.93%; top: 49.2%; z-index: 99999;"


  } else if (saida === "restaurante universitario" && chegada === "quadras") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 7.2%; top: 21.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 21.6%; left: 18%; height: 8%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 9.2%; top: 16.2%; z-index: 99999;"


  } else if (saida === "quadras" && chegada === "restaurante universitario") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 7.2%; top: 21.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 21.6%; left: 18%; height: 8%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 24.4%; z-index: 99999;"


  } else if (saida === "administrativo" && chegada === "quadras") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 2%; top: 54.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 9.2%; top: 16.2%; z-index: 99999;"


  } else if (saida === "quadras" && chegada === "administrativo") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 2%; top: 54.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 12.53%; top: 49.2%; z-index: 99999;"


  } else if (saida === "quadras" && chegada === "entrada-p") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 11.06%; top: 54.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("rota-5").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 90.4%; z-index: 99999;"


  } else if (saida === "entrada-p" && chegada === "quadras") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 11.06%; top: 54.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("rota-5").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 9.2%; top: 16.2%; z-index: 99999;"


  } else if (saida === "quadras" && chegada === "biblioteca") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 11.06%; top: 54.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 71.6%; z-index: 99999;"


  } else if (saida === "biblioteca" && chegada === "quadras") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 11.06%; top: 54.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 9.2%; top: 16.2%; z-index: 99999;"


  } else if (saida === "cantina" && chegada === "restaurante universitario") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 15.2%; top: 41.6%; left: 18%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 31.8%; left: 18%; height: 10.6%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 24.4%; z-index: 99999;"


  } else if (saida === "restaurante universitario" && chegada === "cantina") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 15.2%; top: 41.6%; left: 18%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 31.8%; left: 18%; height: 10.6%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 31.06%; top: 36.2%; z-index:99999;"


  } else if (saida === "cantina" && chegada === "administrativo") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 15.2%; top: 41.6%; left: 18%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 41.6%; left: 18%; height: 13.8%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 49.2%; z-index: 99999;"


  } else if (saida === "administrativo" && chegada === "cantina") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 15.2%; top: 41.6%; left: 18%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 41.6%; left: 18%; height: 13.8%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 31.06%; top: 36.2%; z-index:99999;"


  } else if (saida === "cantina" && chegada === "academico") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 15.2%; top: 41.6%; left: 18%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 41.6%; left: 18%; height: 13.8%; border-left: 4px dotted black;"
    document.getElementById("rota-3").style.cssText = "width: 11.06%; top: 54.6%; left: 7.46%;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 4.93%; top: 49.2%; z-index: 99999;"


  } else if (saida === "academico" && chegada === "cantina") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 15.2%; top: 41.6%; left: 18%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 41.6%; left: 18%; height: 13.8%; border-left: 4px dotted black;"
    document.getElementById("rota-3").style.cssText = "width: 11.06%; top: 54.6%; left: 7.46%;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 31.06%; top: 36.2%; z-index:99999;"


  } else if (saida === "cantina" && chegada === "quadras") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 20.66%; top: 41.4%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 20.2%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 9.2%; top: 16.2%; z-index: 99999;"


  } else if (saida === "quadras" && chegada === "cantina") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 20.66%; top: 41.4%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 20.2%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 31.06%; top: 36%; z-index:99999;"


  } else if (saida === "cantina" && chegada === "biblioteca") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 24%; top: 77%; left: 37.86%; z-index: 1;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 45.2%; left: 37.86%; height: 32.6%; border-left: 4px dotted black;"
    document.getElementById("rota-3").style.cssText = "width: 3.2%; top: 45.2%; left: 35.2%;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 71.6%; z-index: 99999;"


  } else if (saida === "biblioteca" && chegada === "cantina") {
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 24%; top: 77%; left: 37.86%; z-index: 1;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 45.2%; left: 37.86%; height: 32.6%; border-left: 4px dotted black;"
    document.getElementById("rota-3").style.cssText = "width: 3.2%; top: 45.2%; left: 35.2%;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 32.8%; top: 39.8%; z-index: 99999;"


  } else if (saida === "cantina" && chegada === "entrada-p") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 24%; top: 77%; left: 37.86%; z-index: 1;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 45.2%; left: 37.86%; height: 32.6%; border-left: 4px dotted black;"
    document.getElementById("rota-3").style.cssText = "width: 3.2%; top: 45.2%; left: 35.2%;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 90.4%; z-index: 99999;"


  } else if (saida === "entrada-p" && chegada === "cantina") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 24%; top: 77%; left: 37.86%; z-index: 1;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 45.2%; left: 37.86%; height: 32.6%; border-left: 4px dotted black;"
    document.getElementById("rota-3").style.cssText = "width: 3.2%; top: 45.2%; left: 35.2%;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "."
    rotaImg.style.cssText = "position: absolute; left: 32.8%; top: 39.8%; z-index: 99999;"
  }
}); 
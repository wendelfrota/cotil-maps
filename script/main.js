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
  document.getElementById("resultado").innerText = "Escolha um trajeto ou apenas uma opção para obter informações sobre o local."
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
    document.getElementById("rota-1").style.cssText = "width: 9%; top: 38.8%; left: 7.46%;"
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
    document.getElementById("rota-1").style.cssText = "width: 3.26%; top: 39.3%; left: 15.13%; height: 16%; border-right: 4px dotted black; border-top: 4px dotted black; border-bottom: none;"
    document.getElementById("resultado").innerText = "Após sair do Restaurante Universitário (RU), vire à esquerda e em seguida à direita. Siga reto até a entrada principal e você chegará ao seu destino."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 49.2%; z-index: 99999;"


  } else if (saida === "biblioteca" && chegada === "academico") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 14.93%; top: 54.6%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("resultado").innerText = "Após sair, vire à direita e siga reto. Suba as escadas e continue até se deparar com o estacionamento ou o quiosque. Vire à direita e siga reto até a entrada do Prédio Administrativo. Entre no prédio, siga em frente até a entrada do Prédio Acadêmico e você chegará ao seu destino."
    rotaImg.style.cssText = "position: absolute; left: 4.93%; top: 49.2%; z-index: 99999;"


  } else if (saida === "academico" && chegada === "biblioteca") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 14.93%; top: 54.6%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("resultado").innerText = "Ao sair do Prédio Acadêmico, siga reto passando pelo Prédio Administrativo até sair do mesmo e se encontrar com a praça. Após isso, pegue as escadas mais próximas ao quiosque e siga reto, chegando por fim a biblioteca."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 71.6%; z-index: 99999;"


  } else if (saida === "biblioteca" && chegada === "administrativo") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4%; top: 54.6%; left: 18.4%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("resultado").innerText = "Após sair da biblioteca, vire a direita e siga reto. Suba as escadas e continue reto até se deparar com o estacionamento ou o quiosque. Vire a direita e siga reto até encontrar a entrada do Prédio Administrativo e entre no mesmo."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 49.2%; z-index: 99999;"


  } else if (saida === "administrativo" && chegada === "biblioteca") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4%; top: 54.6%; left: 18.4%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("resultado").innerText = "Ao sair do Prédio Administrativo e se deparar com a praça, pegue as escadas mais próximas ao quiosque e siga reto, chegando na biblioteca no fim do caminho."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 71.6%; z-index: 99999;"


  } else if (saida === "entrada-p" && chegada === "biblioteca") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("resultado").innerText = "Após entrar no campus, siga reto até se deparar com a biblioteca, identificada por portas de vidro."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 71.6%; z-index: 99999;"


  } else if (saida === "biblioteca" && chegada === "entrada-p") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("resultado").innerText = "Após sair da biblioteca, siga reto até encontrar o portão de saída."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 90.4%; z-index: 99999;"


  } else if (saida === "entrada-p" && chegada === "academico") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 14.93%; top: 54.6%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("resultado").innerText = "Após entrar no campus, siga reto até se deparar com a biblioteca. Após isso, vire a esquerda e siga em frente. Suba as escadas e continue até encontrar o estacionamento ou o quiosque. Vire a direita e siga reto até encontrar a entrada do Prédio Administrativo e entre no mesmo. Por fim, atravesse o Prédio Administrativo até se deparar com o pátio e a entrada principal do Prédio Acadêmico."
    rotaImg.style.cssText = "position: absolute; left: 4.93%; top: 49.2%; z-index: 99999;"


  } else if (saida === "academico" && chegada === "entrada-p") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 14.93%; top: 54.6%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("resultado").innerText = "Ao sair do Prédio Acadêmico, siga reto passando pelo Prédio Administrativo até sair do mesmo e se encontrar com a praça. Após isso, pegue as escadas mais próximas ao quiosque e siga reto, chegando na entrada da biblioteca. Por fim, vire a direita e siga em frente até se deparar com o portão de saída."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 90.4%; z-index: 99999;"


  } else if (saida === "administrativo" && chegada === "entrada-p") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4%; top: 54.6%; left: 18.4%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("resultado").innerText = "Ao sair do prédio administrativo, siga reto até se deparar com a praça. Após isso, pegue as escadas mais próximas ao quiosque, chegando na entrada da biblioteca. Por fim, vire a direita e siga em frente até encontrar o portão de saída."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 90.4%; z-index: 99999;"


  } else if (saida === "entrada-p" && chegada === "administrativo") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4%; top: 54.6%; left: 18.4%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("resultado").innerText = "Após entrar no campus, siga reto até se deparar com a biblioteca. Após isso, vire a esquerda e siga reto. Suba as escadas e continue até se deparar com o estacionamento ou o quiosque. Vire a direita e siga em frente até encontrar a entrada do Prédio Administrativo e entre no mesmo."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 49.2%; z-index: 99999;"


  } else if (saida === "restaurante universitario" && chegada === "entrada-p") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4.26%; top: 54.6%; left: 18.13%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("rota-5").style.cssText = "width: 3.26%; top: 39.3%; left: 15.13%; height: 16%; border-right: 4px dotted black; border-top: 4px dotted black; border-bottom: none;"
    document.getElementById("resultado").innerText = "Após sair do Restaurante Universitário, siga em direção a entrada do Prédio Administrativo. Ao chegar, siga em direção a praça, pegue as escadas mais próximas ao quiosque e siga reto, chegando na entrada da biblioteca. Por fim, vire a direita e siga reto até se encontrar o portão de saída."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 90.4%; z-index: 99999;"


  } else if (saida === "entrada-p" && chegada === "restaurante universitario") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4.26%; top: 54.6%; left: 18.13%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("rota-5").style.cssText = "width: 0.26%; top: 31.8%; left: 18.13%; height: 23.6%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após entrar no campus, siga reto até se deparar com a biblioteca. Após isso, vire a esquerda e continue andando. Suba as escadas e siga em frente até se deparar com o estacionamento ou o quiosque. Vire a direita e siga reto, passando de frente da entrada do Prédio Administrativo e se encontrando com o prédio do Restaurante Universitário."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 24.4%; z-index: 99999;"


  } else if (saida === "biblioteca" && chegada === "restaurante universitario") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4.26%; top: 54.6%; left: 18.13%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 31.8%; left: 18.13%; height: 23.6%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após sair da biblioteca, vire a direita e siga reto. Suba as escadas e siga em frente até se deparar com o estacionamento ou o quiosque. Vire a direita e siga reto, passando de frente da entrada do Prédio Administrativo e se encontrando com o prédio do Restaurante Universitário."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 24.4%; z-index: 99999;"


  } else if (saida === "restaurante universitario" && chegada === "biblioteca") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4.26%; top: 54.6%; left: 18.13%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 3.26%; top: 39.3%; left: 15.13%; height: 16%; border-right: 4px dotted black; border-top: 4px dotted black; border-bottom: none;"
    document.getElementById("resultado").innerText = "Após sair do Restaurante Universitário, siga em direção a entrada do Prédio Administrativo. Ao chegar, siga em direção a praça, pegue as escadas mais próximas ao quiosque e siga reto, chegando na entrada da biblioteca."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 71.6%; z-index: 99999;"


  } else if (saida === "academico" && chegada === "quadras") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4.4%; top: 54.6%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após sair do Prédio Acadêmico, siga reto pela esquerda até encontrar a entrada para a quadra, localizada próxima das mesas de ping pong."
    rotaImg.style.cssText = "position: absolute; left: 9.2%; top: 16.2%; z-index: 99999;"


  } else if (saida === "quadras" && chegada === "academico") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 4.4%; top: 54.6%; left: 7.46%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após descer as escadas e sair da quadra, siga reto até encontrar o pátio. Após isso, entre pela entrada principal do Prédio Acadêmico."
    rotaImg.style.cssText = "position: absolute; left: 4.93%; top: 49.2%; z-index: 99999;"


  } else if (saida === "restaurante universitario" && chegada === "quadras") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 5.2%; top: 21.6%; left: 11.33%; height: 18.2%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após sair do Restaurante Universitário, pegue a direita e novamente a direita, seguindo reto até encontrar a entrada para a quadra, localizada próxima das mesas de ping pong."
    rotaImg.style.cssText = "position: absolute; left: 9.2%; top: 16.2%; z-index: 99999;"


  } else if (saida === "quadras" && chegada === "restaurante universitario") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 7.2%; top: 21.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 21.6%; left: 18%; height: 8%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após sair da quadra descendo as escadas, siga pela primeira esquerda e vire para a direita. Você irá encontrar a entrada do Restaurante Universitário."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 24.4%; z-index: 99999;"


  } else if (saida === "administrativo" && chegada === "quadras") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 2%; top: 54.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após sair do Prédio Administrativo pelo pátio, pegue a direita e siga reto até encontrar a entrada para a quadra, próxima das mesas de ping pong."
    rotaImg.style.cssText = "position: absolute; left: 9.2%; top: 16.2%; z-index: 99999;"


  } else if (saida === "quadras" && chegada === "administrativo") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 2%; top: 54.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após sair da quadra descendo as escadas, siga reto até o pátio e irá se deparar com a entrada do Prédio Administrativo."
    rotaImg.style.cssText = "position: absolute; left: 12.53%; top: 49.2%; z-index: 99999;"


  } else if (saida === "quadras" && chegada === "entrada-p") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 11.06%; top: 54.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("rota-5").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após sair da quadra descendo as escadas, siga reto até o pátio e irá se deparar com a entrada do Prédio Administrativo. Após isso, siga até a praça, pegue as escadas mais próximas ao quiosque e continue andando até chegar na entrada da biblioteca. Por fim, vire a direita e siga reto até encontrar o portão de saída."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 90.4%; z-index: 99999;"


  } else if (saida === "entrada-p" && chegada === "quadras") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 11.06%; top: 54.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: black dotted 4px;"
    document.getElementById("rota-5").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após entrar no campus, siga reto até se deparar com a biblioteca,vire a esquerda e continue andando. Suba as escadas e continue reto até se deparar com o estacionamento ou o quiosque. Vire a direita e siga reto até encontrar a entrada do Prédio Administrativo. Passe pelo prédio até chegar ao pátio e pegue a direita até se deparar com a entrada para a quadra, próxima das mesas de ping pong."
    rotaImg.style.cssText = "position: absolute; left: 9.2%; top: 16.2%; z-index: 99999;"


  } else if (saida === "quadras" && chegada === "biblioteca") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 11.06%; top: 54.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após sair da quadra descendo as escadas, siga reto até o pátio e irá se deparar com a entrada do Prédio Administrativo. Após isso, siga até a praça, pegue as escadas mais próximas ao quiosque e continue andando até chegar na entrada da biblioteca."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 71.6%; z-index: 99999;"


  } else if (saida === "biblioteca" && chegada === "quadras") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 11.06%; top: 54.6%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 54.6%; left: 21.86%; height: 23.2%; border-left: black dotted 4px;"
    document.getElementById("rota-3").style.cssText = "width: 40%; top: 77%; left: 21.86%; z-index: 1;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 33.4%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Saindo da biblioteca, vire a direita e siga reto. Suba as escadas e continue reto até se deparar com o estacionamento ou o quiosque. Vire a direita e siga reto até encontrar a entrada do Prédio Administrativo. Passe pelo prédio até chegar ao pátio e pegue a direita até se deparar com a entrada para a quadra, próxima das mesas de ping pong."
    rotaImg.style.cssText = "position: absolute; left: 9.2%; top: 16.2%; z-index: 99999;"


  } else if (saida === "cantina" && chegada === "restaurante universitario") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 15.2%; top: 41.6%; left: 18%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 31.8%; left: 18%; height: 10.6%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Ao sair da cantina, siga em frente pelo caminho onde você irá encontrar o Restaurante Universitário e o Prédio Administrativo. Vire à direita e irá se deparar com a entrada do Restaurante Universitário."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 24.4%; z-index: 99999;"


  } else if (saida === "restaurante universitario" && chegada === "cantina") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 15.2%; top: 41.6%; left: 18%;"
    document.getElementById("rota-2").style.cssText = "width: 3.26%; top: 39.3%; left: 15.13%; height: 3.2%; border-right: 4px dotted black; border-top: 4px dotted black; border-bottom: none;"
    document.getElementById("resultado").innerText = "Após sair do Restaurante Universitário, siga reto pela esquerda e irá se deparar com a cantina."
    rotaImg.style.cssText = "position: absolute; left: 31.06%; top: 36.2%; z-index:99999;"


  } else if (saida === "cantina" && chegada === "administrativo") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 15.2%; top: 41.6%; left: 18%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 41.6%; left: 18%; height: 13.8%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Ao sair da cantina, siga pelo caminho onde você irá encontrar o Restaurante Universitário e o Prédio Administrativo. Vire à esquerda e continue andando até a entrada do prédio."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 49.2%; z-index: 99999;"


  } else if (saida === "administrativo" && chegada === "cantina") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 15.2%; top: 41.6%; left: 18%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 41.6%; left: 18%; height: 13.8%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após sair do Prédio Administrativo, siga em direção ao Restaurante Universitário à esquerda, vire para a direita e siga em frente até se deparar com a cantina."
    rotaImg.style.cssText = "position: absolute; left: 31.06%; top: 36.2%; z-index:99999;"


  } else if (saida === "cantina" && chegada === "academico") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 15.2%; top: 41.6%; left: 18%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 41.6%; left: 18%; height: 13.8%; border-left: 4px dotted black;"
    document.getElementById("rota-3").style.cssText = "width: 11.06%; top: 54.6%; left: 7.46%;"
    document.getElementById("resultado").innerText = "Ao sair da cantina, siga reto pelo caminho onde você irá encontrar a entrada do Prédio Administrativo. Após isso, entre no mesmo e siga reto até encontrar a entrada principal do Prédio Acadêmico."
    rotaImg.style.cssText = "position: absolute; left: 4.93%; top: 49.2%; z-index: 99999;"


  } else if (saida === "academico" && chegada === "cantina") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 15.2%; top: 41.6%; left: 18%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 41.6%; left: 18%; height: 13.8%; border-left: 4px dotted black;"
    document.getElementById("rota-3").style.cssText = "width: 11.06%; top: 54.6%; left: 7.46%;"
    document.getElementById("resultado").innerText = "Após sair do prédio acadêmico, siga reto em direção ao Prédio Administrativo, saia pelo mesmo e continue seguindo em direção a praça até se deparar com a cantina."
    rotaImg.style.cssText = "position: absolute; left: 31.06%; top: 36.2%; z-index:99999;"


  } else if (saida === "cantina" && chegada === "quadras") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 20.66%; top: 41.4%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 20.2%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Ao sair da cantina, siga reto pelo caminho onde você irá encontrar o Restaurante Universitário e o Prédio Administrativo. Após o restaurante, vire para a direita e siga em frente até encontrar a entrada para a quadra, próxima das mesas de ping pong."
    rotaImg.style.cssText = "position: absolute; left: 9.2%; top: 16.2%; z-index: 99999;"


  } else if (saida === "quadras" && chegada === "cantina") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 20.66%; top: 41.4%; left: 11.33%;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 22%; left: 11.33%; height: 20.2%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Ao sair da quadra descendo as escadas, siga reto e vire para a esquerda após o restaurante. Siga em frente até se deparar com a cantina."
    rotaImg.style.cssText = "position: absolute; left: 31.06%; top: 36%; z-index:99999;"


  } else if (saida === "cantina" && chegada === "biblioteca") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 24%; top: 77%; left: 37.86%; z-index: 1;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 45.2%; left: 37.86%; height: 32.6%; border-left: 4px dotted black;"
    document.getElementById("rota-3").style.cssText = "width: 3.2%; top: 45.2%; left: 35.2%;"
    document.getElementById("resultado").innerText = "Pegue as escadas mais próximas da cantina e siga para a direita em direção ao banco Santander. Vire para a esquerda e continue até chegar na entrada da biblioteca."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 71.6%; z-index: 99999;"


  } else if (saida === "biblioteca" && chegada === "cantina") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 24%; top: 77%; left: 37.86%; z-index: 1;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 45.2%; left: 37.86%; height: 32.6%; border-left: 4px dotted black;"
    document.getElementById("rota-3").style.cssText = "width: 3.2%; top: 45.2%; left: 35.2%;"
    document.getElementById("resultado").innerText = "Após sair da biblioteca, vire a direita e siga reto até se encontrar com as escadas. Vire novamente para a direita, onde se localiza o banco Santander e continue em frente até se deparar com outras escadas. Suba e você irá chegar ao seu destino."
    rotaImg.style.cssText = "position: absolute; left: 32.8%; top: 39.8%; z-index: 99999;"


  } else if (saida === "cantina" && chegada === "entrada-p") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 24%; top: 77%; left: 37.86%; z-index: 1;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 45.2%; left: 37.86%; height: 32.6%; border-left: 4px dotted black;"
    document.getElementById("rota-3").style.cssText = "width: 3.2%; top: 45.2%; left: 35.2%;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Pegue as escadas mais próximas da cantina e siga para a direita em direção ao banco Santander. Vire para a esquerda e continue até chegar na entrada da biblioteca. Por fim, vire para a direita e continue andando até se deparar com o portão de saída."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 90.4%; z-index: 99999;"


  } else if (saida === "entrada-p" && chegada === "cantina") {
    removeOn();
    addImg(imagem);
    document.getElementById("rota-1").style.cssText = "width: 24%; top: 77%; left: 37.86%; z-index: 1;"
    document.getElementById("rota-2").style.cssText = "width: 0.26%; top: 45.2%; left: 37.86%; height: 32.6%; border-left: 4px dotted black;"
    document.getElementById("rota-3").style.cssText = "width: 3.2%; top: 45.2%; left: 35.2%;"
    document.getElementById("rota-4").style.cssText = "width: 0.26%; top: 77%; left: 61.33%; height: 18.8%; border-left: 4px dotted black;"
    document.getElementById("resultado").innerText = "Após entrar no campus, siga reto até se deparar com a biblioteca, vire para a esquerda e siga em frente até se encontrar com as escadas. Siga para a direita, onde se localiza o banco Santander. Continue em frente até se deparar com outras escadas. Suba e você irá chegar ao seu destino."
    rotaImg.style.cssText = "position: absolute; left: 32.8%; top: 39.8%; z-index: 99999;"


  } else if (saida === "academico" || chegada === "academico") {
    removeOn();
    addImg(imagem);
    document.getElementById("resultado").innerText = "Prédio Acadêmico"
    rotaImg.style.cssText = "position: absolute; left: 4.93%; top: 49.2%; z-index: 99999;"


  } else if (saida === "administrativo" || chegada === "administrativo") {
    removeOn();
    addImg(imagem);
    document.getElementById("resultado").innerText = "Prédio Administrativo"
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 49.2%; z-index: 99999;"


  } else if (saida === "biblioteca" || chegada === "biblioteca") {
    removeOn();
    addImg(imagem);
    document.getElementById("resultado").innerText = "A Biblioteca é um local com múltiplos livros de diversos assuntos que podem ser emprestados para leitura, além de ser um ambiente agradável para os estudos, contendo mesas, cadeiras e computadores para auxiliar na aprendizagem. Além disso, nela também são disponibilizados armários para o estudante guardar os seus pertences que não serão úteis nos estudos, como casacos ou mochilas."
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 71.6%; z-index: 99999;"


  } else if (saida === "entrada-p" || chegada === "entrada-p") {
    removeOn();
    addImg(imagem);
    document.getElementById("resultado").innerText = "Entrada Principal"
    rotaImg.style.cssText = "position: absolute; left: 59.2%; top: 90.4%; z-index: 99999;"


  } else if (saida === "quadras" || chegada === "quadras") {
    removeOn();
    addImg(imagem);
    document.getElementById("resultado").innerText = "As quadras são um espaço destinado aos alunos para a prática de esportes e atividades físicas, usadas tanto nos intervalos e aulas livres, quanto nas aulas de Educação Física. Além das duas quadras poliesportivas em si, também existem mesas para a prática de tênis de mesa, um campo de futebol e duas quadras de vôlei de areia, sendo que a última só se encontra disponível nas aulas."
    rotaImg.style.cssText = "position: absolute; left: 9.2%; top: 16.2%; z-index: 99999;"


  } else if (saida === "restaurante universitario" || chegada === "restaurante universitario") {
    removeOn();
    addImg(imagem);
    document.getElementById("resultado").innerText = "O Restaurante Universitário, popularmente conhecido como “bandeco” entre os alunos, é o local onde os frequentantes da Faculdade de Tecnologia (FT) e do COTIL tem acesso às suas refeições diárias. O RU possui uma programação que é disponibilizada semanalmente no site oficial da Secretaria de Administração Regional (SAR), contendo café da manhã, almoço e jantar, tendo um custo de R$2,00 para o café da manhã e de R$3,00 para almoço ou jantar."
    rotaImg.style.cssText = "position: absolute; left: 16%; top: 24.4%; z-index: 99999;"


  } else if (saida === "cantina" || chegada === "cantina") {
    removeOn();
    addImg(imagem);
    document.getElementById("resultado").innerText = "Cantina"
    rotaImg.style.cssText = "position: absolute; left: 32.8%; top: 39.8%; z-index: 99999;"
  }
}); 
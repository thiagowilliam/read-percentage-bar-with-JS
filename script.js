//pegando o conteiner do texto
const postWrap = document.querySelector(".post-wrap")
//Criar a barrinha
let bar = document.createElement("div");
//Estilizando a barrinha
bar.style.height = "4px";
bar.style.width = "0";
bar.style.backgroundColor = "#6633cc";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "9999";
bar.style.transition = "0.2s"
//Adicionando no corpo da pagina
document.body.append(bar)

//atualizar a barrinha

function updateBar() {
  //o tamanho da caixa que contem o texto
  const textHeight = postWrap.offsetHeight;
  //verificar em que posicao da pagina eu estou
  const pagePositionY = window.pageYOffset;

  //regra de 3
  const updateBar = pagePositionY * 100 / textHeight;

  bar.style.width = updateBar + "%";
}

window.addEventListener("load", () => {
  //verificar o movimento do scroll
  document.addEventListener("scroll", updateBar)

})
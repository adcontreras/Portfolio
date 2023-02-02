const fulImgBox = document.getElementById("fulImgBox");
fulImg = document.getElementById("fulImg");



/*const btnAdelanta = document.getElementById("adelanta");
const btnRetrocede = document.getElementById("retrocede");*/
const imagenes = document.getElementById("grid-item");
let indiceImagen = 0;


/*Open full image*/
function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}

/*Close big image*/
function closeImg(){
    fulImgBox.style.display = "none";
}

/* next image*/
function adelanta(){
    if (indiceImagen === imagenes.length - 1) {
      indiceImagen = -1;
    }
    fulImg.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
  };
  
  btnAdelanta.addEventListener('click', adelantaImagen);
  
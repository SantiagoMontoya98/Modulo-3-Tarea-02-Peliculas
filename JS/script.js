const d = document;

const $slides = d.querySelector(".slider-slides").children,
  $slideIzq = d.querySelector(".slide-izq");
  $slideDer = d.querySelector(".slide-der"),
  totalSlides = $slides.length;

let index = 0;

function mover(direccion) {
  if (direccion == "siguiente") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  }else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }
  for (i = 0; i < $slides.length; i++) {
    $slides[i].classList.remove("active");
  }
  $slides[index].classList.add("active");
}

$slideDer.onclick = () => mover("siguiente");
$slideIzq.onclick = () => mover("anterior");

const peliculas = ["x-men","aladdín","star-wars","avengers","batman"],
  $fragmento = d.createDocumentFragment(),
  $contenedorPeliculas = d.getElementById("peliculas-mini").children;

let $a = "",
  $img = "";

peliculas.forEach((pelicula,index) =>{
  $a = d.createElement("a");
  $img = d.createElement("img");
  $img.setAttribute("class","pelicula");
  $img.setAttribute("width","200");
  $img.setAttribute("height","300");
  $a.appendChild($img);
  $fragmento.appendChild($a);
  if(index === 0){
    $contenedorPeliculas[0].setAttribute("id",pelicula);
    $fragmento.childNodes[0].setAttribute("href",`${pelicula}.html`);
    $fragmento.childNodes[0].children[0].setAttribute("src",`./Imagenes/${pelicula}.jpg`);
    $contenedorPeliculas[0].appendChild($fragmento.childNodes[0]);
  }
  if(index === 1){
    $contenedorPeliculas[1].setAttribute("id",pelicula);
    $fragmento.childNodes[0].setAttribute("href",`${pelicula}.html`);
    $fragmento.childNodes[0].children[0].setAttribute("src",`./Imagenes/${pelicula}.jpg`);
    $contenedorPeliculas[1].appendChild($fragmento.childNodes[0]);
  }
  if(index === 2){
    $contenedorPeliculas[2].setAttribute("id",pelicula);
    $fragmento.childNodes[0].setAttribute("href",`${pelicula}.html`);
    $fragmento.childNodes[0].children[0].setAttribute("src",`./Imagenes/${pelicula}.jpg`);
    $contenedorPeliculas[2].appendChild($fragmento.childNodes[0]);
  }
  if(index === 3){
    $contenedorPeliculas[3].setAttribute("id",pelicula);
    $fragmento.childNodes[0].setAttribute("href",`${pelicula}.html`);
    $fragmento.childNodes[0].children[0].setAttribute("src",`./Imagenes/${pelicula}.jpg`);
    $contenedorPeliculas[3].appendChild($fragmento.childNodes[0]);
  }
  if(index === 4){
    $contenedorPeliculas[4].setAttribute("id",pelicula);
    $fragmento.childNodes[0].setAttribute("href",`${pelicula}.html`);
    $fragmento.childNodes[0].children[0].setAttribute("src",`./Imagenes/${pelicula}.jpg`);
    $contenedorPeliculas[4].appendChild($fragmento.childNodes[0]);
  }
})
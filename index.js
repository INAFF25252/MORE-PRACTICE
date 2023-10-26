const DOMSelectors = {
  form:document.querySelector("#form"),
  pokemon: document.querySelector(".pokemon-name"),
  type: document.querySelector(".ele-type"),
  img: document.querySelector(".image"),
  input: document.querySelector(".input"),
  gallery: document.querySelector(".gallery"),
  h2: document.querySelector("h2")
  };
  
  
  console.log(DOMSelectors);
  DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.pokemon.value, DOMSelectors.type.value, DOMSelectors.img.value)
    function card (){
      DOMSelectors.gallery.insertAdjacentHTML("afterbegin", `<div class="card"> <h2> ${DOMSelectors.pokemon.value}</h2> </div>`)
  
    };
    card()})
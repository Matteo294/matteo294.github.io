// Ottieni il modale
var modal = document.getElementById("myModal");

// Ottieni l'immagine e l'elemento modale di immagine
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Ottieni tutte le immagini con la classe "clickable-image"
var images = document.getElementsByClassName("clickable-image");

// Aggiungi un listener di clic a ogni immagine
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Ottieni l'elemento di chiusura
var span = document.getElementsByClassName("close")[0];

// Quando l'utente clicca su (x), chiudi il modale
span.onclick = function() {
    modal.style.display = "none";
}

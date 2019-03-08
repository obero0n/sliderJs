//////////////////////////////Variables///////////////////////////////////////
//////////slider
// Tableau qui stock les src des images
var tab = ["img/boat.jpg","img/smoke.jpg","img/origami.jpg"];
// creation de balise img
var img = document.createElement("img");
// recupere la div du slider qui contient les images
var slider = document.getElementById("slider");
// stock le tour actuelle du slider
var tour = 0;
//////////button
// creation de balise button
var button = document.createElement("button");
// recupere la div du bouton qui contient le boutons
var buttonDiv = document.getElementById("buttonDiv");
var buttonPrev = document.createElement("button");
var buttonDivPrev = document.getElementById("buttonDivPrev");
//////////text
var text = document.createElement("p");
var textbox = document.getElementById("text");
// Tableau qui stock les texts des images
var tabText = ["Bibidi","Babidi","Bou"];
//////////////////////////////Fonctions///////////////////////////////////////
//
//
//
//


//////////////////////////////logique///////////////////////////////////////
//////////text
textbox.appendChild(text);
// textbox.innerHTML = "kokoko";

//////////button
buttonDivPrev.appendChild(buttonPrev);
buttonDiv.appendChild(button);
button.innerHTML = "Next";
buttonPrev.innerHTML = "Prev";
textbox.innerHTML = "Bibidi";

// button next/prev
buttonPrev.onclick = function()
{
  if(tour){
    tour -- ;
    // on affiche la nouvelle image
  }
  else {
    tour = tab.length -1;
  }
  img.src = tab[tour];
  textbox.innerHTML = tabText[tour];
  }
/////////
button.onclick = function()
{
  if(tour < 2){
    // incrementation de la variable tour
    tour ++ ;
    // on affiche la nouvelle image
  }
  else {
    tour = 0;
  }
  img.src = tab[tour];
  textbox.innerHTML = tabText[tour];
  }

//////////slider
// rajouter la balise image au slider
slider.appendChild(img);
//mise en forme de l image
img.style.height = '420px';
img.style.width = '600px';
// ajout de limage par default
img.src = tab[tour];

// on demare le slider
setInterval(function(){
if(tour < 2){
  // incrementation de la variable tour
  tour ++ ;
  // on affiche la nouvelle image
}
else {
  tour = 0;
}
img.src = tab[tour];
textbox.innerHTML = tabText[tour];
}
,5000);

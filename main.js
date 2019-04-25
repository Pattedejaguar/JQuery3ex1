// Fonction qui incrémente un text à chaque clique
   $(document).ready(function(){
     var cpt = 0;
     $('#clickMe').click(function() {
         // On incrémente puis on affiche la valeur du compteur
         $('#nombre').text(++cpt);
       })
   });

// $(function (){
//   // déclare variable valeur qu'on initialise à 0
//   var valeur= 0
//   // on apelle une fonction ';click" avec l'id clickme rattaché au bouton
//   $('#clickMe').click(function () {
//  // la méthode '.val()' permet de récupérer ou de modifier une valeur
//  // incrémentation passe comme valeur
//   $('#nombre').val(++valeur);
// });
// });

//     var clicks = 0;
// function onClick() {
// clicks += 3.321;
// document.getElementById("nombre").innerHTML = clicks;

$(function() {
	// Initialisation des variables
	var computer = '';
	var party = 1;
	var playerScore = 0;
	var computerScore = 0;
	$('#compare').html('Jouer la manche' + party);
	$result = $('#result');

	// Choix de l'IA
	// Création de la fonction computerChoice
	function computerChoice() {
		// Création de la variable randomNumber avec le Math.floor et Math.random pour faire en sorte que le choix de l'IA soit compris entre 1 et 3 et seulement en nombre entier
		var randomNumber = Math.floor(Math.random()*3 + 1)
		// Traduction en français : Si le choix de l'IA est égal à 1 alors c'est égal à Pierre
		if (randomNumber == 1) {
			computer = "Pierre";
		}
		// Autrement si le choix de l'IA est égal à 2 c'est égal à Feuille
		else if (randomNumber == 2) {
			computer = "Feuille";
		}
		// Autrement le choix de l'IA est Ciseaux
		else {
			computer = "Ciseaux";
		}
	}

	// Prise en compte du choix du joueur
	// Création de la fonction playerChoice
	function playerChoice() {
		// On récupère la valeur de #player
		$player = $('#player').val();
	}

	// Comparaison des résultats, stocké dans $result, incrémentation du score
	// La fonction compare est créée pour comparer le choix de l'IA et le choix du joueur
	function compare(ia, player) {
		// Traduction en français : Si le choix de l'IA est égal à Pierre ET (&&) que le choix du joueur est égal à Ciseaux OU (||) le choix de l'IA est égal à Feuille ET (&&) le choix du joueur est égal à Pierre OU (||) le choix de l'IA est égal à Ciseaux ET (&&) le choix du joueur est égal à Feuille
		if ((ia == "Pierre" && $player == "Ciseaux") || (ia == "Feuille" && $player == "Pierre") || (ia == "Ciseaux" && $player == "Feuille")) {
			// Le résultat est Tu as perdu
			$result = "tu as perdu !";
			// On fait un +1 (incrémentation grâce à ++) au computerScore (score de l'IA)
			computerScore++;
		}
		// Autrement Si le choix de l'IA est égal au choix du joueur
		else if (ia == player) {
			// Le résultat est C'est un match nul !
			$result = "c'est un match nul !";
		}
		// Autrement le résultat est Tu as gagné !
		else {
			$result = "tu as gagné !";
			// On fait un +1 (incrémentation grâce à ++) au playerScore (score du joueur)
			playerScore++;
		}
	}

	// Clic sur le bouton jouer, execution des fonctions
	// Méthode .click sur le bouton #compare
	$('#compare').click(function() {
		// On utilise les fonctions créées plus haut afin de faire la comparaison
		computerChoice();
		playerChoice();
		compare(computer, $player);
		// On appel la fonction showText afin de créer des éléments dynamiquement grâce au JS
		showText();
		// Ne pas faire attention à ce commentaire il s'âgit d'un anti spam
		// Sécurité pour éviter le spam clic sur le bouton
		// $(this).prop('disabled', true).delay(1500).queue(function(next) {
		// 	$(this).prop('disabled', false);
    	// 	next();
		// });
	});

	// Affichage des résultats avec une fonction showText
	function showText() {
		// Création d'un text dans la balise Span de classe .left pour afficher le score du Joueur
		$('.left').text("Player: " + playerScore);
		// Création d'un text dans la balise Span de classe .right pour afficher le score de l'IA (computer)
		$('.right').text("Computer: " + computerScore);
		// Dans la Div d'id #result on utilise la méthode .html afin de créer un texte "L'IA a joué pierre feuille ou ciseaux (selon ce que l'IA à joué) et le résultat (si c'est gagné perdu ou match nul) les balise <b></b> me permettent d'afficher ce que l'IA a joué en gras"
		$('#result').html("L'IA a joué <b>" + computer + "</b>, " + $result);
		// On incrémente party pour faire en sorte que à chaque partie lancé on puisse savoir quel est le nombre de parties jouées
        party++;
		// Cette ligne reprend le même principe que deux lignes au dessus sauf que l'on va écrire dans le bouton d'id #compare en utilisant la variable party pour savoir quelle partie on joue et qu'a chaque clicque le chiffre augmente grâce à l'incrémentation de party juste au dessus
		$('#compare').html("Jouer la manche " + party);
		// Traduction en français : Si le score du joueur est différent de 0 OU (||) si le score de l'IA est différent de 0
		if (playerScore!=0 || computerScore!=0){
			// Ecrire dans la div d'id #ratio "Votre ratio est de : X pourcentage (on créée le pourcentage grâce à l'opération (a/(a+b)x100) %" le .toFixed(2) me permet d'arrondir le pourcentage à deux chiffres après la virgule)
            $('#ratio').html("Votre ratio est de : " + (playerScore/(playerScore+computerScore)*100).toFixed(2)+"%");
        }
	}
});


// $(function() {
//   var bot = 0;
//   var player = 0;
//   // var party = 0;
//   var botscore = 0;
//   var humanscore = 0;
//   $('#ALATAKDELARNG').click(function(){
//   showText();
//       // choix du bot quand j'appuie sur le bouton
//     var random = Math.floor(Math.random()*3 + 1);
//     if (random == 1 ) {
//       bot = "feuille";
//     }
//     if (random == 2 ) {
//       bot = "pierre";
//     }
//     if (random == 3) {
//       bot = "ciseaux";
//     }
//     player = $('#CHIEFOUMI').val();
//     console.log(player+" vs "+ bot);
//     switch (player) {
//       case "pierre":
//         switch (bot) {
//           case "pierre" :
//             console.log("égalité");
//           break;
//           case "feuille" :
//             console.log("perdu");
//             botscore++;
//           break;
//           case "ciseaux" :
//             console.log("gagné");
//             humanscore++;
//           break;
//         }
//       break;
//       case "feuille":
//         switch (bot) {
//           case "pierre" :
//             console.log("égalité");
//           break;
//           case "feuille" :
//             console.log("perdu");
//             botscore++;
//           break;
//           case "ciseaux" :
//             console.log("gagné");
//             humanscore++;
//           break;
//         }
//       break;
//       case "ciseaux":
//         switch (bot) {
//           case "pierre" :
//             console.log("égalité");
//           break;
//           case "feuille" :
//             console.log("perdu");
//             botscore++;
//           break;
//           case "ciseaux" :
//             console.log("gagné");
//             humanscore++;
//           break;
//         }
//       break;
//     }
// function showText(){
//   $("#result").html('le computaire a joué ' + bot + ' et le sac à viande : ' + player);
//  $('#comp').text(botscore);
//  $('#hum').text(humanscore);
// }
//
//   });
// });




//   console.log(player);

//
//
//
//
//
// };

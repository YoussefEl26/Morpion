console.log("Ce programme JS vient d'être chargé");
$(document).ready(function () {
	console.log("Le document est pret");

	//Initialisation du joueur
	var joueur = "X";

	//Initialisation de la victoire
	conVict = true;

	//Travail sur les cases
	$('#morpion td').click(function () {
		console.log("Le bouton de la souris a été enfoncé.");
		if (estValid($(this)) && conVict == true) {
			console.log(estValid($(this)) && conVict == true)
			applyValue($(this))
			const vic = rechVict()
			if (vic == true) {
				if (joueur == "O") {
					$('p').text("Victoire de : X ")
					conVict = false;
				}
				else {
					$('p').text("Victoire de : O ")
					conVict = false;
				}
			}
		}
	});

	//Fonction permet de appliquer la valeur
	function applyValue(value) {
		if (joueur == "X") {
			$(value).text(joueur);
			$(value).addClass("X");
			joueur = "O"
		} else {
			$(value).text(joueur);
			$(value).addClass("O");
			joueur = "X"
		}
	}

	//Fonction permettant de savoir si le coup est valide
	function estValid(value) {
		if ($(value).hasClass("X")) {
			$('.erreur').text("impossible");
			return false
		}
		if ($(value).hasClass("O")) {
			$('.erreur').text("impossible");
			return false
		}
		return true
	}


	//Bouton reset
	$('#button-reset').click(function () {
		console.log("Le bouton de la souris a été enfoncé.");
		$(".case").text("");
		$(".case").removeClass("O");
		$(".case").removeClass("X");
		joueur = "X";
		$('.erreur').text("");
	});

	//Fonction permettant de savoir si il y'a une victoire
	function rechVict() {
		// pour X
		if (
			$(".1").hasClass("X") &&
			$(".2").hasClass("X") &&
			$(".3").hasClass("X") == true
		) {
			return true
		}
		if (
			$(".4").hasClass("X") &&
			$(".5").hasClass("X") &&
			$(".6").hasClass("X") == true
		) {
			return true
		}
		if (
			$(".7").hasClass("X") &&
			$(".8").hasClass("X") &&
			$(".9").hasClass("X") == true
		) {
			return true
		}
		if (
			$(".1").hasClass("X") &&
			$(".4").hasClass("X") &&
			$(".7").hasClass("X") == true
		) {
			return true
		}
		if (
			$(".2").hasClass("X") &&
			$(".5").hasClass("X") &&
			$(".8").hasClass("X") == true
		) {
			return true
		} if (
			$(".3").hasClass("X") &&
			$(".6").hasClass("X") &&
			$(".9").hasClass("X") == true
		) {
			return true
		}
		if (
			$(".1").hasClass("X") &&
			$(".5").hasClass("X") &&
			$(".9").hasClass("X") == true
		) {
			return true
		} if (
			$(".3").hasClass("X") &&
			$(".5").hasClass("X") &&
			$(".7").hasClass("X") == true
		) {
			return true
		}
		//pour O
		if (
			$(".1").hasClass("O") &&
			$(".2").hasClass("O") &&
			$(".3").hasClass("O") == true
		) {
			return true
		}
		if (
			$(".4").hasClass("O") &&
			$(".5").hasClass("O") &&
			$(".6").hasClass("O") == true
		) {
			return true
		}
		if (
			$(".7").hasClass("O") &&
			$(".8").hasClass("O") &&
			$(".9").hasClass("O") == true
		) {
			return true
		}
		if (
			$(".1").hasClass("O") &&
			$(".4").hasClass("O") &&
			$(".7").hasClass("O") == true
		) {
			return true
		}
		if (
			$(".2").hasClass("O") &&
			$(".5").hasClass("O") &&
			$(".8").hasClass("O") == true
		) {
			return true
		} if (
			$(".3").hasClass("O") &&
			$(".6").hasClass("O") &&
			$(".9").hasClass("O") == true
		) {
			return true
		}
		if (
			$(".1").hasClass("O") &&
			$(".5").hasClass("O") &&
			$(".9").hasClass("O") == true
		) {
			return true
		} if (
			$(".3").hasClass("O") &&
			$(".5").hasClass("O") &&
			$(".7").hasClass("O") == true
		) {
			return true
		}
		return false
	}
});

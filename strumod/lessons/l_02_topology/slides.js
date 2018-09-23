FOOTER = "Strumenti di modellazione dello spazio, sez. I4-I5 - prof. Marco Ferrara - A.A. 2018-2019<br>" +
	"Politecnico di Milano, Scuola del Design, Corso di Laurea in Design degli Interni"

LOCAL = location.protocol == 'file:' ? true : false
//LOCAL = false;

document.getElementById("footer").innerHTML = FOOTER;
var choose = function(a,b){return LOCAL?a:b}

var lesson_slides = [

	[	
		'titolo', '', 'sottotitolo',
		'testo',
	]

]

/*
 * test tree
 *
 * */

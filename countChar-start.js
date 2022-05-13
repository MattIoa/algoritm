/**
	* Scrivere una funzione che conti le ricorrenze dei caratteri all'interno di
	* una parola. La funzione dovrà restituire un'oggetto con chiave la lettera e
	* come valore il conteggio. Mostrare il risultato in console.
	* Esempio
	* countChar("hello") => {h: 1, e: 1, l: 2, o: 1}
	*/



	function countChar(words) {
		var frequence = {};
		for (var i=0; i<words.length;i++) {
			var character = words.charAt(i);
			if frequence(character) {
				frequence.push(character)++;
			} else {
				frequence.push(character) = 1;
			}
		}
	
		return frequence;
	};

/**
	* Scrivere una funzione che controlli se due parole sono anagrammi e mostrare
	* il risultato in console.
	* Esempio
	* isAnagram("cinema", "iceman") => true
	* isAnagram("manuel", "giraffa") => false
	*/

	function checkAnagram (parola1, parola2) {

		if (parola1.length === parola2.length) {
			console.log(false);
		}
		
		var a = parola1.split('').sort().join('');
		var b = parola2.split('').sort().join('');
		return (a === b);
	}

	console.log(checkAnagram("ciao","caio"))
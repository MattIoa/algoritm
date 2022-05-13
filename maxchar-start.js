/**
	* Data una stringa, restituisci il carattere che viene ripetuto più volte.
	* Esempio
	* maxChar("abccccccd") => "c"
	* maxChar("apple 12311111") => "1"
	*/

	var words = '3553853335' ;
var charCounts = {};
var maxLetter = '';
for(var i = 0; i < words.length; i++)
{
    var letter = words[i];
    if(!charCounts[letter]){
    charCounts[letter] = 0;
    }
    charCounts[letter]++;
    if(maxLetter == '' || charCounts[letter] > charCounts[maxLetter]){
        maxLetter = letter;
    }
}

console.log(maxLetter + ":" + charCounts[maxLetter]);
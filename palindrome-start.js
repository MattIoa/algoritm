/**
	* Scrivere una funzione che controlli se una data stringa è palindroma
	* oppure no. Mostrare il risultato in console.
	* isPalindrome("anna") => true
	* isPalindrome("manuel") => false
	*/

var word = 'anna';

var reverseWord = reverseWord(word);

if(word == reverseWord){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}

function reverseWord(word){
var palindrome = word.split('').reverse().join('');  
return palindrome;
}
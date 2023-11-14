const word = prompt("Digite uma palavra para saber se ela é um palíndromo ou não.");
let palindromes = "";

for(let i = word.length - 1; i >= 0; i--){
   palindromes += word[i]
}

if(word.toLocaleLowerCase() === palindromes.toLocaleLowerCase()){
   alert("Essa palavra é um palindromo\n\n" + word + " é igual a " + palindromes);
}else{
   alert("Essa palavra não é um palindromo\n\n" + word + " é diferente de " + palindromes);
}
//Funções recursivas

function fatorial(n) {
    console.log(n)
    if (n === 0) {
      return 1;  // Caso base: fatorial de 0 é 1
    } else {
      return n * fatorial(n - 1);  // Caso recursivo: n! = n * (n-1)!
    }
  }
  
  console.log(fatorial(5));  // Saída: 120

  /*Uma função recursiva é uma função que se chama a si mesma durante sua execução. 
  Essa abordagem permite resolver problemas complexos dividindo-os em subproblemas menores e mais simples. 
  As funções recursivas geralmente consistem em dois elementos principais: o caso base e o caso recursivo.

  Caso Base: É a condição que determina quando a função recursiva deve parar de se chamar a si mesma e retornar um valor. 
  É uma situação simples que não requer chamadas adicionais à função.
  
  Caso Recursivo: É onde a função se chama a si mesma, mas com argumentos diferentes para resolver subproblemas menores.
  A ideia é que, ao repetir esse processo, os subproblemas se tornem cada vez mais simples até alcançar o caso base.*/
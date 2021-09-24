/*3)      Criar Array com 6 itens (nome de músicas).
a)       Exibir no console o total de itens.
b)      Exibir no console os itens nas posições : 1, 2, 6, 8.
c)       Exibir no console o item na última posição.
 */

var musicas = ["um so caminho", "faça valer", "vivaz", "uma vida só", "aurora boreal", "ela me faz"];

console.log("Total de musicas: "+musicas.length);
console.log("Posição 1: "+musicas[1]);
console.log("Posição 2: "+musicas[2]);

console.log("Posição 6: "+musicas[6]);//Vai retornar undefined, porque array começa sempre em 0. E nesse caso é de 0 a 5.
console.log("Posição 8: "+musicas[8]);//Aqui a mesmo coisa, esse indice n existe nesse array.
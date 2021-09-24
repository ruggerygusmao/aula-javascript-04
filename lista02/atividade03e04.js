/*3)      Criar um array contendo 7 atividades que você faz durante o dia.
a)       Exibir no console as atividades na ordem inversa.
b)      Selecionar e exibir no console, os elementos nas posições 3 e 6.
c)       Exibir no console seu array transformado em string. Substituir a vírgula pelo símbolo " - " (hífen).
d)      Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades que você faz durante o dia. E exibir no console o resultado */

var atividadesDia = ["comer","beber","andar","correr","respirar","observar","descansar"];

console.log(atividadesDia.reverse());

console.log(atividadesDia[3],atividadesDia[6]);

console.log(atividadesDia.join("-"))

var atividadesPreferidas = ["futebol","ciclismo"];

console.log(atividadesDia.concat(atividadesPreferidas));


/*4)      Criar um array com o nome de 5 cidades.
a)       Exibir, no console, em ordem crescente os times que estão no array.
b)      Remover a cidade que está no início do array.
c)       Remover a cidade que está no final do array.
d)      Exibir, no console, em ordem crescente os times que estão no array.
 */

var cidades = ["recife","olinda","ipojuca","candeis","prazeres"];

console.log(cidades.sort());
cidades.shift();
cidades.pop();
console.log(cidades);
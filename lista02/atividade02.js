/*2)      Dado um array com os times: Santos, Sport, Santa Cruz, Vasco, Chapecó.
a) Adicionar o time "Flamengo" no final do array.
b) Remover o time que está no início do array.
c) Adicionar o time "Palmeiras" no início do array.
d) Adicionar o time "Grêmio" no final do array.
e) Adicionar os times "São Paulo" e "Santos" do início do array.
f) Exibir, no console, a quantidade de elementos no array.
g) Remover o time que está no final do array.
h) Exibir, no console, em ordem crescente os times que estão no array. */

var times = ["Santos", "Sport", "Santa Cruz", "Vasco", "Chapecó"];

times.push("Flamengo");
times.shift();
times.unshift("Palmeiras");
times.push("Grêmio");
times.unshift("São Paulo","Santos");
console.log("Total de elementos: "+times.length);
times.pop();
times.sort();
console.log(times);


const mensagemScreta = [
    'Aprender',
    'nao',
    'é',
    'o',
    'sobre',
    'que',
    'você',
    'consegue',
    'facilmente',
    'na',
    'primeira',
    'vez',
    'mas',
    'sobre',
    'o',
    'que',
    'você',
    'pode',
    'descobrir.',
    ' -2015',
    'Chris',
    'Pine,',
    'Aprenda',
    'JavaScript',
];

mensagemScreta.pop();
mensagemScreta.push('a','programar.');
mensagemScreta[8] = 'certo';
mensagemScreta.shift();
mensagemScreta.unshift('Programação');
mensagemScreta[7] = 'sabe';
mensagemScreta[8] = ',é';
mensagemScreta.splice(9,4);

console.log(mensagemScreta.join(" "));
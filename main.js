'use strict'

//Variável
//É um espaço reservado na memória, com a finalidade de armazenar dados. 
//Podendo ser de vários tipos, números, booleano e String

//Array
//É um conjunto de dados.

//Propriedade
//é a característica d um obejto como tamanho e cor

//Método
//É a ação de um objeto, como mover e adicionar 

//Objeto
//Um conjunto de propriedades e métodos

const alunos = [
    {nome:'Danilo',email:'danilo@gmail.com', nota1: 10, nota2: 7 },
    {nome:'Edu',email:'eduardo@gmail.com', nota1: 3, nota2: 4 },
    {nome:'Luane',email:'lu@gmail.com', nota1: 10, nota2: 10 },
    {nome:'Lukas',email:'lukas@gmail.com', nota1: 1, nota2: 5 }
]

for(let i=0; i < alunos.length; i++){
console.log(alunos[i].nome)
console.log(alunos[i].nota1)
}
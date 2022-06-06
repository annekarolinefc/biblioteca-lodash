import _ from 'lodash';

let cars = ['Palio', 'Uno', 'Gol', 'Saveiro', 'HB20', 'Creta']

//retorna o primeiro e o ultimo elemento
console.log(_.first(cars));
console.log(_.last(cars));

//Retorna o nth elemento do array
console.log(_.nth(cars, 3));
console.log(_.nth(cars, -3));

//Retornar com elemento aleatório
console.log(_.sample(cars));

//Embaralhar o array
console.log(_.shuffle(cars));
console.log(_.shuffle(cars));
console.log(cars)

//gerar um numero aleatorio
console.log(_.random(10)); //começa em zero e termina em 10
console.log(_.random(5, 10)); //range: entre 5 e 10

//repetir a execução d euma função
_.times(3, ()=>{
    console.log("Repetiu")
})

//delay
_.delay(()=> {console.log("Atrasadao")}, 150);
console.log("Sequencia")

//validar o tipo de dado da variavel
let a = 1;
let b = 'Carro';
let c = [1, 2];
let d = {name: 'Bruno'};

console.log(_.isNumber(a))
console.log(_.isString(b))
console.log(_.isArray(c))
console.log(_.isObject(d))


//obter o minimo e o maximo de um array
let number = [1, 2, 3, 4, 5, 6, 7]

console.log(_.min(numbers))
console.log(_.max(number))

//obter a soma
console.log(_.sum(numbers))
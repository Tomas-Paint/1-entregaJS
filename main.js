let barrita = "======================== Ejercicio 1 - Par o Impar ========================"
    console.log(barrita)



function resta(numeroA = 0){
    console.log(numeroA)
    if(numeroA % 2 === 0){
        console.log("Es par")
    } 
    else {
        console.log("es impar")
    }
}
resta(1)
resta(2)
resta(3)
resta(4)
resta(5)
resta(6)
resta(7)
resta(8)
resta(9)
resta(10)


let barrita2 = "======================== Ejercicio 2 - Mayor o Igual ========================"
console.log(barrita2)



function suma(numeroA, numeroB){
    console.log(numeroA,numeroB)

    if(numeroA > numeroB)
    {
        console.log( "Es mayor", + numeroA)
    } else if(numeroA < numeroB)
    {
        console.log("Es mayor", + numeroB)
    } else{
        console.log("son iguales")
    }



}
suma(2, 1)
suma(8, 10)
suma(10, 10)
suma(100, 90)
suma(225, 224)
suma(47, 47)


let barrita3 = "======================== Ejercicio 3 - Multipo de 5 ========================"
console.log(barrita3)

function NumeroMultiplo (multiplo) {
    console.log(multiplo)
    if(multiplo % 5 === 0){
        console.log("Es multiplo de 5")
    } else{
        console.log("No es multiplo")
    }

    
}
NumeroMultiplo(4)
NumeroMultiplo(20)
NumeroMultiplo(105)
NumeroMultiplo(32)
NumeroMultiplo(500)
NumeroMultiplo(9)
NumeroMultiplo(27)

let barrita4 = "======================== Ejercicio 4 - Imprimir desde el 0 hasta el numero dado ========================"
console.log(barrita4)

function NumeroDar (num){
   for(let i = 0; i <= num; i++)

    console.log(i)
}
NumeroDar(5)

let barrita5 = "======================== Ejercicio 5 - Palabra y cantidad ========================"
console.log(barrita5)

 function NumeroYPalabra(Palabra,Numero){
    for(let Palabra = 1; Palabra <= Numero; Palabra++)
        console.log("Messi")

 }
 NumeroYPalabra(0,10)

 let barrita6 = "======================== Ejercicio 6 - Array imprimir ========================"
 console.log(barrita6)


let NombresDeComidas = ["Milanesa", "Fideos con salsa" , "Carne", "Papas Fritas" , "Albondigas"]


function Lista(NombresDeComidas){
    for (let i = 0; i < 5; i++){
        console.log(NombresDeComidas[i])
    }

}
Lista(NombresDeComidas)

let barrita7 = "======================== Ejercicio 7 - Imprimir 10 numeros y interrumpir en el 5 ========================"
console.log(barrita7)

let NumerosArray = ["1","2","3","4","5","6","7","8","9","10"]

function Listnum(NumerosArray){

for (let i = 0; i < 10; i++) {
 if(i === 4){
    continue;
    
 }
 console.log(NumerosArray[i])
}
    
}
Listnum(NumerosArray)

let barrita8 = "======================== Ejercicio 8 - multiplicar Array ========================"
console.log(barrita8) 

let ArrayNumerica = ["90","20","500","45","60","18","5","120","340","455","35"]

function MultiplicarArray(ArrayNumerica, n){
    
    for(let i = 0; i <= 10; i++)
    console.log(`${ArrayNumerica[i]} x ${n} = ${ArrayNumerica[i] * n}` )
    

}
MultiplicarArray(ArrayNumerica,4)















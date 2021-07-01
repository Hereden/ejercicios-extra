/*
*Escribir un programa que muestre un prompt donde el usuario ingresa un número, 
 *luego muestra otro prompt pidiendo otro número, 
*finalmente el programa muestra una alerta con el resultado de la suma.
*/

/* let numero1,numero2;
do{
    numero1=parseInt(prompt("Ingresa el primer numero:"));
}while(isNaN(numero1));
// is Not A Number
do{
    numero2=parseInt(prompt("Ingresa el segundo numero:"));
}while(isNaN(numero2));

console.log(`El primer numero es: ${numero1} y el segundo es: ${numero2}`);
let suma=numero1+numero2;
alert(suma);
console.log(`y la suma es: ${suma}`); */

/*Crear un programa donde el usuario 
 *ingrese en un prompt la temperatura en Celcius 
 *y el programa muestre en una alerta la temperatura en Fahrenheit. */

/* let celcius;
do{ 
    celcius=parseInt(prompt("Ingrese temperatura en Celcius:"));
    console.log(celcius);
}while(isNaN(celcius));
console.log(celcius);
let farenheit=(celcius * ( 9 / 5 ))+ 32;
alert(farenheit);
console.log(farenheit); */
//a = b
// a = c
// b = c
/* console.log(0 == "0"); //True

console.log(0 == []); //True
 
console.log("0" == []); // Santi(True) Gabi(False) */


/**
 * Pedir al usuario que ingrese un número en un prompt, 
 * hacer la suma de todos los dígitos, 
 * validar que el número ingresado no contenga letras.

 */

/* let numero,i,suma=0; // Caso 1: 123456789  Caso 2: "-9" 1-9
do{
    numero=parseInt(prompt("Ingresa un número:"));
}while(isNaN(numero)); */
//9
// 1+ 2+3+4+5+6+7+8+9=
//-9
// 1+2+3+4+5+6+7+8+9+10+11
// suma=undefined
// Gabi(Undefined) Santi(Undefined)
//console.log(numero);
/* if(numero>=0){
    for(i=1;i<=numero;i++){
        suma=suma+i;
        //suma+=i;
    }
}else{
    //0
    //i=-1 (i>numero) -1>0
    //i=-2 (-2>0) True
    
    for(i=-1;i>=numero;i--){
        suma=suma+i;
        //suma+=i;
    }
} 
console.log(suma); */


/**Crear un array vacío, luego generar 20 números al azar y guardarlos en un array. */
//Declarar array vacio
/* let arrayVacio=[];
//Declarar e inicializarlo con lo que vamos a iterar
let i=0;

for(i=0;i<20;i++){
    arrayVacio[i]= Math.random();
} 

do{
    arrayVacio[i]=Math.random();
    i++;
}while(i<20)
i=0;
do{
    console.log(`La posicion ${i+1} del array contiene el numero: ${arrayVacio[i]}`);
    i++;
}while(i<20) */


/**El usuario ingresa dos conjuntos de números separados por coma, 
 * el programa debe determinar si ambos conjuntos tienen la misma 
 * cantidad de números.
 * 
*/

let conjunto1=prompt("Escribe los numero separados por una coma: 3,4,5,7");
let conjunto2=prompt("Escribe los numero separados por una coma: 3,4,5,7");
conjunto1=conjunto1.split(",");
//4,5,6,7,8,9
//conjunto1[0]=4,conjunto1[1]=5,conjunto1[2]=6...
conjunto2=conjunto2.split(",");
let i,conteo1=0,conteo2=0;
for(i=0;i<conjunto1.length;i++){
    if(!isNaN(parseInt(conjunto1[i]))){
        conteo1++;
    }
}
for(i=0;i<conjunto2.length;i++){
    if(!isNaN(parseInt(conjunto2[i]))){
        conteo2++;
    }
}
console.log(conteo1+" "+conteo2);
if(conteo1==conteo2){
    console.log("Contienen la misma cantidad de numeros");
}else{
    console.log("Contienen una diferente cantidad de numeros");
}
if(conjunto1.length==conjunto2.length){
    console.log("Contienen la misma cantidad de numeros 1");
}else{
    console.log("Contienen una diferente cantidad de numeros 1");
}
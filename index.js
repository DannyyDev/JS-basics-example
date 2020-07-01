const booltrue = true; //Tipo de dato booleano
const boolfalse = false; //Tipo de dato booleano
var entero = 1; //Tipo de dato entero
var flotante = 1.1; //Tipo de dato flotante
const stringconst = "a";
/*
No es compatible con los cambios de valores por ejemplo
stringconst = "a"
*/
var stringvar = "b";
//Es compatible con los cambios de valores
let stringlet = "c";
//Es compatible con los cambios de valores
if (stringvar) //verá si la variable indicada tiene un valor o no basándose en los booleanos true y false
if (stringlet == "c") //verá si el valor de la variable indicada es igual a "c" 
function nombreDeFuncion(){
//aquí va el código a ser ejecutado
};
function tipoDeDato(variable){
    return console.log(typeof variable); //Devolverá el tipo de dato
};
tipoDeDato(entero);//Llamamos a la función "tipoDeDato"
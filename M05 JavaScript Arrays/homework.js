/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
  return array[0];
  //console.log(array.find(num => num > 10));
  //var primerElemento = (array.find(num => num > 10));
  //console.log(resul);

}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];
   //var ultimoElemento = array.lastindexof
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   
   return array.length;

}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoArray = [];
   for(var i = 0; i < array.length; i++) {
     nuevoArray[i] = array[i] + 1;
   }
 
   return nuevoArray;
 

}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ')
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   //var existe = array.includes(elemento);
   //return existe;

   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sumaTotal = 0;
   for (var i = 0; i < arrayOfNums.length; i++){
   var valorElementoRecorrido = arrayOfNums[i];
   sumaTotal = sumaTotal + valorElementoRecorrido;
   }
   return(sumaTotal);
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var sumaNotas = 0
   var cantidadNotas
   var promedioNotas
   for(var i = 0; i < resultadosTest.length; i++){
   sumaNotas = sumaNotas + (resultadosTest[i]);
   cantidadNotas = resultadosTest.length;
   promedioNotas = sumaNotas / cantidadNotas;
}
return Math.round(promedioNotas);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
  
  // var maximo = numeros[0];
  // for(var i = 1; i < numeros.length; i++) {
  //   if(numeros[i] > maximo) { 
  //     maximo = numeros[i];
  //   }
  // }
  // return maximo;
 
  var maximo = arrayOfNums[0];
  for(var i = 1; i < arrayOfNums.length; i++){
   if (arrayOfNums[i] > maximo){
      maximo = arrayOfNums[i];
   }
   }
   return maximo;
   //numeroMasGrande([1,5,9,15,3])
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
  
   if(arguments.length < 1) return 0;

   totalMultiplicacion = 1;
   for(var i=0; i < arguments.length; i++){
      var valorRecibido = arguments[i];
      totalMultiplicacion = totalMultiplicacion * valorRecibido;

   }
   return totalMultiplicacion;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cantidadElementos =0;
   for (var i=0; i < array.length; i++){
      if(array[i]>18){
         cantidadElementos=cantidadElementos+1;
      }
   }
   return cantidadElementos;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
 
  
  if(numeroDeDia===1 || numeroDeDia===7){
   return "Es fin de semana";
  } else return 'Es dia laboral';
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
//if(num ===9){
    //  return true;
   //} else return false;

   var text = String(num);
   if (text.charAt(0)==="9"){
     return true;
   } else return false;
  //var aString = num.split('');
  //console.log(aString);
  
}

function todosIguales(array) {
  
var todosIguales = array.every(num => num === array[0]);
return todosIguales;

   //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
   //retornar true, caso contrario retornar false.
   //Escribe tu código aquí  
   
   //este es bueno pero usar metodo de array m,ejor
  // for (var i =0 ; i < arreglo.length; i++) {
    // if(array[i] !== array[0]){
    //   return false
    // }
   //}
   //return true
 
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
  
  var mesesencontrados =[];
  for (var i = 0; i < array.length ; i++){
   if(array[i]=='Enero' || array[i]=='Marzo' || array[i]=='Noviembre'){
     mesesencontrados.push(array[i]);
     //mesesencontrados[i]=array[i];
   }
}
if(mesesencontrados.length < 3 ){
   return 'No se encontraron los meses pedidos'
}else{
return mesesencontrados;
     }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tablaDelSeis = [];
   for(var i=0; i <11; i++){
      tablaDelSeis.push(6 * i);
      }
      
   return tablaDelSeis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
  
    
  var nuevoAreglo = [];
  for(var i=0; i < array.length; i++) {
   if(array[i] > 100 && array[i]< 201){
         nuevoAreglo.push(array[i]);
   }
   
  }
  
  return(nuevoAreglo);
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var aumento =2;
   var suma = num;
  
   var array = [];
  
   for( var i=0; i < 10; i++){
      
      suma = suma + aumento;
      if(suma === i)
         break;
        
         
       else {
         array.push(suma);
      }
      
   } if ( i < 10){
      console.log(i);
      return 'Se interrumpió la ejecución'
      
   } else {
      return array;

   }
   
   }


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   
   var suma = num;
  
   var array = [];
  
  for( var i=0; i < 10; i++){
      
     
      if(i === 5)
         continue;
         suma = suma + 2;
         array.push(suma);
   
     

    //for( var i=0; i < 10; i++){
      
      //suma = suma + aumento;
      //if(suma === 5 && i === 5){
        // break;
         //array.push(suma);
     // }
         
       //else {
        // array.push(suma);
      //}
      
   //}
       
//}
//return array;

//este es
//let arreglo = []
  // for( let i = 0 ; i < 10 ; i++ ){
      //if( i === 5 )
       //  continue;
     // num = num + 2
     // arreglo.push(num)
  // }
   //return arreglo
   }
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

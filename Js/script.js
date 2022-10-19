/* Declarar funcion para el calculo total y las variables necesarias */
function calculoTotal(){

    
   let cantidadEntradas,
   total, 
   categoria,
   entradaEstudiante,
   entradaTrainee,
   entradaJunior,
   entradaGeneral;

   cantidadEntradas = document.getElementById('inputCantidad').value;
   categoria = document.getElementById('inputCategoria').value;
   entradaEstudiante = 200 - (200 * 80) / 100;
   entradaTrainee = 200 - (200 * 50) / 100;
   entradaJunior = 200 - (200 * 15) / 100;
   entradaGeneral = 200;

/* Primero verifico si es mayor que 0, si es un numero entero y si es Number */

   
   if (cantidadEntradas > 0 && cantidadEntradas % 1 == 0 && !isNaN(cantidadEntradas) ){
    
        if (categoria == 'Estudiante'){
            total = entradaEstudiante * cantidadEntradas;
            document.getElementById('Total').innerHTML = 'Total a pagar: $' + total;
        } else if (categoria == 'Trainee'){
            total = entradaTrainee * cantidadEntradas;
            document.getElementById('Total').innerHTML = 'Total a pagar: $' + total;
        }else if (categoria == 'Junior'){
            total = entradaJunior * cantidadEntradas;
            document.getElementById('Total').innerHTML = 'Total a pagar: $' + total;
        }else if (categoria == 'General'){
            total = entradaGeneral * cantidadEntradas;
            document.getElementById('Total').innerHTML = 'Total a pagar: $' + total;
        }
   }else{
    alert('Solo se permiten números enteros mayores a 0')
   }
   
}
/* Resetear total a pagar */
function borrar() {
    document.getElementById('Total').innerHTML = 'Total a pagar: ';
  }

   

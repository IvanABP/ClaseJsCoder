let numero1 = parseFloat(prompt("Digite el primer valor:"));
let numero2 = parseFloat(prompt("Digite el el segundo valor valor:"));
let resultado = 0;

let condicion = prompt("Que desea realizar \n1-Suma\n2-Resta\n3-Division\n4-Multiplicacion");

if(condicion == 1){
   resultado = numero1+numero2;
   alert("La sumatoria de sus dos numero es: "+resultado); 
}

else if (condicion == 2){
    resultado = numero1-numero2;
   alert("La resta de sus dos numero es: "+resultado);
}
else if (condicion == 3){
    if( numero2 == 0){
        alert("No se puede dividir por 0")
    }
    else{
        resultado = numero1/numero2;
        alert("La division de sus dos numero es: "+resultado);
    }
    
}

else{
    resultado = numero1*numero2;
    alert("La multiplicacion de sus dos numero es: "+resultado);
}

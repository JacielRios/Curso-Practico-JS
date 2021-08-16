//Codigo del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
} 

//Codigo del triangulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
    
function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

//codigo del circulo

//Diametro
function diametroCirculo(radio){
    return radio + radio;
} 

//PI
const PI = Math.PI;


//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}

//Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value); //se llama a la funcion ya hecha y se le da el valor que ingresa el usuario como argumento
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value); 
    alert(area);
}

function calcularPerimetroTriangulo(){
    const ladoA = document.getElementById("InputTriangulo1");
    const ladoB = document.getElementById("InputTriangulo2");
    const ladoC = document.getElementById("InputTriangulo3");

    const lado1 = ladoA.value;
    const lado2 = ladoB.value;
    const lado3 = ladoC.value;

    const input1 = Number(lado1);
    const input2 = Number(lado2);
    const input3 = Number(lado3);

    const perimetro = perimetroTriangulo(input1, input2, input3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const lado1 = document.getElementById("InputTriangulo3");
    const lado2 = document.getElementById("InputTriangulo4");

    const base = lado1.value;
    const altura = lado2.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const number = input.value;

    const radio = Number(number);

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);
}

function calcularAltura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
       const numberA = lado1 * lado1;
       const numberB = (base/2);
       const numberC = numberB*numberB;
       const numberD =  numberA - numberC;
       const altura = Math.sqrt(numberD); 

       console.log(altura);
    }
    else{
        console.log("no es un triangulo isosceles");
    }

}
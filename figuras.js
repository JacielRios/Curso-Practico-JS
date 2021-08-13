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
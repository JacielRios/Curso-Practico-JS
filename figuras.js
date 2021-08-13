//Codigo del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//Codigo del triangulo

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriagulo = 4;

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriagulo
    + "cm"
    );

    const alturaTriangulo = 5.5;
    console.log("La altura del triangulos mide: " + alturaTriangulo + "cm");

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriagulo;
    console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

    const areaTriangulo = (baseTriagulo * alturaTriangulo) / 2;
    console.log("El area del triangulo mide: " + areaTriangulo + "cm^2")

console.groupEnd();

//codigo del circulo

console.group("Circulos");

//Radio
const radioCirculo = 4;
console.log("El radio del ciruculo es: " + radioCirculo + "cm")

//Diametro
const diametroCirculo = radioCirculo + radioCirculo;
console.log("El diametro del circulo es: " + diametroCirculo + "cm")

//PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del ciurculo es: " + perimetroCirculo + "cm");

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();
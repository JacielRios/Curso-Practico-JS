//una persona recorre 5 km, el 1er kilometro corre a 4km/h, el 2do a 8km/h, el 3ero a 2km/h, el 4to a 2km/h y el ultimo a 6km/h encuentra la media armonica
// total ==> 5 km
// velocidades ==> 4km, 8km, 2km, 2km y 6km

// const array1 = [
//     4,8,2,2,6,
// ];

function calcularMediaArmonica(array1){
    // const ordenArray = array1;
    // ordenArray.sort(function(a,b){
    //     return a - b;
    // });
    
    const valorInvertido = array1.map(function(elem){
        return  1 / elem;
    });
    
    const sumaValoresInvertidos = valorInvertido.reduce(function(elemA = 0, elemB){
        return elemA + elemB;
    });
    
    const mediaArmonica = array1.length / sumaValoresInvertidos;

    console.log("La media armonica es de " + mediaArmonica);
};
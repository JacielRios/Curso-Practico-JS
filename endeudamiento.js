function calcularCapacidadDeEndeudamiento (){
    const inputIngresos = document.getElementById("IngresosTotales");
    const valueIngresosTotales = inputIngresos.value;
    const ingresosTotales = Number(valueIngresosTotales);
    const inputGastosFijos = document.getElementById("GastosFijos");
    const valueGastosFijos = inputGastosFijos.value;
    const gastosFijos = Number(valueGastosFijos);
    const inputGastosVariables = document.getElementById("GastosVariables");
    const valueGastosVariales = inputGastosVariables.value;
    const gastosVariales = Number(valueGastosVariales);

    const gastosMes = gastosFijos + gastosVariales;

    const capacidadDeEndeudamiento = (ingresosTotales - gastosMes) * .35;

    total.innerText = "Tu capacidad de endeudamiento es de: $" + capacidadDeEndeudamiento;
}
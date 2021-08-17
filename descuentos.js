// const precioOriginal = 330;
// const descuento = 15;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return(precioConDescuento);
}

function onclickPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function (coupon){
        return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);
    if(!userCoupon){
        alert("El cupon " + couponValue + " no es valido");
    }

    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es de: $" + precioConDescuento;
}

const coupons = [
    {
        name: "usuario-gratis",
        discount: 15,
    },
    {
        name: "usuario-premium",
        discount: 20,
    },
    {
        name: "usuario-prime",
        discount: 30,
    },
];

// let descuento;
// switch (couponValue) {
//     case "usuario-gratis":
//         descuento = 15;
//         break;
//     case "usuario-premium":
//         descuento = 20;
//         break;
//     case "usuario-prime":
//         descuento = 30;
//         break;
// }

// if (!coupons.includes(couponValue)){
//     alert("El cupon " + couponValue + " no es valido");
// } else if(couponValue === "usuario-gratis"){
//     descuento = 15;
// } else if(couponValue === "usuario-premium"){
//     descuento = 20;
// } else if(couponValue === "usuario-prime"){
//     descuento = 30;
// }


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })
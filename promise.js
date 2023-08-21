const placeorder = (startProduction) => {
    setTimeout(() => {
    console.log("Production Starts");
    startProduction();
    }, 2000);
};
const startProduction = (printID) => {
    setTimeout(() => {
    console.log("Order Placed");
    printID();
    }, 2000);
};
const printID = (productName) => {
    setTimeout(() => {
    console.log("Jio");
    productName();
    }, 2000);
};
const productName = (productDesc) => {
    setTimeout(() => {
    console.log("Recharge Krna Hai");
    startProduction();
    }, 2000);
}


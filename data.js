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
};
const productDesc = (productDesc) => {
  setTimeout(() => {
    console.log("Production Starts");
    productDesc();
  }, 2000);
};

console.log("Order is now going to take place");
placeorder(() => {
  console.log("Pass to Production");
  startProduction(() => {
    console.log("Passing to ID");
    printID(() => {
      console.log("Pass to Product Name");
      productName(() => {
        console.log("Pass to Product Desc");
        productDesc(() => {
          console.log("All tast are Done");
        });
      });
    });
  });
});

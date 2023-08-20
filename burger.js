function getBurger(callback) {
    setTimeout(() => {
    console.log("Burger is Taken");
    }, 2000);
}
function getSauce(callback) {
    setTimeout(() => {
    console.log("Sauce is Taken");
    }, 2000);
}
function getTikki(callback) {
    setTimeout(() => {
    console.log("Tikki is Taken");
    }, 2000);
}

getBurger((burger) => {
    getSauce(burger, (sauce) => {
        getTikki(burger, sauce, (tikki) => {
            console.log("Burger is Ready");
        });
    });
});

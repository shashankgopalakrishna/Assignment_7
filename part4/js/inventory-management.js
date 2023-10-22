/*eslint-env browser*/

function displayOptionDetails() {
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("Command options to enter");
    window.console.log("view : View all products in the Inventory");
    window.console.log("update : Update a product's quantity");
    window.console.log("exit : Exit program\n");
}

function display(inventoryArr) {
    inventoryArr.sort();
    inventoryArr.forEach((product) => {
        window.console.log(product[0] + " " + product[1] + " ("+ product[2]+ ") $" + product[3]);
    })
}

function update(inventoryArr) {
    var productNum = parseInt(window.prompt("Enter the SKU number to be updated"), 10);
    var quantity = parseInt(window.prompt("Enter the new stock quantity"), 10);
    var foundValidProd = false;
    if (isNaN(productNum) || isNaN(quantity)) {
        window.console.log("Enter the valid SKU Number/Quantity");
    } else {
        inventoryArr.forEach((product) => {
            if (product[0] === productNum) {
                foundValidProd= true;
                product[2] = quantity;
                window.console.log("Product " + product[0]+ " updated to new quantity which is "+ product[2]);
            }
        })
        if (!foundValidProd) {
            window.console.log("This product is not available in the Inventory");
        }
    }
}

function main() {
    var inventory = [
                        [4824, "Shirt", 10, 15.99],
                        [6343, "Jeans", 22, 39.99],
                        [3223, "Socks", 36, 9.99],
                        [2233, "Hats", 12, 14.99],
                        [9382, "Jacket", 5, 49.99]
                    ];
    var command;
    displayOptionDetails();
    while (true) {
        command = window.prompt("Enter the command to execute");
        if (command !== "" && command !== null) {
            if (command === "view") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("Invalid command to operate. Enter the view/update/exit");
            }
        } else break;
    }
    window.console.log("Program ended");
}

main();
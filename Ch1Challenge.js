/**
 * Created by anu.kanthaswamy on 2/19/16.
 */
/*
Write a program to calculate the total price of your phone purchase.
You will keep purchasing phones (hint: loop!) until you run out of money in your
bank account. You'll also buy accessories for each phone
as long as your purchase amount is below your mental spending threshold.
After you've calculated your purchase amount, add in the tax, then print out
 the calculated purchase amount, properly formatted.
Finally, check the amount against your bank account balance to see if you can afford it
 or not.

    You should set up some constants for the "tax rate," "phone price,"
    "accessory price," and "spending threshold," as well as a variable
    for your "bank account balance.""

You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
    Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!

 */

const TAX_RATE=0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE =9.9;
const SPENDING_THRESHOLD = 100;

var BANK_BALANCE = 500;

var purchaseAmt = 0;
purchasePhone();


function purchasePhone() {
   // var bal = prompt("Provide the Bank Balance? ", "Hello");
   // console.log("Bal " + bal);

    console.log("I will now ask you for your name.");
    process.stdin.setEncoding('utf8');
    var name;
    process.stdin.on('readable', function() {
        name = process.stdin.read();
        if (name !== null) {
            console.log("Hello ".concat(name, ". How are you"));
            process.exit();
        }
    });

    //var _this =this;
    console.log("Purchase Amount" + purchaseAmt);
    while (purchaseAmt < BANK_BALANCE) {

        buyPhone();
        if (purchaseAmt < SPENDING_THRESHOLD)
            buyAccessory();
    }
    calculateTax();
    console.log("Your total purchase amount is : $" + String(purchaseAmt.toFixed(2)));

    if(purchaseAmt > BANK_BALANCE)
        console.log("You cannot afford this purchase.");

}

function buyPhone() {
    //var _this =this;
    //console.log("Purchase Amount buyPhone1");
    purchaseAmt += PHONE_PRICE;
    console.log("Purchase Amount - buyPhone" + purchaseAmt);
}

function buyAccessory() {
    //var _this =this;
    purchaseAmt += ACCESSORY_PRICE;
    console.log("Purchase Amount - buyAccessory" + purchaseAmt);
}

function calculateTax() {
    purchaseAmt = purchaseAmt + purchaseAmt * TAX_RATE;
    console.log("Purchase Amount - calculateTax" + purchaseAmt);
}
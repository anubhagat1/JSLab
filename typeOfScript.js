/**
 * Created by anu.kanthaswamy on 2/19/16.
 */

var a;
console.log(typeof a);

a = "String Test";
console.log(typeof a);

a = 7;
console.log(typeof a);

a = true;
console.log(typeof a);

a= "";
console.log(typeof a);

a =undefined;
console.log(typeof a);

a = null;
console.log(typeof a);

a = {name:"Anu"};
console.log(typeof a);


a = "99.99";
var b = Number(a);
var c = String (b);

console.log(typeof a + " - " + typeof b + " - " + typeof c);

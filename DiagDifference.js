/**
 * Created by anu.kanthaswamy on 2/23/16.
 */
function calculateDiagDiff(n, arr) {
    var diag1 = 0;
    var diag2 = 0;
    //var diagDiff;


    for (var i = 0; i < n; i++) {
        //console.log(arr[i][i] + " =" + arr[i][n-i-1]);
        diag1 = diag1 + parseInt(arr[i][i]);
        diag2 = diag2 + parseInt(arr[i][n-i-1]);

       // console.log("Diag 1 " + diag1 + " Daig2 " + diag2);
    }

    var diagDiff = diag1 - diag2;
    console.log(diagDiff);
    return Math.abs(diagDiff);
}



var n = 3;
var a1 =[];
a1.push("11 2 4");
a1.push("4 5 6");
a1.push("10 8 -12");

var a = [];
for(a_i = 0; a_i < n; a_i++){
    a[a_i] = a1[a_i].split(' ');
    a[a_i] = a[a_i].map(Number);
    //console.log(a[a_i][0]);
}
console.log(calculateDiagDiff(n, a));



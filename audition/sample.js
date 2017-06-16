function myFunction() {
    var x = parseInt(document.getElementById('1').value);
    var y = parseInt(document.getElementById('2').value);
    var z = parseInt(document.getElementById('3').value);
    
    //alert("x: " + x + " y: " + y + " z: " + z)

    if (x > y) {
        alert("Starting value " + x + " is larger than ending value " + y)
    }

    if(isNaN(x)) {
        alert("Starting value must be numeric");
    }
    if(isNaN(y)) {
        alert("Ending value must be numeric");
    }
    if(isNaN(z)) {
        alert("Step must be numeric");
    }
    //alert("x: " + x + " y: " + y + " z: " + z)
    if (z <= 0) {
        alert("Step count must be greater than 0");
    } 

    var arr= [];
    for (i = x; i <= y; i++) { 
        if (i%2==0){
            arr.push(i);
        }
    }
    var arr2= []; 
    for (i = 0; i < arr.length; i=i+z) {
        arr2.push(arr[i]);
    }
    document.getElementById("sample").innerHTML =  arr2;
    
    xvalue();
    yvalue();
    zvalue();
}

function xvalue(){
    var s = parseInt(document.getElementById('1').value);
    document.getElementById("xval").innerHTML =  s;
    
}
function yvalue(){
    var v = parseInt(document.getElementById('2').value);
    document.getElementById("yval").innerHTML =  v;
    
}
function zvalue(){
    var k = parseInt(document.getElementById('3').value);
    document.getElementById("zval").innerHTML =  k;
    
}
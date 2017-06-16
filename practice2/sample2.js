function practice(){
   document.getElementById("sample").innerHTML = "Hello " + document.getElementById('1').value + ", try these functions!";
}

function idk(){
    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);  
    var z = x + y;

    document.getElementById("a").innerHTML = z ; 
}

function subkev(){
    var xz = parseInt(document.getElementById('e1').value);
    var yz = parseInt(document.getElementById('f1').value);  
    var zz = xz - yz;
    //alert("xz: " + xz + " yz: " + yz + " zz: " + zz);
    document.getElementById("b1").innerHTML = zz ; 
}

function b(){
    var xb = parseInt(document.getElementById('g').value);
    var yb = parseInt(document.getElementById('h').value);  
    var zb = xb * yb;

    document.getElementById("c").innerHTML = zb; 
}

function c(){
    var xc = parseInt(document.getElementById('i').value);
    var yc = parseInt(document.getElementById('j').value);  
    var zc = xc / yc;

    document.getElementById("d").innerHTML = zc;  
}

function fun(){
    var xa = parseInt(document.getElementById('k').value);
    var ya = parseInt(document.getElementById('l').value);
    if (xa > ya) {
        alert("Starting value " + xa + " cannot be larger than ending value " + ya)
    }
    var arra = [];
    for(i = xa; i <= ya; i++){
        arra.push(i)
        }
    
    document.getElementById("m").innerHTML = arra;
    }

function even(){
    var xe = parseInt(document.getElementById('n').value);
    var ye = parseInt(document.getElementById('o').value);
    if (xe > ye) {
        alert("Starting value " + xe + " cannot be larger than ending value " + ye)
    }
    var arre = [];
    for(i = xe; i <= ye; i++){
        if (i%2==0){
            arre.push(i);
        }
    }

    document.getElementById("p").innerHTML = arre;
}

function what(){
    var xo = parseInt(document.getElementById('q').value);
    var yo = parseInt(document.getElementById('r').value);
    if (xo > yo) {
        alert("Starting value " + xo + " cannot be larger than ending value " + yo)
    }
    var arro = [];
    for(i = xo; i <= yo; i++){
        if (i%2!=0){
            arro.push(i);
        }
    }

    document.getElementById("s").innerHTML = arro;
}
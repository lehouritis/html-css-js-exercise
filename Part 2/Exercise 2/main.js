var clicks1 = 1;
var clicks2 = 1;
var clicks3 = 1;


function minus1() {
    clicks1 -= 1;
    if (clicks1<=0){
        clicks1+=1
    }
    document.getElementById("counter1").innerHTML = clicks1;
};

function plus1() {
    clicks1 += 1;
    if (clicks1>=9){
        clicks1-=1
    }
    document.getElementById("counter1").innerHTML = clicks1;
};

function minus2() {
    clicks2 -= 1;
    if (clicks2<=0){
        clicks2+=1
    }
    document.getElementById("counter2").innerHTML = clicks2;  
};

function plus2() {
    clicks2 += 1;
    if (clicks2>=9){
        clicks2-=1
    }
    document.getElementById("counter2").innerHTML = clicks2;
};

function minus3() {
    clicks3 -= 1;
    if (clicks3<=0){
        clicks3+=1
    }
    document.getElementById("counter3").innerHTML = clicks3;
};

function plus3() {
    clicks3 += 1;
    if (clicks3>=9){
        clicks3-=1
    }
    document.getElementById("counter3").innerHTML = clicks3;
};

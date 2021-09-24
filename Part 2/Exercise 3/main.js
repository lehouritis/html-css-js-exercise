let clicks1 = 1;
let clicks2 = 1;
let clicks3 = 1;


function minus1() {
    clicks1 -= 1;
    if (clicks1 <= 0) {
        clicks1 += 1
    }
    document.getElementById("counter1").innerHTML = clicks1;
};

function plus1() {
    clicks1 += 1;
    if (clicks1 >= 9) {
        clicks1 -= 1
    }
    document.getElementById("counter1").innerHTML = clicks1;
};

function minus2() {
    clicks2 -= 1;
    if (clicks2 <= 0) {
        clicks2 += 1
    }
    document.getElementById("counter2").innerHTML = clicks2;
};

function plus2() {
    clicks2 += 1;
    if (clicks2 >= 9) {
        clicks2 -= 1
    }
    document.getElementById("counter2").innerHTML = clicks2;
};

function minus3() {
    clicks3 -= 1;
    if (clicks3 <= 0) {
        clicks3 += 1
    }
    document.getElementById("counter3").innerHTML = clicks3;
};

function plus3() {
    clicks3 += 1;
    if (clicks3 >= 9) {
        clicks3 -= 1
    }
    document.getElementById("counter3").innerHTML = clicks3;
};

class Student {
    constructor(name) {
        this.name = name;
        this.calculus = 0;
        this.literature = 0;
        this.physics = 0;
        this.average = 0;
    }
}

var studentList = [
    new Student("John Doe"), 
    new Student("Mary Mope"), 
    new Student("July Dooley")
];

function john (){
    document.getElementById("exampleModalLabel").innerHTML = studentList[0].name;
    
}

function mary (){
    document.getElementById("exampleModalLabel").innerHTML = studentList[1].name;
    
}

function july (){
    document.getElementById("exampleModalLabel").innerHTML = studentList[2].name;
    
}

function getAvgGrade(){
    if (document.getElementById("exampleModalLabel").innerText=="John Doe"){
        studentList[0].calculus=parseInt(document.getElementById("calculus").value);
        studentList[0].literature=parseInt(document.getElementById("literature").value);
        studentList[0].physics=parseInt(document.getElementById("physics").value);
        studentList[0].average=(studentList[0].calculus+studentList[0].literature+studentList[0].physics)/3

        var x1=studentList[0].average.toFixed(1);
        document.getElementsByClassName("avg")[0].innerHTML=x1;
    
    }else if(document.getElementById("exampleModalLabel").innerText=="Mary Mope"){
        studentList[1].calculus=parseInt(document.getElementById("calculus").value);
        studentList[1].literature=parseInt(document.getElementById("literature").value);
        studentList[1].physics=parseInt(document.getElementById("physics").value);
        studentList[1].average=(studentList[1].calculus+studentList[1].literature+studentList[1].physics)/3

        var x2=studentList[1].average.toFixed(1)
        document.getElementsByClassName("avg")[1].innerHTML=x2;
    
    
    }else if(document.getElementById("exampleModalLabel").innerText=="July Dooley"){
        studentList[2].calculus=parseInt(document.getElementById("calculus").value);
        studentList[2].literature=parseInt(document.getElementById("literature").value);
        studentList[2].physics=parseInt(document.getElementById("physics").value);
        studentList[2].average=(studentList[2].calculus+studentList[2].literature+studentList[2].physics)/3

        var x3=studentList[2].average.toFixed(1)
        document.getElementsByClassName("avg")[2].innerHTML=x3;
    }

    document.getElementById("calculus").value=" ";      //in order to 
    document.getElementById("literature").value=" ";    //clear the inputs
    document.getElementById("physics").value=" ";       //when the user gives values to the classes
}  
    




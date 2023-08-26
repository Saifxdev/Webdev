function msg(){
    document.write("i am written outside the html")
}

function f1(){
     alert("you click me:")
}

function add(){
    var x=10;
    var y=20;
    var c=x+y; // this is a single line comment
    document.write(c);
}

 
function con(){
    var x=10;
    if(x>20){
        document.write(x,"is smaller than");
    }
    else{
        document.write(x," is biggger");
    }
}

function loop(){
    for( var i=0; i<5; i++){
        document.write(i ,"</br>");
    }

}

function  arg(nu){
    alert("cube is :",nu*nu*nu);
}

function ret(){
    return("hello jack");
}


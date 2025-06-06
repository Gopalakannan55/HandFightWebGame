var att=1;
var citva=0;
let uitva=0;
//this is a main function
function game(){
  game()
}
function game(name){
    //Declare a array and random functions
    var array=["stone","paper","scissor"];
    var ranin=Math.floor(Math.random()*array.length);
    var citem=array[ranin];
    var uitem=name;
    //To check the conditions 
    if(uitem==citem){
        document.getElementById("val").innerHTML="Die try agine";
        att+=1;
    }
    else if(uitem=="stone"&& citem=="scissor"){
        document.getElementById("val").innerHTML="You won";  
        citva=uitva+1;
        att+=1;
    }
    else if(uitem=="stone"&& citem=="paper"){
        document.getElementById("val").innerHTML="You won";
        uitva=uitva+1;
        att+=1;
    }
    else if(uitem=="scissor"&& citem=="paper"){
        document.getElementById("val").innerHTML="You won";
        uitva=uitva+1;
        att+=1;
    }
    else{
        document.getElementById("val").innerHTML="Opponent won";
        citva=citva+1;
        att+=1;
    }
    document.getElementById("csr").innerHTML=citva;
    document.getElementById("usr").innerHTML=uitva;
    //check the conditions how many times attempt
    if(att==11){
        if(citva>=uitva){
            document.getElementById("val").innerHTML="<p>Game is over !</p><p>So sad ! opponent is win</p>";
        }
        else{
        
            document.getElementById("val").innerHTML="<p>Game is over !</p><p>Congratilation</p>";
        }}
}  
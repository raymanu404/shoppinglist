
// de obicei cand iei elemente din TagName trebuie sa fii constient ca ele se gasesc in lista asa ca iei elementul specific 
// pentru a adauga eventuri trebuie scris asa
//  addEventListener avem eventul propriu zis "click" dupa care avem functie Misto!
var button = document.getElementById("enter"); 
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = ul.getElementsByTagName("li");

// pentru a vedea numarul total de elemente din lista
var output = document.getElementById("out");
var output1 = document.getElementsByTagName("input")[1];


//reset button
var res = document.getElementById("reset");
res.addEventListener("click",reset);
function reset(){
         ul.innerHTML =' ';
         checkList();
}

function checkList(){
    if (li.length === 0){
        countVar = 0;
        output1.value = countVar;
    }
}

// pentru background
var background1 = document.getElementById("change-background");
var count = 0;
background1.addEventListener("click",change_background);

function change_background(){
   
    switch(count){
        case 0: 
            document.body.style.backgroundColor = "#FFB100";
            count = 1;
            break;
        case 1:
            document.body.style.backgroundColor ="#2FB100";
            count =2;
            break;
        case 2:
            document.body.style.backgroundColor = "rgb(24, 240, 175)";
            count = 0;
            break;
    }
   
}

var countVar = 0;
function inputLength(){
    return input.value.length;
}
console.log(output);

//add in list
function AddElementInList(){
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener("click",toggleDone);
    ul.appendChild(li);
    input.value="";

    var delBtn = document.createElement("button");
   
    //delBtn.innerHTML = "Delete" //poti scrie ce vrei tu


    delBtn.appendChild(document.createTextNode("X"));
    delBtn.classList.add("cusBtn");
    // asta e cu clasele te joci cu ele pe elemente
    delBtn.addEventListener('click', delItem);
    li.append(delBtn);


    //delete from list
    function delItem(){     
         li.remove();
         countVar--;
         output1.value =countVar;
    }

    //toggleDone
    function toggleDone(){
        li.classList.toggle("done"); 
        // classList asta e cu clasele
    }    

}

function CheckOnClick(){
        if(inputLength() > 0 ){ 
            AddElementInList();
            countVar++; 
            output1.value =countVar;
        }
    
}
function CheckOnKeypress(event){
        if(inputLength() > 0 && event.which === 13){  // sau event.keyCode === 13 acelasi lucru dar e mai bine which 'enter' =13 
        AddElementInList();
           countVar++; 
           output1.value =countVar;
        }
    
}

button.addEventListener("click",CheckOnClick); //adaugi un event
input.addEventListener("keypress",CheckOnKeypress);

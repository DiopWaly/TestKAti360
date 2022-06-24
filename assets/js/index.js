// navigation beetwen page
function redirect(url){
    location.replace(url)
    // window.location.href = './agriculture.html';
}
let temoinClick = 0;
let temoinClickOp = 0;
let temoinClickOpProd = 0;
let boutonActive = document.getElementsByClassName("action");
console.log("Diop",document.getElementById("radioCheck"));
// disnabled();

function disnabled(){
    boutonActive[0].disabled = true;
    boutonActive[1].disabled = true;
    boutonActive[2].disabled = true;
}
function enabled(){
    boutonActive[0].disabled = false;
    boutonActive[1].disabled = false;
    boutonActive[2].disabled = false;
}
function selected(page){
    if(page === "agriculture"){
        let el = document.getElementsByClassName("service");
        el[0].style.background = "rgb(75 195 19 / 16%)";
        el[0].style.border = "2px solid #4BC313";
        el[0].style.color = "#4BC313";
        temoinClick ++;
        document.getElementById("nbchois").innerHTML = temoinClick; 
        document.getElementById("radioCheck").innerHTML += "<div></div>";
        if(temoinClick > 0){
            enabled();
            boutonActive[0].style.background = "#4BC313";
            boutonActive[1].style.background = "#4BC313";
            boutonActive[2].style.background = "#4BC313";
        }else{
            disabled();
        }
        
    }
    if(page === "operation"){
        document.getElementById("radioCheck").innerHTML += "<div></div>";
        let btn = document.getElementsByClassName("action");
        btn[0].style.background = "#4BC313";
        let el = document.getElementsByClassName("service");
        el[2].style.background = "rgb(75 195 19 / 16%)";
        el[2].style.border = "2px solid #4BC313";
        el[2].style.color = "#4BC313";
        temoinClickOp ++;
        if(temoinClickOp > 0){
            btn[0].style.background = "#4BC313";
        }
    }
    if(page === "operationProd"){
        document.getElementById("radioCheck").innerHTML += "<div></div>";
        let btn = document.getElementsByClassName("action");
        btn[0].style.background = "#4BC313";
        let el = document.getElementsByClassName("service");
        el[2].style.background = "rgb(75 195 19 / 16%)";
        el[2].style.border = "2px solid #4BC313";
        el[2].style.color = "#4BC313";
        temoinClickOp ++;
        if(temoinClickOpProd > 0){
            btn[0].style.background = "#4BC313";
        }
    }
}
function testValueInput(input){
    console.log("ttt :",document.getElementsByClassName("form__input")[0].value);
    let q = document.getElementsByClassName("form__input")[0].value;
    let p = document.getElementsByClassName("form__input")[1].value;
    if(q !== "" && p !== ""){
        document.getElementsByClassName("action1")[0].style.background = "#4BC313";
    }
}
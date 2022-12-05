
function btnClicked(element){

    let btnValue = document.getElementById("display-result").innerHTML;
    document.getElementById("display-result").innerHTML = btnValue + element.innerText;
    
}


function cleanClicked(){
    document.getElementById("display-result").innerHTML = "";
}


function undoClicked(){
    let result = document.getElementById("display-result").innerHTML;
    document.getElementById("display-result").innerHTML = result.slice(0, -1);
}


function equalClicked(){
    
    let result = document.getElementById("display-result").innerHTML;

    try{
        document.getElementById("display-result").innerHTML = eval(result);
    }catch (error){
        alert("Type a valid expression");
    }

    

}
const plusB =document.getElementById("plus");
const minusB = document.getElementById("minus");
const input = document.getElementById("input");
const row1 = document.getElementById("row1");

plusB.addEventListener("click",function(){
    let displayNum = parseInt(row1.innerHTML)+ parseInt(input.value);
    row1.innerHTML= displayNum;
    if(displayNum < 0)
    {
        row1.style.color = "red";
    }else{
        row1.style.color = "black";
    }
});

minusB.addEventListener("click",function(){
    let displayNum = parseInt(row1.innerHTML)- parseInt(input.value);
    row1.innerHTML= displayNum;
    if(displayNum < 0)
    {
        row1.style.color = "red";
    }else{
        row1.style.color= "black";
    }
});
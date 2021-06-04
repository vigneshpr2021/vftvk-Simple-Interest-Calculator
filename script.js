function compute()
{
    //To validate the principal amount
    if(checkprincipal()) {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var amount = principal*years*rate/100; //To compute the simple interest
        var year = new Date().getFullYear()+parseInt(years); //To convert "No of Years" into an actual year
        document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\> at an interest rate of \<mark\>"+rate+"%\</mark\>.\<br\>You will receive an amount of \<mark\>"+amount+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>"
    }  
}
function updateRate() //To read and display the interest rate dynamically against the slider 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function checkprincipal() 
{
    var principal = document.getElementById("principal");
    //Check if principal amount is zero/negative
    if(principal.value<=0){
        alert("Enter a positive number")
        principal.focus();
        return false;
    }
    //If principal amount is positive, return true
    return true;
}       
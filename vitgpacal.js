function gpa(){
    let sum = 0;
    let credits = 0;
    const el = document.querySelectorAll("select");
    for(let i = 0 ; i < 19 ; i+=2){
        if(el[i].value !== "NULL"){
            sum += el[i].value*el[i+1].value;
            credits += el[i].value*1;
        }
        
    }
    let result = document.querySelector("#result");
    result.innerHTML = Math.round(sum*100/credits)/100;
    

}

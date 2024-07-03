function result(){
    let all = document.querySelectorAll("input");
    let need = all[0].value*(all[2].value*1+all[3].value*1)
    let current = all[2].value*all[1].value;
    let up = (need - current)*1;
    let result = up*1/all[3].value*1;
    const r = document.querySelector("h4");
    if(result > 10){
        r.innerHTML = "NOT POSSIBLE";
    }
    else{
        r.innerHTML = "YOU NEED " + Math.round(result*100)/100 + " GPA";
    }

}
function reset(){
    let a = document.querySelectorAll("input");
    let r = document.querySelector("h4");
    a[0].value = "";
    a[1].value = "";
    a[2].value = "";
    a[3].value = "";
    r.innerHTML = "";

}
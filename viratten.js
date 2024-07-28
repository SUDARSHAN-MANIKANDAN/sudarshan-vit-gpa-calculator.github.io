function result(){
    const present =  parseFloat(document.querySelector(".present").value);
    const total =  parseFloat(document.querySelector(".total").value);
    const percentage =  parseFloat(document.querySelector(".percentage").value);
    const result = document.getElementById("result");
        


  let flag = 0;

    if((present*100)/total > percentage){
        for(let i = 1 ; i < 600 ; i++){
            if((present*100)/(total+i) <= percentage){
                i-=1;
                result.innerHTML = "YOU CAN BE ABSENT FOR " + i + " CLASSES";
                if((present*100)/(total+i) == percentage){
                    result.innerHTML = "YOU CAN BE ABSENT FOR " + i+1 + " CLASSES";
                }
                flag = 1;
                break;
            }

        }
    }
        else{
            for(let i = 1 ; i < 600 ; i++){
                if(((present+i)*100/(total+i)) >percentage){
                    result.innerHTML= "YOU MUST BE PRESENT FOR " + i + " CLASSES";
                    
                    flag = 1;
                    break;
                }
        }
    }
    if(flag===0){
        result.innerHTML = "NOT POSSIBLE TO REACH " + percentage + " PERCENTAGE";
        
    }

}
function reset(){
    document.querySelector(".present").value="";
    document.querySelector(".total").value="";
    document.querySelector(".percentage").value="";
    document.querySelector("#result").innerHTML="";
}
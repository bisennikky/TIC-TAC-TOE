
let count = 1;

const fill = (mentor) =>{
    
    if(count<=9){
    if(count%2==0){
    document.getElementById(mentor.id).innerHTML = "x"; 
}else{
    document.getElementById(mentor.id).innerHTML = "0"; 
  }
  count++;
  if(winner()){
    alert("winner");
    reset();
  }
}else{
    alert("Match Over");
    reset();
}
}

const reset = () =>{
    for(let i=1; i<=9; i++){
     document.getElementById("div"+i).innerHTML = ""; 
    }
    count = 1;
 }
 const winner = () =>{
        if(document.getElementById("div1").innerHTML!= "" 
        && document.getElementById("div2").innerHTML!= ""
        && document.getElementById("div3").innerHTML!= ""
        && document.getElementById("div1").innerHTML == 
        document.getElementById("div2").innerHTML
        && document.getElementById("div2").innerHTML ==
        document.getElementById("div3").innerHTML){
        
        return true;
    }else if(
        document.getElementById("div4").innerHTML!= "" 
        && document.getElementById("div5").innerHTML!= ""
        && document.getElementById("div6").innerHTML!= ""
        && document.getElementById("div4").innerHTML == 
        document.getElementById("div5").innerHTML
        && document.getElementById("div5").innerHTML ==
        document.getElementById("div6").innerHTML){
            return true;
        }else if (
            document.getElementById("div7").innerHTML!= "" 
        && document.getElementById("div8").innerHTML!= ""
        && document.getElementById("div9").innerHTML!= ""
        && document.getElementById("div7").innerHTML == 
        document.getElementById("div8").innerHTML
        && document.getElementById("div8").innerHTML ==
        document.getElementById("div9").innerHTML){
            return true;
        }else if(
            document.getElementById("div1").innerHTML!= "" 
        && document.getElementById("div4").innerHTML!= ""
        && document.getElementById("div7").innerHTML!= ""
        && document.getElementById("div1").innerHTML == 
        document.getElementById("div4").innerHTML
        && document.getElementById("div4").innerHTML ==
        document.getElementById("div7").innerHTML){
            return true;
        }else if (
            document.getElementById("div2").innerHTML!= "" 
        && document.getElementById("div5").innerHTML!= ""
        && document.getElementById("div8").innerHTML!= ""
        && document.getElementById("div2").innerHTML == 
        document.getElementById("div5").innerHTML
        && document.getElementById("div5").innerHTML ==
        document.getElementById("div8").innerHTML){
            return true;
        }else if(
            document.getElementById("div3").innerHTML!= "" 
        && document.getElementById("div6").innerHTML!= ""
        && document.getElementById("div9").innerHTML!= ""
        && document.getElementById("div3").innerHTML == 
        document.getElementById("div6").innerHTML
        && document.getElementById("div6").innerHTML ==
        document.getElementById("div9").innerHTML){
            return true;
        }else if(
            document.getElementById("div1").innerHTML!= "" 
        && document.getElementById("div5").innerHTML!= ""
        && document.getElementById("div9").innerHTML!= ""
        && document.getElementById("div1").innerHTML == 
        document.getElementById("div5").innerHTML
        && document.getElementById("div5").innerHTML ==
        document.getElementById("div9").innerHTML){
            return true;
        }else if(
            document.getElementById("div3").innerHTML!= "" 
        && document.getElementById("div5").innerHTML!= ""
        && document.getElementById("div7").innerHTML!= ""
        && document.getElementById("div3").innerHTML == 
        document.getElementById("div5").innerHTML
        && document.getElementById("div5").innerHTML ==
        document.getElementById("div7").innerHTML){
            return true;
        }    
    }
 























































    
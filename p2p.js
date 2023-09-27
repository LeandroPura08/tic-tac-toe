let nextmove ='';
document.querySelectorAll('.forcss').forEach((forcss)=>{
  nextmove = 'X';
  forcss.innerHTML=nextmove;
})

let count = 0 ;

document.querySelectorAll('.tile').forEach((tile)=>{
  tile.addEventListener('click',()=>{
  
    count = count +1;
      const tilenumber = tile.dataset.tilenumber;
        document.querySelectorAll('.move').forEach((move)=>{
          const movenumber = move.dataset.movenumber;
            if(tilenumber === movenumber){
                if(nextmove === "X" || nextmove === ""){
                  document.getElementById("header").innerHTML ="Your Turn O";
                  nextmove = "X";
                  
                  if(move.innerHTML === ""){
                    move.innerHTML = nextmove;
                    move.classList.add("selected");
                    winner();
                    nextmove = "O";

                  }
                  else{
                    alert("Already Selected");
                    return;
                  }
                  document.querySelectorAll('.forcss').forEach((forcss)=>{
                    forcss.innerHTML=nextmove;
                  })
                }else if(nextmove === "O"){
                  document.getElementById("header").innerHTML ="X turns to move";
                  nextmove = "O";
                  
                  if(move.innerHTML === ""){
                    move.innerHTML = nextmove;
                    move.classList.add("selected");
                    
                    winner();
                    nextmove = "X";
                  }
                  else{
                    alert("Already Selected");
                    return;
                  }
                  document.querySelectorAll('.forcss').forEach((forcss)=>{
                    forcss.innerHTML=nextmove;
                  })
                }
             
            } 
        })
  })
});

function winner(){
  let id1 = document.getElementById("1").innerHTML;
  let id2 = document.getElementById("2").innerHTML;
  let id3 = document.getElementById("3").innerHTML;
  let id4 = document.getElementById("4").innerHTML;
  let id5 = document.getElementById("5").innerHTML;
  let id6 = document.getElementById("6").innerHTML;
  let id7 = document.getElementById("7").innerHTML;
  let id8 = document.getElementById("8").innerHTML;
  let id9 = document.getElementById("9").innerHTML;


    if((id1=== "X" && id2 === "X" && id3 === "X") ||
    (id4 === "X" && id5 === "X"  && id6 === "X" ) ||
    (id7 === "X" && id8 === "X"  && id9 === "X" ) ||
    (id1 === "X" && id4 === "X"  && id7 === "X" ) ||
    (id2 === "X" &&  id5 === "X" && id8 === "X") ||
    (id3 === "X" && id6 === "X" && id9 === "X") ||
    (id1 === "X" && id5 === "X" && id9 === "X") ||
    (id7 === "X" && id5 === "X" && id3 === "X")
  ){
   document.querySelector('.result-container').classList.add("added-result");
   document.querySelector('.added-result').innerHTML =
   `<div class ="result">
   <div>X is the Winner</div>
   <button class="rematch">Rematch</button>
   </div>
   `
   document.querySelector('.rematch').addEventListener('click',()=>{
     document.querySelector('.result-container').classList.remove("added-result");
     document.querySelector('.result-container').innerHTML = "";
     clear();
     return;
   })
 }
 else if(
   (id1=== "O" && id2 === "O" && id3 === "X") ||
    (id4 === "O" && id5 === "O"  && id6 === "O" ) ||
    (id7 === "O" && id8 === "O"  && id9 === "O" ) ||
    (id1 === "O" && id4 === "O"  && id7 === "O" ) ||
    (id2 === "O" &&  id5 === "O" && id8 === "O") ||
    (id3 === "O" && id6 === "O" && id9 === "O") ||
    (id1 === "O" && id5 === "O" && id9 === "O") ||
    (id7 === "O" && id5 === "O" && id3 === "O")
 ){
   document.querySelector('.result-container').classList.add("added-result");
   document.querySelector('.added-result').innerHTML =
  `<div class ="result">
  <div>O is the Winner</div>
  <button class="rematch">Rematch</button>
  </div>
  `
  document.querySelector('.rematch').addEventListener('click',()=>{
   document.querySelector('.result-container').classList.remove("added-result");
   document.querySelector('.result-container').innerHTML = "";
   clear();
   return;
 })
 }

 if (count === 9){
  const winner = document.querySelector('.result-container').innerHTML;
  if (!winner){
    document.querySelector('.result-container').classList.add("added-result");
    document.querySelector('.added-result').innerHTML =
   `<div class ="result">
   <div>No Winner this Time</div>
   <button class="rematch">Rematch</button>
   </div>
   `
   document.querySelector('.rematch').addEventListener('click',()=>{
    document.querySelector('.result-container').classList.remove("added-result");
    document.querySelector('.result-container').innerHTML = "";
    clear();
    return;
  })
  }
 }
}
function clear(){
  document.getElementById("1").innerHTML = "";
  document.getElementById("2").innerHTML = "";
  document.getElementById("3").innerHTML = "";
  document.getElementById("4").innerHTML = "";
  document.getElementById("5").innerHTML = "";
  document.getElementById("6").innerHTML = "";
  document.getElementById("7").innerHTML = "";
  document.getElementById("8").innerHTML = "";
  document.getElementById("9").innerHTML = "";
  location.reload();
}

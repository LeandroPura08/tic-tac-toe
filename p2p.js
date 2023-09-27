let nextmove ='';
document.querySelectorAll('.forcss').forEach((forcss)=>{
  nextmove = 'X';
  forcss.innerHTML=nextmove;
})


let count = 0 ;
document.querySelectorAll('.tile').forEach((tile)=>{
  tile.addEventListener('click',()=>{
      const tilenumber = tile.dataset.tilenumber;
        document.querySelectorAll('.move').forEach((move)=>{
          const movenumber = move.dataset.movenumber;
            if(tilenumber === movenumber){
                if(nextmove === "X" || nextmove === ""){
                  nextmove = "X";
                  if(move.innerHTML === ""){
                    move.innerHTML = nextmove;
                    move.classList.add("selected");
                    document.getElementById("header").innerHTML ="Your Turn O";
                    count = count +1;
                    winner(count);
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
                  nextmove = "O";
                  if(move.innerHTML === ""){
                    move.innerHTML = nextmove;
                    move.classList.add("selected");
                    document.getElementById("header").innerHTML ="X turns to move";
                    count = count +1;
                    winner(count);
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
        console.log(count);
  })
});

function winner(count){
  let id1 = document.getElementById("1").innerHTML;
  let id2 = document.getElementById("2").innerHTML;
  let id3 = document.getElementById("3").innerHTML;
  let id4 = document.getElementById("4").innerHTML;
  let id5 = document.getElementById("5").innerHTML;
  let id6 = document.getElementById("6").innerHTML;
  let id7 = document.getElementById("7").innerHTML;
  let id8 = document.getElementById("8").innerHTML;
  let id9 = document.getElementById("9").innerHTML;

  //X winning conditions
  const xrow1 = id1=== "X" && id2 === "X" && id3 === "X";
  const xrow2 = id4 === "X" && id5 === "X"  && id6 === "X";
  const xrow3 = id7 === "X" && id8 === "X"  && id9 === "X";
  const xcol1 = id1 === "X" && id4 === "X"  && id7 === "X";
  const xcol2 = id2 === "X" &&  id5 === "X" && id8 === "X";
  const xcol3 = id3 === "X" && id6 === "X" && id9 === "X";
  const x45 = id1 === "X" && id5 === "X" && id9 === "X";
  const xneg45 = id7 === "X" && id5 === "X" && id3 === "X";

  //O winning conditions
  const orow1 = id1=== "O" && id2 === "O" && id3 === "O";
  const orow2 = id4 === "O" && id5 === "O"  && id6 === "O";
  const orow3 = id7 === "O" && id8 === "O"  && id9 === "O";
  const ocol1 = id1 === "O" && id4 === "O"  && id7 === "O";
  const ocol2 = id2 === "O" &&  id5 === "O" && id8 === "O";
  const ocol3 = id3 === "O" && id6 === "O" && id9 === "O";
  const o45 = id1 === "O" && id5 === "O" && id9 === "O";
  const oneg45 = id7 === "O" && id5 === "O" && id3 === "O";

  if(xrow1 || orow1){
    document.querySelector('.striker').classList.add("striker-row1");
  }else
  if(xrow2 || orow2){
    document.querySelector('.striker').classList.add("striker-row2");
  }else
  if(xrow3 || orow3){
    document.querySelector('.striker').classList.add("striker-row3");
  }else
  if(xcol1 || ocol1){
    document.querySelector('.striker').classList.add("striker-col1");
  }else
  if(xcol2 || ocol2){
    document.querySelector('.striker').classList.add("striker-col2");
  }else
  if(xcol3 || ocol3){
    document.querySelector('.striker').classList.add("striker-col3");
  }else
  if(x45 || o45){
    document.querySelector('.striker').classList.add("striker-45deg");
  }else
  if(xneg45 || oneg45){
    document.querySelector('.striker').classList.add("striker-neg45deg");
  }




    if(xrow1 || xrow2 || xrow3 || xcol1 || xcol2 || xcol3 || x45 || xneg45){
   document.querySelector('.result-container').classList.add("added-result");
   document.querySelector('.added-result').innerHTML =
   `<div class ="result">
      <div class="result-comment">X is the Winner</div>
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
 else if(orow1 || orow2 || orow3 || ocol1 || ocol2 || ocol3 || o45 || oneg45){
   document.querySelector('.result-container').classList.add("added-result");
   document.querySelector('.added-result').innerHTML =
  `<div class ="result">
      <div class="result-comment">O is the Winner</div>
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

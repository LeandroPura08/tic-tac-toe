let nextmove ='X';

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
                }
                else{
                  alert("Already Selected");
                  return;
                }
                nextmove = "O";
                document.querySelectorAll('.forcss').forEach((forcss)=>{
                  forcss.innerHTML=nextmove;
                })
              }else if(nextmove === "O"){
                nextmove = "O";
                if(move.innerHTML === ""){
                  move.innerHTML = nextmove;
                  move.classList.add("selected");
                }
                else{
                  alert("Already Selected");
                  return;
                }
                nextmove = "X";
                document.querySelectorAll('.forcss').forEach((forcss)=>{
                  forcss.innerHTML=nextmove;
                })
              }
            }
        })
        winner();
        console.log(tilenumber);
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
  )
  {
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
      nextmove = "X";
      

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
    nextmove = "X";
  })
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
  

}

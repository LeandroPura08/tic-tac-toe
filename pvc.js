  let computermove = "";
  let yourmove = "";

  function chooseMove(){
      let tilecount = 0;
        document.querySelectorAll('.move').forEach((tileselected)=>{
          const boardtile = tileselected.innerHTML;
          if(boardtile === ""){
            tilecount = tilecount + 1;
          }
        })

        if(tilecount<9){
          document.querySelector('.choose-move').classList.add("ongoing");
        }
        else{
          document.querySelector('.choose-move').classList.add("empty");
        }

        document.querySelector('.empty').innerHTML =
            `
            <div class="choose-move-container">
              <div>Choose your Move!</div>
              <div>
                <button class="chosenX">I choose X</button>
                <button class="chosenO">I choose O</button>
              </div>
              <button class="return">X</button>
            </div>
            `

        document.querySelector('.return').addEventListener('click',()=>{
          location.href = "index.html";
        })
        document.querySelector('.chosenO').addEventListener('click',()=>{
          yourmove = "O"
          computermove = "X";
          document.querySelector('.choose-move').classList.add("ongoing");
          randomcomputermove(computermove);
        })
        document.querySelector('.chosenX').addEventListener('click',()=>{
          yourmove = "X";
          computermove = "O";
          document.querySelector('.choose-move').classList.add("ongoing");
          randomcomputermove(computermove);
        })
  }

function randomcomputermove(computermove){
  let randomMove = Math.random();
  if(randomMove >= 0 && randomMove < 1/9){
    document.getElementById("1").classList.add("selected");
    document.getElementById("1").innerHTML = computermove;
  }else
  if(randomMove >= 1/9 && randomMove < 2/9){
    document.getElementById("2").classList.add("selected");
    document.getElementById("2").innerHTML = computermove;
  }else
  if(randomMove >= 2/9 && randomMove < 3/9){
    document.getElementById("3").classList.add("selected");
    document.getElementById("3").innerHTML = computermove;
  }else
  if(randomMove >= 3/9 && randomMove < 4/9){
    document.getElementById("4").classList.add("selected");
    document.getElementById("4").innerHTML = computermove;
  }else
  if(randomMove >= 4/9 && randomMove < 5/9){
    document.getElementById("5").classList.add("selected");
    document.getElementById("5").innerHTML = computermove;
  }else
  if(randomMove >= 5/9 && randomMove < 6/9){
    document.getElementById("6").classList.add("selected");
    document.getElementById("6").innerHTML = computermove;
  }else
  if(randomMove >= 6/9 && randomMove < 7/9){
    document.getElementById("7").classList.add("selected");
    document.getElementById("7").innerHTML = computermove;
  }else
  if(randomMove >= 7/9 && randomMove < 8/9){
    document.getElementById("8").classList.add("selected");
    document.getElementById("8").innerHTML = computermove;
  }else
  if(randomMove >= 8/9 && randomMove < 9){
    document.getElementById("9").classList.add("selected");
    document.getElementById("9").innerHTML = computermove;
  }






  console.log(randomMove);
}
chooseMove();




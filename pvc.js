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

        if(tilecount<0){
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
          
          startgame(computermove);
        })
        document.querySelector('.chosenX').addEventListener('click',()=>{
          yourmove = "X";
          computermove = "O";
          document.querySelector('.choose-move').classList.add("ongoing");
          startgame(computermove);
        })
  }

  let count = 0 ;
  function startgame(computermove){
    if(yourmove === "X"){
      document.querySelectorAll('.tile').forEach((tile)=>{
        tile.addEventListener('click',()=>{
          const tilenumber = tile.dataset.tilenumber;
          document.querySelectorAll('.move').forEach((move)=>{
            const movenumber = move.dataset.movenumber;
              if(tilenumber === movenumber){
                move.innerHTML = yourmove;
                move.classList.add("selected");
                count = count +1;
              }
          })
          setTimeout(()=>{
            randomcomputermove(computermove);
          },500);
          tile.onclick=false;
        })
      })
    }else if(yourmove === "O"){
      randomcomputermove(computermove);
      document.querySelectorAll('.tile').forEach((tile)=>{
        tile.addEventListener('click',()=>{
          const tilenumber = tile.dataset.tilenumber;
          document.querySelectorAll('.move').forEach((move)=>{
            const movenumber = move.dataset.movenumber;
              if(tilenumber === movenumber){
                move.innerHTML = yourmove;
                move.classList.add("selected");
                count = count +1;
              }
          })
          setTimeout(()=>{
            randomcomputermove(computermove);
          },500);
          
        })
      })
    }
  }

function randomcomputermove(computermove){
  let id1 = document.getElementById("1");
  let id2 = document.getElementById("2");
  let id3 = document.getElementById("3");
  let id4 = document.getElementById("4");
  let id5 = document.getElementById("5");
  let id6 = document.getElementById("6");
  let id7 = document.getElementById("7");
  let id8 = document.getElementById("8");
  let id9 = document.getElementById("9");

  let randomMove = Math.random();
  if(randomMove >= 0 && randomMove < 1/9){
    if(id1.innerHTML != ""){
      randomcomputermove(computermove);
    }else{
      id1.classList.add("selected");
      id1.innerHTML = computermove;
    }
  }else
  if(randomMove >= 1/9 && randomMove < 2/9){
    if(id2.innerHTML != ""){
      randomcomputermove(computermove);
    }else{
      id2.classList.add("selected");
      id2.innerHTML = computermove;
    }
  }else
  if(randomMove >= 2/9 && randomMove < 3/9){
    if(id3.innerHTML != ""){
      randomcomputermove(computermove);
    }else{
      id3.classList.add("selected");
      id3.innerHTML = computermove;
    }
  }else
  if(randomMove >= 3/9 && randomMove < 4/9){
    if(id4.innerHTML != ""){
      randomcomputermove(computermove);
    }else{
      id4.classList.add("selected");
      id4.innerHTML = computermove;
    }
  }else
  if(randomMove >= 4/9 && randomMove < 5/9){
    if(id5.innerHTML != ""){
      randomcomputermove(computermove);
    }else{
      id5.classList.add("selected");
      id5.innerHTML = computermove;
    }
  }else
  if(randomMove >= 5/9 && randomMove < 6/9){
    if(id6.innerHTML != ""){
      randomcomputermove(computermove);
    }else{
      id6.classList.add("selected");
      id6.innerHTML = computermove;
    }
  }else
  if(randomMove >= 6/9 && randomMove < 7/9){
    if(id7.innerHTML != ""){
      randomcomputermove(computermove);
    }else{
      id7.classList.add("selected");
      id7.innerHTML = computermove;
    }
  }else
  if(randomMove >= 7/9 && randomMove < 8/9){
    if(id8.innerHTML != ""){
      randomcomputermove(computermove);
    }else{
      id8.classList.add("selected");
      id8.innerHTML = computermove;
    }
  }else
  if(randomMove >= 8/9 && randomMove < 9){
    if(id9.innerHTML != ""){
      randomcomputermove(computermove);
    }else{
    id9.classList.add("selected");
    id9.innerHTML = computermove;
    }
  }
  console.log(randomMove);
}
chooseMove();




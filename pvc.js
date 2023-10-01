  let computermove = "";
  let yourmove = "";
  document.querySelector('.backtomain').addEventListener('click',()=>{
    location.href = "index.html";
  })
  

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
          
          startgame(computermove,yourmove);
        })
        document.querySelector('.chosenX').addEventListener('click',()=>{
          yourmove = "X";
          computermove = "O";
          document.querySelector('.choose-move').classList.add("ongoing");
          startgame(computermove,yourmove);
        })
  }

  let count = 0 ;
  function startgame(computermove,yourmove){
    if(yourmove === "X"){
      if(!winner(count,computermove,yourmove)){
      document.querySelectorAll('.tile').forEach((tile)=>{
        tile.addEventListener('click',()=>{
          const tilenumber = tile.dataset.tilenumber;
          document.querySelectorAll('.move').forEach((move)=>{
            const movenumber = move.dataset.movenumber;
              if(tilenumber === movenumber){
                if(move.innerHTML ===""){
                  move.innerHTML = yourmove;
                  move.classList.add("selected");
                  count = count +1;
                  console.log(yourmove,computermove,count);
                  document.getElementById('body').style.pointerEvents = 'none';
                  winner(count,computermove,yourmove);
                  if(!winner(count,computermove,yourmove)){
                    setTimeout(()=>{
                      randomcomputermove(computermove,yourmove);
                      winner(count,computermove,yourmove);
                      document.getElementById('body').style.pointerEvents = 'auto';
                    },1000);
                  }else{
                    return false;
                  }
                }else{
                  alert("Already Selected");
                  return;
                }
              }
          })
        })
      })
    }else{
      return;
    }
    }else if(yourmove === "O"){
      if(!winner(count,computermove,yourmove)){
        randomcomputermove(computermove,yourmove);
        document.querySelectorAll('.tile').forEach((tile)=>{
          tile.addEventListener('click',()=>{
            const tilenumber = tile.dataset.tilenumber;
            document.querySelectorAll('.move').forEach((move)=>{
              const movenumber = move.dataset.movenumber;
                if(tilenumber === movenumber){
                  if(move.innerHTML ===""){
                    move.innerHTML = yourmove;
                    move.classList.add("selected");
                    count = count +1;
                    console.log(yourmove,computermove,count);
                    document.getElementById('body').style.pointerEvents = 'none';
                    winner(count,computermove,yourmove);
                    if(!winner(count,computermove,yourmove)){
                      setTimeout(()=>{
                        randomcomputermove(computermove,yourmove);
                        winner(count,computermove,yourmove);
                        document.getElementById('body').style.pointerEvents = 'auto';
                      },1000);
                    }else{
                      return false;
                    }

                  }else{
                    alert("Already Selected");
                    return;
                  }
                }
            })
          })
        })
      }else{
        return;
      }
    }
  }

  function clear(){
    document.getElementById("1","2","3","4","5","6","7","8","9").innerHTML = "";
    location.reload();
  }

  
function randomcomputermove(computermove,yourmove){
  count = count +1;
  if(count<=9 && winner(count,computermove,yourmove)==false){
  let id1 = document.getElementById("1");
  let id2 = document.getElementById("2");
  let id3 = document.getElementById("3");
  let id4 = document.getElementById("4");
  let id5 = document.getElementById("5");
  let id6 = document.getElementById("6");
  let id7 = document.getElementById("7");
  let id8 = document.getElementById("8");
  let id9 = document.getElementById("9");

  if(id1if()){
    id1.classList.add("selected");
    id1.innerHTML = computermove;
  }else if(id2if()){
    id2.classList.add("selected");
    id2.innerHTML = computermove;
  }else if(id3if()){
    id3.classList.add("selected");
    id3.innerHTML = computermove;
  }else if(id4if()){
    id4.classList.add("selected");
    id4.innerHTML = computermove;
  }else if(id5if()){
    id5.classList.add("selected");
    id5.innerHTML = computermove;
  }else if(id6if()){
    id6.classList.add("selected");
    id6.innerHTML = computermove;
  }else if(id7if()){
    id7.classList.add("selected");
    id7.innerHTML = computermove;
  }else if(id8if()){
    id8.classList.add("selected");
    id8.innerHTML = computermove;
  }else if(id9if()){
    id9.classList.add("selected");
    id9.innerHTML = computermove;
  }else{
    randomselect(computermove);
  }
  

  function id1if(){
    if((id2.innerHTML === computermove && id3.innerHTML === computermove) || (id3.innerHTML === computermove && id2.innerHTML === computermove) ||
    (id4.innerHTML === computermove && id7.innerHTML === computermove) || (id7.innerHTML === computermove && id4.innerHTML === computermove) ||
    (id5.innerHTML === computermove && id9.innerHTML === computermove) || (id9.innerHTML === computermove && id5.innerHTML === computermove)){
      if(id1.innerHTML === ""){
        return true;
      } else{
        return false;
      }
    }else if(
      (id2.innerHTML === yourmove && id3.innerHTML === yourmove) || (id3.innerHTML === yourmove && id2.innerHTML === yourmove) ||
      (id4.innerHTML === yourmove && id7.innerHTML === yourmove) || (id7.innerHTML === yourmove && id4.innerHTML === yourmove) ||
      (id5.innerHTML === yourmove && id9.innerHTML === yourmove) || (id9.innerHTML === yourmove && id5.innerHTML === yourmove)){
          if(id1.innerHTML === ""){
            return true;
          }
          else{
            return false;
          }
        }
    }

  function id2if(){
    if((id1.innerHTML === computermove && id3.innerHTML === computermove || id3.innerHTML === computermove && id1.innerHTML === computermove) ||
      (id5.innerHTML === computermove && id8.innerHTML === computermove || id8.innerHTML === computermove && id5.innerHTML === computermove)){
        if(id2.innerHTML === ""){
          return true;
        }  else{
          return false;
        }
      }else if((id1.innerHTML === yourmove && id3.innerHTML === yourmove || id3.innerHTML === yourmove && id1.innerHTML === yourmove) ||
        (id5.innerHTML === yourmove && id8.innerHTML === yourmove || id8.innerHTML === yourmove && id5.innerHTML === yourmove)){
          if(id2.innerHTML === ""){
            return true;
          }
          else{
            return false;
          }
      }
  }

  function id3if(){
    if((id1.innerHTML === computermove && id2.innerHTML === computermove)||
    (id6.innerHTML === computermove && id9.innerHTML === computermove) ||
    (id7.innerHTML === computermove && id5.innerHTML === computermove)){
      if(id3.innerHTML === ""){
        return true;
       } else{
        return false;
      }
      }else if((id1.innerHTML === yourmove && id2.innerHTML === yourmove) ||
       (id6.innerHTML === yourmove && id9.innerHTML === yourmove) ||
       (id7.innerHTML === yourmove && id5.innerHTML === yourmove)){
        if(id3.innerHTML === ""){
          return true;
         }
         else{
           return false;
         }
       }
  }

  function id4if(){
    if((id7.innerHTML === computermove && id1.innerHTML === computermove)||
      (id5.innerHTML === computermove && id6.innerHTML === computermove)){
        if(id4.innerHTML === ""){
          return true;
        }
        else{
          return false;
        }
      }
      else if((id7.innerHTML === yourmove && id1.innerHTML === yourmove) ||
         (id5.innerHTML === yourmove && id6.innerHTML === yourmove)){
            if(id4.innerHTML === ""){
              return true;
            }
            else{
              return false;
            }
        }
  }

  function id5if(){
    if((id4.innerHTML === computermove && id6.innerHTML === computermove)||
    (id2.innerHTML === computermove && id8.innerHTML === computermove) ||
    (id7.innerHTML === computermove && id3.innerHTML === computermove) ||
    (id1.innerHTML === computermove && id9.innerHTML === computermove)){
      if(id5.innerHTML === ""){
      return true;
      }
      else{
        return false;
      }
    }else if((id4.innerHTML === yourmove && id6.innerHTML === yourmove) ||
      (id2.innerHTML === yourmove && id8.innerHTML === yourmove) ||
      (id7.innerHTML === yourmove && id3.innerHTML === yourmove) ||
      (id1.innerHTML === yourmove && id9.innerHTML === yourmove)){
        if(id5.innerHTML === ""){
          return true;
        }
        else{
          return false;
        }
      }
  }

  function id6if(){
    if((id4.innerHTML === computermove && id5.innerHTML === computermove) ||
    (id3.innerHTML === computermove && id9.innerHTML === computermove)){
      if(id6.innerHTML === ""){
        return true;
       }
       else{
        return false;
      }
      }else if((id4.innerHTML === yourmove && id5.innerHTML === yourmove) ||
       (id3.innerHTML === yourmove && id9.innerHTML === yourmove)){
        if(id6.innerHTML === ""){
          return true;
         }
         else{
           return false;
         }
       }
  }

  function id7if(){
    if((id5.innerHTML === computermove && id3.innerHTML === computermove) || (id3.innerHTML === computermove && id5.innerHTML === computermove) ||
    (id4.innerHTML === computermove && id1.innerHTML === computermove) || (id1.innerHTML === computermove && id4.innerHTML === computermove) ||
    (id8.innerHTML === computermove && id9.innerHTML === computermove) || (id9.innerHTML === computermove && id8.innerHTML === computermove)){
      if(id7.innerHTML === ""){
        return true;
      }  else{
        return false;
      }
    }else if((id5.innerHTML === yourmove && id3.innerHTML === yourmove) || (id3.innerHTML === yourmove && id5.innerHTML === yourmove) ||
        (id4.innerHTML === yourmove && id1.innerHTML === yourmove) || (id1.innerHTML === yourmove && id4.innerHTML === yourmove) ||
        (id8.innerHTML === yourmove && id9.innerHTML === yourmove) || (id9.innerHTML === yourmove && id8.innerHTML === yourmove)){
          if(id7.innerHTML === ""){
            return true;
          }
          else{
            return false;
          }
      }
  }

  function id8if(){
    if((id7.innerHTML === computermove && id9.innerHTML === computermove)||
    (id2.innerHTML === computermove && id5.innerHTML === computermove)){
      if(id8.innerHTML === ""){
        return true;
      }
      else{
        return false;
      }
    }else if((id7.innerHTML === yourmove && id9.innerHTML === yourmove) ||
      (id2.innerHTML === yourmove && id5.innerHTML === yourmove)){
        if(id8.innerHTML === ""){
          return true;
        }
        else{
          return false;
        }
      }
  }

  function id9if(){
    if((id7.innerHTML === computermove && id8.innerHTML === computermove) ||
    (id3.innerHTML === computermove && id6.innerHTML === computermove) ||
    (id1.innerHTML === computermove && id5.innerHTML === computermove)){
      if(id9.innerHTML === ""){
        return true;
       }
       else{
        return false;
      }
      }else if((id7.innerHTML === yourmove && id8.innerHTML === yourmove) ||
        (id3.innerHTML === yourmove && id6.innerHTML === yourmove) ||
        (id1.innerHTML === yourmove && id5.innerHTML === yourmove)){
          if(id9.innerHTML === ""){
            return true;
           }
           else{
             return false;
           }
       }
  }

  function randomselect(computermove){
    let randomMove = Math.random();
    if(randomMove >= 0 && randomMove < 1/9){
      if(id1.innerHTML != ""){
        randomselect(computermove);
      }else{
        id1.classList.add("selected");
        id1.innerHTML = computermove;
      }
    }else
    if(randomMove >= 1/9 && randomMove < 2/9){
      if(id2.innerHTML != ""){
        randomselect(computermove);
      }else{
        id2.classList.add("selected");
        id2.innerHTML = computermove;
      }
    }else
    if(randomMove >= 2/9 && randomMove < 3/9){
      if(id3.innerHTML != ""){
        randomselect(computermove);
      }else{
        id3.classList.add("selected");
        id3.innerHTML = computermove;
      }
    }else
    if(randomMove >= 3/9 && randomMove < 4/9){
      if(id4.innerHTML != ""){
        randomselect(computermove);
      }else{
        id4.classList.add("selected");
        id4.innerHTML = computermove;
      }
    }else
    if(randomMove >= 4/9 && randomMove < 5/9){
      if(id5.innerHTML != ""){
        randomselect(computermove);
      }else{
        id5.classList.add("selected");
        id5.innerHTML = computermove;
      }
    }else
    if(randomMove >= 5/9 && randomMove < 6/9){
      if(id6.innerHTML != ""){
        randomselect(computermove);
      }else{
        id6.classList.add("selected");
        id6.innerHTML = computermove;
      }
    }else
    if(randomMove >= 6/9 && randomMove < 7/9){
      if(id7.innerHTML != ""){
        randomselect(computermove);
      }else{
        id7.classList.add("selected");
        id7.innerHTML = computermove;
      }
    }else
    if(randomMove >= 7/9 && randomMove < 8/9){
      if(id8.innerHTML != ""){
         randomselect(computermove);
      }else{
        id8.classList.add("selected");
        id8.innerHTML = computermove;
      }
    }else
    if(randomMove >= 8/9 && randomMove < 9){
      if(id9.innerHTML != ""){
        randomselect(computermove);
      }else{
      id9.classList.add("selected");
      id9.innerHTML = computermove;
      }
    }
  }
  
}
else{
  return;
}
  console.log(yourmove,computermove,count);
}
chooseMove();

function winner(count,computermove,yourmove){
  let id1 = document.getElementById("1").innerHTML;
  let id2 = document.getElementById("2").innerHTML;
  let id3 = document.getElementById("3").innerHTML;
  let id4 = document.getElementById("4").innerHTML;
  let id5 = document.getElementById("5").innerHTML;
  let id6 = document.getElementById("6").innerHTML;
  let id7 = document.getElementById("7").innerHTML;
  let id8 = document.getElementById("8").innerHTML;
  let id9 = document.getElementById("9").innerHTML;

  //computer winning conditions
  const xrow1 = id1=== computermove && id2 === computermove && id3 === computermove;
  const xrow2 = id4 === computermove && id5 === computermove  && id6 === computermove;
  const xrow3 = id7 === computermove && id8 === computermove  && id9 === computermove;
  const xcol1 = id1 === computermove && id4 === computermove  && id7 === computermove;
  const xcol2 = id2 === computermove &&  id5 === computermove && id8 === computermove;
  const xcol3 = id3 === computermove && id6 === computermove && id9 === computermove;
  const x45 = id1 === computermove && id5 === computermove && id9 === computermove;
  const xneg45 = id7 === computermove && id5 === computermove && id3 === computermove;

  //Player winning conditions
  const orow1 = id1=== yourmove && id2 === yourmove && id3 === yourmove;
  const orow2 = id4 === yourmove && id5 === yourmove  && id6 === yourmove;
  const orow3 = id7 === yourmove && id8 === yourmove  && id9 === yourmove;
  const ocol1 = id1 === yourmove && id4 === yourmove  && id7 === yourmove;
  const ocol2 = id2 === yourmove &&  id5 === yourmove && id8 === yourmove;
  const ocol3 = id3 === yourmove && id6 === yourmove && id9 === yourmove;
  const o45 = id1 === yourmove && id5 === yourmove && id9 === yourmove;
  const oneg45 = id7 === yourmove && id5 === yourmove && id3 === yourmove;

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
      <div class="result-comment">Computer is the Winner</div>
      <button class="rematch">Rematch</button>
   </div>
   `
   document.querySelector('.rematch').addEventListener('click',()=>{
     document.querySelector('.result-container').classList.remove("added-result");
     document.querySelector('.result-container').innerHTML = "";
     clear();
     return true;
   })
 }
 else if(orow1 || orow2 || orow3 || ocol1 || ocol2 || ocol3 || o45 || oneg45){
   document.querySelector('.result-container').classList.add("added-result");
   document.querySelector('.added-result').innerHTML =
  `<div class ="result">
      <div class="result-comment">You are the Winner</div>
      <button class="rematch">Rematch</button>
  </div>
  `
  document.querySelector('.rematch').addEventListener('click',()=>{
   document.querySelector('.result-container').classList.remove("added-result");
   document.querySelector('.result-container').innerHTML = "";
   clear();
   return true;
 })
 }else{
  if (count === 9){
    const winner = document.querySelector('.result-container').innerHTML;
    if (!winner){
      document.querySelector('.result-container').classList.add("added-result");
      document.querySelector('.added-result').innerHTML =
     `<div class ="result">
     <div class="result-comment">No Winner this Time</div>
     <button class="rematch">Rematch</button>
     </div>
     `
     document.querySelector('.rematch').addEventListener('click',()=>{
      document.querySelector('.result-container').classList.remove("added-result");
      document.querySelector('.result-container').innerHTML = "";
      clear();
      
    })
    }
   }
    return false;
 }



}





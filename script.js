let nextmove ='';

document.querySelectorAll('.tile').forEach((tile)=>{
  tile.addEventListener('click',()=>{
    if (nextmove === "X" || nextmove === ""){
      nextmove = "X";
      const tilenumber = tile.dataset.tilenumber;
      document.querySelectorAll('.move').forEach((moves)=>{
        const movenumber = moves.dataset.movenumber;
         if(movenumber === tilenumber){
          if(moves.innerHTML===""){
            moves.classList.add("selected");
            moves.innerHTML = nextmove;
          }else{
            alert("tite");
          }
         }
      });
      nextmove = "O";
    }else if(nextmove === "O"){
      nextmove ="O"
      const tilenumber = tile.dataset.tilenumber;
      document.querySelectorAll('.move').forEach((moves)=>{
        const movenumber = moves.dataset.movenumber;
         if(movenumber === tilenumber){
          if(moves.innerHTML===""){
            moves.classList.add("selected");
            moves.innerHTML = nextmove;
          }else{
            alert("tite");
          }
         }
      });
      nextmove = "X";
    }
    console.log(nextmove);
  })
});

function winner(){}

function chooseMove(){
  let tilecount = 0;
    document.querySelectorAll('.move').forEach((tileselected)=>{
      const boardtile = tileselected.innerHTML;
      if(boardtile === ""){
        tilecount = tilecount + 1;
      }
      console.log(tilecount);
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
        <button>I choose X</button>
        <button>I choose O</button>
      </div>
      <button class="return">X</button>
    </div>
    `

    document.querySelector('.return').addEventListener('click',()=>{
      location.href = "index.html";
    })
}
chooseMove();
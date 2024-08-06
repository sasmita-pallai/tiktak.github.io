let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let turn0=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],[6,7,8],[3,4,5],[2,4,6],[2,5,8],[1,4,7],[1,4,8]
]
const resetGame=()=>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        checkWinners();

    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }};
    const enableboxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        };
}
const showWinner=(winner)=>{
    msg.innerText=`Congarulations your winner is ${winner}`;
  
    msgContainer.classList.remove("hide");
    disableboxes();

}
const checkWinners =()=>{
    for(let patterns of winPatterns){
           let pos1val= boxes[patterns[0]].innerText;
           let pos2val= boxes[patterns[1]].innerText;
           let pos3val= boxes[patterns[2]].innerText;
           if(pos1val!= "" && pos2val!=""&& pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
           }
    }
}
newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



























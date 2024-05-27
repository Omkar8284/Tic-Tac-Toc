var btn=document.querySelectorAll(".box")
var reset=document.querySelector(".box1")
var newbtn=document.querySelector(".new_btn")
var msgcontainer=document.querySelector(".msg_container")
var msg=document.querySelector("#msg")


let turn0=true;
const win_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turn0=true;
    enableBox();
    msgcontainer.classList.add("hide");
}
 btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
        });
 });
 const disableBox=()=>{
    for(let btn1 of btn){
        btn1.disabled=true;
    }
 }
 const enableBox=()=>{
    for(let btn1 of btn){
        btn1.disabled=false;
        btn1.innerText="";
    }
 }
 const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBox();
 }
 const checkWinner=()=>{
    for( let pattern of win_pattern){
        let pos1val=btn[pattern[0]].innerText;
        let pos2val=btn[pattern[1]].innerText;
        let pos3val=btn[pattern[2]].innerText;

        if(pos1val !=""&& pos2val !=""&&pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val)
            {
             showWinner(pos1val);
            }
        }
    }
 }
 newbtn.addEventListener("click",resetgame);
 reset.addEventListener("click",resetgame)
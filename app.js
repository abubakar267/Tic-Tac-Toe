let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 1;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText = "O";
            count++;
            box.classList.add("oturn");
            turnO = false;

        }else{
            box.innerText = "X";
            count++;
            box.classList.remove("oturn");
            turnO = true;
        }
    box.disabled = true;
    checkWinner();
    })
 });

 const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgConatiner.classList.add("hide");
    count = 1;

 }

 const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 }

 const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
 }

 const showWinner = (pos1)=>{
    msg.innerText = `Congratulations , Winner is ${pos1}`;
    msgConatiner.classList.remove("hide");
    disableBoxes();
 }

 const draw = () => {
    msg.innerText = `Oops , there was a Draw!`;
    msgConatiner.classList.remove("hide");
    disableBoxes();
 }
 const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){  
                showWinner(pos1);
            }else if(count === 10){
                draw();
            }

        }

    }
    
 }

 newBtn.addEventListener("click",resetGame);
 resetBtn.addEventListener("click",resetGame);





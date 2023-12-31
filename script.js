addEventListener("DOMContentLoaded",function(){
//initialization

const numbers = document.getElementsByClassName("num"); //selects all num buttons
let selectionP = document.querySelector(".selectionp"); //selects the p that displays later the selected rating
let isSelected = false; //initializaion of a flag for error display


for(let i=0;i<numbers.length;i++){
    
    numbers[i].addEventListener("click",()=>{
        if (!numbers[i].classList.contains("selected")){ 
            for (let j=0;j<numbers.length;j++){
                if (numbers[j].classList.contains("selected")){
                    numbers[j].classList.remove("selected")
                }
            }
            isSelected = true;
            numbers[i].classList.add("selected");
            let ratingNum = document.getElementsByClassName("selected")[0].value;
            selectionP.innerText = `You selected ${ratingNum} out of 5`;    
            
        } else if (numbers[i].classList.contains("selected")){
            numbers[i].classList.remove("selected");
            isSelected = false;
        }
    })
    }
   

const submit = document.getElementById("submit")
const first = document.querySelector(".first")
const second = document.querySelector(".second")
const error = document.getElementById("error")


    submit.addEventListener("click",()=>{
        if (isSelected){
            first.classList.toggle("submitted")
            second.classList.toggle("submitted");
        } else if (!isSelected){
            error.classList.add("error")
}})
    
}
)
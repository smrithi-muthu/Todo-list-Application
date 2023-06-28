const input = document.getElementById("task");
const listContainer = document.getElementById("list-container");
const boxColor = document.getElementById("to-do");
//console.log(boxColor);
let count = 0;
let click = 0;
const value = document.querySelector("#value");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorButton = document.getElementById('btn');
const hexPrev = [];

//Creates task list
function Submit(){
    if(input.value === ''){
        alert("Empty Submission");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        count++;
       // counter();
    }

    input.value = "";
    //checks or deletes tasks based on user input
    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            count--;
            //counter();
            saveData();
        } else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            count--;
            //counter()
            saveData();
        }
    }, false);

    saveData();
}


//counts the number of tasks
function counter(){
    if(count < 0){
        count = 0;
    } else {
        value.textContent = count;
    }
}

let i = 0;

function hexColorVal(){
    let hexColor = "#"
    
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    
    hexPrev[i] = hexColor;
    i++;

    return hexColor;
}

//changes background color
function color(){
    
    let hexColor = hexColorVal();
    
    document.body.style.backgroundColor = hexColor;

}

//changes the task list box color - continues to a new color
function nextChanger() {

    let hexVal = hexColorVal();

    console.log(hexVal);

    document.getElementById("to-do").style.backgroundColor = hexVal;
    
}

//console.log(hexPrev.length);

//changes the task list box color - goes back to the previous color
function prevChanger() {

    console.log(hexPrev[hexPrev.length - 1]);
    

    // if(j < 0){
    //     document.getElementById("to-do").style.backgroundColor = hexColor;
    // }
    

    document.getElementById("to-do").style.backgroundColor = hexPrev[hexPrev.length - 2];
    //j++;
    
}


// hexPrev - 1, 2, 3 ,4
// hexPrev2 - 1, 2, 3
// hexPrev - 1, 2, 3, 4, 4
// hexPrev - 1, 2, 3, 4

//gets random number to create hex value
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

//saves the tasks
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    counter();
}

//shoes the tasks collected in local storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();



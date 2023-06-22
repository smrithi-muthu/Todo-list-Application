const input = document.getElementById("task");
const listContainer = document.getElementById("list-container");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorButton = document.getElementById('btn');

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
    }
    input.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function color(){
    let hexColor = "#"
    
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    
    document.body.style.backgroundColor = hexColor;

}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();



const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//document.querySelector("button").addEventListener("click",addTask);
function addTask(){
    if(inputBox.value.trim() === ''){
        alert("Please add a task!");
        return;
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML  = "\u00d7";
        span.classList.add("delete");
        li.appendChild(span);
        saveTasks();
    }
    inputBox.value = '';
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        saveTasks();
    }
},false);

 
function saveTasks(){
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function loadTasks(){
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();
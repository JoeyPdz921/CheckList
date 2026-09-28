const date = new Date();

const hour = date.getHours();

const greeting = document.getElementById("greeting");

const morningStart = 5;
const afternoonStart = 12;
const eveningStart = 18; 

if (hour >= morningStart && hour < afternoonStart) {

    greeting.textContent = "Good morning User!";

} else if (hour >= afternoonStart && hour < eveningStart) {

    greeting.textContent = "Good afternoon User!"
} else {
    greeting.textContent = "Good evening User!"
}

const checkbox = document.getElementById("checkbox");

const checkboxes = document.querySelectorAll('input[type="checkbox]"');

function MyList(checkbox) {
    const task = checkbox.parentElement;

    if(checkbox.checked) {
        task.style.textDecoration = "line-through";
    } else {
        task.style.textDecoration = "none";
    }
}
function funfact(){
    alert("Did you know that the first computer virus was created in 1986 and was called the Brain virus?");
}
function taskcompleted() {
    alert("Tasks Completed!");
}

function taskscleared() {
    alert("Tasks Cleared!");
}

const today = new Date();
today.getDate(); 

document.getElementById("date").textContent = today.getDate();
document.getElementById("date").textContent = today.getDay();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]; days[today.getDay()] 

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
month[today.getMonth()]

document.getElementById("date").textContent = days[today.getDay()] + "," + month[today.getMonth()]+ " " + today.getDate();

localStorage.setItem("task1", "checked");

document.getElementById("MorningList").style.display = "none";
document.getElementById("AfternoonList").style.display = "display";
document.getElementById("EveningList").style.display = "display";

console.log("current hour:", currentHour);
console.log("morning start:", morningStart);
console.log("afternoon start:", afternoonStart);
console.log("evening start:", eveningStart);

if(currentHour >= afternoonStart && currentHour < eveningStart) {
    alert ("AfternoonList");
    document.getElementById("AfternoonList").style.display = "block";
}

if(currentHour >= morningStart && currentHour < afternoonStart) {
    alert("MorningList");
    document.getElementById("MorningList").style.display = "block";
}
if(currentHour >= eveningStart || currentHour < morningStart) {
    alert("EveningList");
    document.getElementById("EveningList").style.display = "block";
}


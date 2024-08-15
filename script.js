const display = document.getElementById("display");
const historyDisplay = document.getElementById("history-display");
const historyList = document.getElementById("history-list");
let submissions = [];


function addnum(input) {
  if (display.value === "0" && "/*-+".includes(input)) {
    display.value += input;
  }
  else if (display.value === "Error" || display.value === "0" || display.value === "Infinity") {
    display.value = input;
  }
  else {
    display.value += input;
  }
}

function allclear() {
  display.value = "0";
}

function calculate() {
  var values = display.value;
  try {
    display.value = String(eval(values));
    if (submissions.length == 15) {
      submissions.pop();
    }
    submissions.unshift(values);
    addHistory();
  }
  catch (error) {
    display.value = "Error";
  }
}

function backspace() { 
if (display.value.length > 1 && display.value !== "Error"){
  display.value = display.value.slice(0, -1);
} else {
  display.value = "0";
}
}

function hideHistory() {
  historyDisplay.style.display = 'none';
}

function displayHistory() {
  historyDisplay.style.display = 'block';
}


function addHistory() {
  let history = "";
  submissions.forEach(element => {
    console.log(element);
    history += `<div id="history-tab">${element} <button id="history-add" onclick="add('${(element)}')">ADD</button></div>`
  });
  historyList.innerHTML = history;
}

function add(submission) {
  console.log(submission);
  display.value = submission;
}

function clearHistory() {
  for(var i = 0; i <= (submissions.length); i++) {
    submissions.pop(i);
    console.log("for 01 " + i);
    for(var j = 0; j <= (submissions.length); j++) {
      submissions.pop(j);
      console.log("for 02 " + j);
    }
  }
  addHistory();
}

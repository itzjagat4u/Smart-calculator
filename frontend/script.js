let display = document.getElementById('display');
let historyDiv = document.getElementById('history');
let current = '';

function resizeDisplay() {
  const maxFontSize = 32;
  let size = maxFontSize;
  display.style.fontSize = size + "px";
  while (display.scrollWidth > display.clientWidth && size > 12) {
    size--;
    display.style.fontSize = size + "px";
  }
}

function updateDisplay() {
  display.innerText = current || '0';
  resizeDisplay();
}

function append(value) {
  if (display.innerText === '0' && value !== '.') {
    current = value;
  } else {
    current += value;
  }
  updateDisplay();
}

function clearDisplay() {
  current = '';
  updateDisplay();
}

function backspace() {
  current = current.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    let expression = current;
    let result = eval(current);
    addToHistory(`${expression} = ${result}`);
    current = result.toString();
    updateDisplay();
    logToBackend(expression, result);  // Corrected here
  } catch {
    current = 'Error';
    updateDisplay();
    current = '';
  }
}

function addToHistory(entry) {
  const div = document.createElement('div');
  div.textContent = entry;
  historyDiv.prepend(div);
}

function logToBackend(expression, result) {
  fetch("http://localhost:8080/api/logs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ expression, result })
  });
}

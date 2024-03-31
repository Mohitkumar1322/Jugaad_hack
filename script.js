const inputField = document.getElementById("myInput");
const autocompleteContainer = document.getElementById("autocomplete-list");
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const output = document.getElementById('output');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang = 'hi-IN'; // Set the language for speech recognition

recognition.onstart = () => {
    console.log('Voice recognition started');
};

recognition.onresult = (event) => {
    const resultIndex = event.resultIndex;
    const transcript = event.results[resultIndex][0].transcript.trim();
    addToDoItem(transcript);
};

recognition.onerror = (event) => {
    console.error('Voice recognition error:', event.error);
};

startBtn.addEventListener('click', () => {
    startRecognition();
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline-block';
});

stopBtn.addEventListener('click', () => {
    stopRecognition();
    startBtn.style.display = 'inline-block';
    stopBtn.style.display = 'none';
});

addBtn.addEventListener('click', () => {
    const todoText = inputField.value.trim();
    if (todoText !== '') {
        addToDoItem(todoText);
        inputField.value = '';
    }
});

function startRecognition() {
    recognition.start();
}

function stopRecognition() {
    recognition.stop();
}

function addToDoItem(text) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
        <input type="checkbox">
        <label>${text}</label>
    `;
    todoList.appendChild(todoItem);
}
recognition.onresult = (event) => {
    const resultIndex = event.resultIndex;
    const transcript = event.results[resultIndex][0].transcript.trim();
    addToDoItem(transcript);
};recognition.onresult = (event) => {
    const resultIndex = event.resultIndex;
    const transcript = event.results[resultIndex][0].transcript.trim();
    addToDoItem(transcript);
};

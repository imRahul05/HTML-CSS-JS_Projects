import {add} from 'function01.js';

console.log(add(2,5));


const appsettings = {
    databaseURL: 'https://playground-465d9-default-rtdb.firebaseio.com/'
}


const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');


addButtonEl.addEventListener('click', function() {
    let inputValue = inputFieldEl.value;

    console.log('${inputValue} add to database');
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: 'https://playground-465d9-default-rtdb.firebaseio.com/'
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(moviesInDB, inputValue)
    
    console.log(`${inputValue} added to database`)
})
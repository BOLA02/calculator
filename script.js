"use strict";

const display = document.getElementById('display');


const clickToDisplay = (value) => display.value += value;


const clearDisplay = () => display.value = '';


const calculateResult = () => {
    try {
       
        let result = Function('return ' + display.value)(); 
        display.value = result;
    } catch (error) {
        
        display.value = 'Error';
    }
};

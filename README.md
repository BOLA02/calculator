

# Simple Calculator

A simple calculator built using HTML, CSS, and JavaScript that allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. This project demonstrates handling user input, validating mathematical expressions, and performing safe evaluation.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)


## Introduction

This project is a **Simple Calculator** created using **HTML**, **CSS**, and **JavaScript**. It supports basic operations like addition, subtraction, multiplication, and division, and it includes features for input validation and error handling.

## Features

- Perform basic arithmetic operations (addition, subtraction, multiplication, division).
- Input validation to ensure safe and correct mathematical expressions.
- Error handling for invalid expressions or mathematical errors (like dividing by zero).
- Clear button to reset the calculator.

## Installation

1. Download the project files or clone the repository:

   ```bash
   git clone https://github.com/your-username/simple-calculator.git
   ```

2. Open the `index.html` file in any modern web browser to run the calculator.

   

## Usage

1. Open the `index.html` file in your browser.
2. Use the buttons to input numbers and operators.
3. Click the `=` button to calculate the result.
4. Click the `C` button to clear the display.

## Code Explanation

### HTML Structure

The HTML code defines the layout of the calculator with buttons for numbers and operators, a display area where the user can see the input and result, and a clear button (`C`) to reset the display.



### CSS Styling

The `style.css` file provides the basic layout and styling for the calculator, such as positioning the buttons, adjusting the display area, and making the user interface visually appealing.



### JavaScript Logic

The JavaScript code contains the logic for handling user input, performing mathematical calculations, and handling errors. Here's a breakdown:

- **clickToDisplay**: Adds the clicked number or operator to the display.
- **clearDisplay**: Clears the display when the 'C' button is clicked.
- **calculateResult**: Evaluates the mathematical expression using the `Function` constructor. If there's an error (e.g., invalid input), it catches the error and displays `'Error'`.


## Error Handling

The calculator uses `try-catch` blocks to handle errors that may arise during evaluation of the mathematical expression. If an invalid expression (like `2++2` or `3/0`) is entered, an error message (`'Error'`) is displayed. The input is also validated before evaluation using regular expressions to ensure only valid characters (numbers and operators) are entered.


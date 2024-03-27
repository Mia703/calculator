
// get all the buttons in the calculator container
const buttonsList = document.querySelectorAll(".calculator button");

// get the calculator display
let calculatorDisplay = document.getElementById("display");

let displayText: string[] = [];
let index = 0;
let equation = "";

// for every (each) button in the calculator add an eventListener onClick
buttonsList.forEach((button) => {
	button.addEventListener("click", () => {
		// add the button press to the array
		displayText[index] = button.innerHTML;

		// if the calculator's display is not null...
		if (calculatorDisplay != null) {
			// if the button was the 'enter' button...
			if (button.innerHTML == "enter") {
				// calculate and display the result
				calculatorDisplay.innerHTML = calculate(equation).toString();

				// reset everything
				displayText = [];
				index = 0;
				equation = "";
			}
			// if the button was the 'clear' button
			else if (button.innerHTML == "C") {
				// reset everything
				displayText = [];
				index = 0;
				equation = "";
				// clear the calculator's display
				calculatorDisplay.innerHTML = displayText.join("");
			}
			// if the button was the 'backspace' button
			else if (button.id == "backspace") {
				// check that the array's index is greater than 0, if so...
				if (index > 0) {
					// FIXME: remove the last entry from the array
					// FIXME: after 'enter' will not backspace amount
					displayText = displayText.slice(0, displayText.length - 2);
					// reduce the array's index
					index -= 1;

					// removeOperator
					// remove last character from the string
					equation = equation.slice(0, equation.length-1);

					// display 'backspaced' result
					calculatorDisplay.innerHTML = displayText.join("");
				}
			}
			// else, the button is either a number or a scientific button
			else {
				// check if 0 is the first entry, if so remove it
				replaceZero(button, calculatorDisplay, displayText, equation);

				if (button.id == "multiply") {
					equation += '*';
				}
				else {
					// findOperator
					equation += displayText[index].toString();
				}


				// display current entry
				calculatorDisplay.innerHTML = displayText.join("");
				// update index
				index += 1;
			}
			console.log(displayText); // array
			console.log("EQUATION: " + equation);
		}
	});
});

// if the first number 0, replace it with ""
function replaceZero(
	button: any,
	calculatorDisplay: any,
	displayText: string[],
	equation: string
) {
	if (
		displayText[0] == "0" ||
		(button.innerHTML == "0" && calculatorDisplay.innerHTML == "")
	) {
		displayText[0] = "";
		equation = "";
	}
}



function calculate(equation: string) {
	// var result = evaluate(equation);
	var func = new Function("return " + equation);
	return func();
}

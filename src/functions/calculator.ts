// get all the buttons in the calculator container
const buttonsList = document.querySelectorAll(".calculator button");

// get the calculator display
let calculatorDisplay = document.getElementById("display");

let index = 0;
let equation: string[] = [];

// for every (each) button in the calculator add an eventListener onClick
buttonsList.forEach( (button) => {
	button.addEventListener("click", () => {
		// alert(button.id);

		equation[index] = button.innerHTML;
		// TODO: check for enter
		// function onEnter() {}

		// TODO: check for operators here
		// function displayOperators() {}

		if (calculatorDisplay != null) {
			// if the first number is 0, replace with ""
			if (
				equation[0] == "0" ||
				(button.innerHTML == "0" && calculatorDisplay.innerHTML == "")
			) {
				equation[0] = "";
			}

			// turn the array into a string and return to calculator display
			// console.log(equation.join(""))
			calculatorDisplay.innerHTML = equation.join("");
		}
		console.log(equation);
		// increase array index
		index += 1;
	});
});

const screen_display = document.getElementById("display");
const calc_buttons = document.querySelectorAll("button.num");

let expression = [];

function isOperator(selected) {
	if (
		selected == "/" ||
		selected == "*" ||
		selected == "-" ||
		selected == "+"
	) {
		return true;
	}
	return false;
}

function calculateExpression(expression) {
	let temp = ""; // holds the digits before an operator
	let total = 0; // the current running total
	let curr_operator = ""; // the current operator

	expression.forEach((digit) => {
		// is the digit an operator?
		if (isOperator(digit)) {
			// if the curr operator is the first in the expression
			if (curr_operator == "") {
				total = Number(temp); // convert the temp string into a number
				temp = ""; // clear the temp
				curr_operator = digit; // save the current operator
			}
			// else, the curr operator is the second or following
			else {
				switch (curr_operator) {
					case "/":
						total /= Number(temp);
						temp = "";
						break;
					case "*":
						total *= Number(temp);
						temp = "";
						break;
					case "-":
						total -= Number(temp);
						temp = "";
						break;
					case "+":
						total += Number(temp);
						temp = "";
						break;
					default:
						temp = "";
				}
			}
		}
		// if not, add the number to the temporary string
		else {
			temp += digit;
		}
	});

	// if the expression is just a number w/o an operator
	if (curr_operator == "") return temp;

	// calc the final total with the last operator in the expression
	switch (curr_operator) {
		case "/":
			total /= Number(temp);
			temp = "";
			curr_operator = "";
			break;
		case "*":
			total *= Number(temp);
			temp = "";
			curr_operator = "";
			break;
		case "-":
			total -= Number(temp);
			temp = "";
			curr_operator = "";
			break;
		case "+":
			total += Number(temp);
			temp = "";
			curr_operator = "";
			break;
		default:
			temp = "";
			curr_operator = "";
	}

	return total;
}

calc_buttons.forEach((button) => {
	button.addEventListener("click", () => {
		let selected = button.getAttribute("data-button");

		if (selected == "C") {
			// clear == clear entry
			expression = [];
			screen_display.textContent = expression.join("");
		} else if (selected == "DEL") {
			// delete == backspace
			expression.pop();
			screen_display.textContent = expression.join("");
		} else if (selected == "=") {
			screen_display.textContent = calculateExpression(expression);
			expression = [];
		} else {
			expression.push(selected);

			// replace init 0
			if (expression[0] == "0" && expression.length == 2 && Number(selected)) {
				expression[0] = expression[1]; // replace index 0 with 1
				expression.pop(); // remove 1
			}

			// if there are two operators in a row
			let second_to_last_element = expression[expression.length - 2];
			if (
				isOperator(selected) && // if selected IS an operator
				isNaN(second_to_last_element) && // and the second to last element is NOT a number
				expression.length > 2
			) {
				expression.pop(); // remove duplicate operator
			}

			screen_display.textContent = expression.join("");
		}
	});
});

// --- how can you make the cursor disappear over background?
const finger_cursor = document.getElementById("cursor");
const calculator_body = document.querySelector(".container");

document.addEventListener("mousemove", (event) => {
	window.requestAnimationFrame(() => {
		finger_cursor.style.top = `${
			event.clientY - finger_cursor.offsetHeight / 2
		}px`;
		finger_cursor.style.left = `${
			event.clientX - finger_cursor.offsetWidth / 2
		}px`;
	});
});

calculator_body.addEventListener("mouseenter", () => {
	finger_cursor.style.visibility = "visible";
});

calculator_body.addEventListener("mouseleave", () => {
	finger_cursor.style.visibility = "hidden";
});

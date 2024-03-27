function findOperators(button: any, equation: string) {
	switch (button.id) {
		case "trig-sin":
			return (equation += "Math.sin");
		case "trig-cos":
			return (equation += "Math.cos");
		case "trig-tan":
			return (equation += "Math.tan");
		case "inv-sin":
			return (equation += "Math.asin");
		case "inv-cos":
			return (equation += "Math.acos");
		case "inv-tan":
			return (equation += "Math.atan");
		case "pi":
			return (equation += "Math.PI");
		case "e":
			return (equation += "Math.E");
		case "exp":
			return (equation += "**");
		// or Math.pow(3, 4); = 3^4
		case "exp-3":
			return (equation += "**3");
		case "exp-2":
			return (equation += "**2");
		case "e-power-x":
			return (equation += "Math.E**");
		case "ten-power-x":
			return (equation += "10**");
		case "y-root-x":
			return (equation += "^(1/");
		case "cub-root-x":
			return (equation += "3^(1/");
		case "sqrt-x":
			return (equation += "Math.sqrt");
		case "natural-log":
			return (equation += "Math.log");
		case "log-base-10":
			return (equation += "Math.log10");
		case "reciprocal":
			return (equation += "1/");
		case "percentage":
			return (equation += "(1/100)*");
		case "factorial":
			return (equation += "factorialRecursive(");
		default:
			return (equation += displayText[index].toString());
	}
}

// FIXME: removes operator on backspace, not removing, why?
function removeOperator(equation: string) {
	if (/Math\.PI/g.test(equation)) {
		return equation.replace(/Math\.sin/g, "");
	} else if (/Math\.cos/g.test(equation)) {
		return equation.replace(/Math\.cos/g, "");
	} else if (/Math\.tan/g.test(equation)) {
		return equation.replace(/Math\.tan/g, "");
	} else if (/Math\.asin/g.test(equation)) {
		return equation.replace(/Math\.asin/g, "");
	} else if (/Math\.acos/g.test(equation)) {
		return equation.replace(/Math\.acos/g, "");
	} else if (/Math\.atan/.test(equation)) {
		return equation.replace(/Math\.atan/g, "");
	} else if (/Math\.PI/g.test(equation)) {
		return equation.replace(/Math\.PI/g, "");
	} else if (/Math\.E/g.test(equation)) {
		return equation.replace(/Math\.E/g, "");
	} else if (/\*\*/g.test(equation)) {
		return equation.replace(/\*\*/g, "");
	} else if (/\*\*3/g.test(equation)) {
		return equation.replace(/\*\*3/g, "");
	} else if (/\*\*2/g.test(equation)) {
		return equation.replace(/\*\*2/g, "");
	} else if (/Math\.E\*\*/g.test(equation)) {
		return equation.replace(/Math\.E\*\*/g, "");
	} else if (/10\*\*/g.test(equation)) {
		return equation.replace(/10\*\*/g, "");
	} else if (/\^\(1\//g.test(equation)) {
		return equation.replace(/\^\(1\//g, "");
	} else if (/3\^\(1\//g.test(equation)) {
		return equation.replace(/3\^\(1\//g, "");
	} else if (/Math\.sqrt/g.test(equation)) {
		return equation.replace(/Math\.sqrt/g, "");
	} else if (/Math\.log/g.test(equation)) {
		return equation.replace(/Math\.log/g, "");
	} else if (/Math\.log10/g.test(equation)) {
		return equation.replace(/Math\.log10/g, "");
	} else if (/1\//g.test(equation)) {
		return equation.replace(/1\//g, "");
	} else if (/\(1\/100\)\*/g.test(equation)) {
		return equation.replace(/\(1\/100\)\*/g, "");
	} else if (/factorialRecursive\(/g.test(equation)) {
		return equation.replace(/factorialRecursive\(/g, "");
	} else if (/\*/g.test(equation)) {
		return equation.replace(/\*/g, "");
	} else {
		return equation.slice(0, equation.length - 1);
	}
}

// function factorialRecursive(n) {
// 	if (n == 0 || n == 1) {
// 		return 1;
// 	} else {
// 		return n * factorialRecursive(n - 1);
// 	}
// }

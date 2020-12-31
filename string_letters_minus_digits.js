str = 'zA1230Bc!';

//function should return the sum of all the letters with a = A =1 through z = Z = 26 minus the sum of all the numbers.
//numbers in a row such as "1209" = 1, 2, 0, 9 which sum to be 12
// special characters such as but not limited to "!@#$!?/" are ignored
// if string does not contain any letters the sum of all letters should be 0
// if string does not contain any numbers the sum of all numbers should be 0


function lettersMinusNumbers(str) {
	str = str.toLowerCase();
	let numSum = 0;
	let letterSum = 0;

	if (/\d/g.test(str)) {
		let numArr = str.match(/\d/g);
		numSum = numArr.reduce((a, b) => Number(a) + Number(b));
	}

	if (/[a-z]/gi.test(str)) {
		let letterArr = str.match(/[a-z]/gi);
		letterArr = letterArr.map((letter) => letter.charCodeAt(0) - 96);
		letterSum = letterArr.reduce((a, b) => a + b);
	}

	console.log(letterSum);
	console.log(numSum);
	return letterSum - numSum;
}

console.log(lettersMinusNumbers(str));

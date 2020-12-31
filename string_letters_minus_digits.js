str = 'z';

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

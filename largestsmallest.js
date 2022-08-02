/** @format */
const numberOfArray = [2, 4, 6, 8, 9, 1, 13];
let result = [];
numberOfArray.sort(function check(a, b) {
	return a - b;
});
result.push(numberOfArray);
result.push(numberOfArray[numberOfArray.length - 2]);
return numberOfArray;

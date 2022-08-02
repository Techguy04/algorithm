/** @format */

let array = [2, 10, 5, 4];
let newArr = [];
let target = 7;
for (i = 0; i < array.length; i++) {
	for (let j = 0; j < array.length; i++) {
		if (array[i] + array[j] == target) {
			let result = array[j];
			newArr.push(result);
		}
		break;
	}
}
return newArr;

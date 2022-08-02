/** @format */
//01 palidrone
const name = "ada";
var palidrone = "";
for (i = name.length - 1; i >= 0; i--) {
	palidrone += name[i].toLowerCase();
}
if (name.toLowerCase() == palidrone) {
	console.log(true);
} else {
	console.log(false);
}
//02
var array = [2, 10, 5, 4];
var newArr = [];
var target = 7;
for (i = 0; i < array.length; i++) {
	for (var j = 0; j < array.length; i++) {
		if (array[i] + array[j] == target) {
			var result = array[j];
			newArr.push(result);
		}
		break;
	}
}
console.log(newArr);

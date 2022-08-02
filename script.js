/** @format */
//01 palidrone
const name = "ada";
var palidrone = "";
for (i = name.length - 1; i >= 0; i--) {
	// console.log(name[i].toLowerCase());
	palidrone += name[i].toLowerCase();
}
if (name.toLowerCase() == palidrone) {
	console.log(true);
} else {
	console.log(false);
}
//02

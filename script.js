/** @format */
//01 palidrone
const name = "ada";
const palidrone = "";
for (i = name.length - 1; i >= 0; i--) {
	palidrone += name[i].toLowerCase();
	console.log(palidrone);
}
if (name.toLowerCase() == palidrone) {
	console.log("true");
} else {
	console.log("false");
}
//02

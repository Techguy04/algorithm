/** @format */
//01 palidrone
const name = "ada";
var palidrone = "";
for (i = name.length - 1; i >= 0; i--) {
	palidrone += name[i].toLowerCase();
}
if (name.toLowerCase() == palidrone) {
	return true;
} else {
	return false;
}

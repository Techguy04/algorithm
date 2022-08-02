/** @format */
//01
const palidrone = "Wutche"; 
for (let i = 0; i < palidrone.length; i++) {
	for (let j = 0; j < palidrone.length; j--) {
		if (palidrone.charAt(i) == palidrone.charAt(j)) {
			return true;
		}
		return false;
	}
}

//04

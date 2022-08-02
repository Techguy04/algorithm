/** @format */

const string = "aruihieong";
const vowel = "aeiou";
const consonant = "dfhjkslmnvbfrty";
let vCount = 0;
let cCount = 0;
//vowelCount
for (i = 0; i < vowel.length; i++) {
	for (j = 0; j < string.length; j++) {
		if (string[j].includes(vowel[i])) {
			vCount++;
		}
	}
}

//Consonant count
for (i = 0; i < consonant.length; i++) {
	for (x = 0; x < string.length; x++) {
		if (string[x].includes(consonant[i])) {
			cCount++;
		}
	}
}

if (vowel > consonant) {
	return "vowel Wins";
} else if (consonant > vowel) {
	return "consonant Wins";
} else {
	return "draw";
}

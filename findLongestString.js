const findLongestString = (sentence) => {
	const vowelsObj = {
		a: "a",
		e: "e",
		i: "i",
		o: "o",
		u: "u",
	};

	let [firstLongestString, secondLongestString] = sentence
		.replaceAll(",", " ")
		.split(" ")
		.sort((a, b) => b.trim().length - a.trim().length);

	let longestString = firstLongestString || "";

	if (firstLongestString.length === secondLongestString.length) {
		let firstStringVowelCount = 0;
		let secondStringVowelCount = 0;

		for (let i = 0; i < firstLongestString.length; i++) {
			if (vowelsObj[firstLongestString[i].toLowerCase()]) {
				firstStringVowelCount++;
			}
			if (vowelsObj[secondLongestString[i].toLowerCase()]) {
				secondStringVowelCount++;
			}
		}

		longestString =
			firstStringVowelCount > secondStringVowelCount
				? firstLongestString
				: secondLongestString;
	}

	console.log(longestString);
	return longestString;
};

findLongestString(
	"Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
);

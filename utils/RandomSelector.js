// const RandomSelector = (rarityArray) => {
// 	let selectedArray = [];
// 	let preliminaryArray = [];
// 	for (let i = 0; i < rarityArray.length; i++) {
// 		let random = Math.floor(Math.random() * rarityArray.length);
// 		if (!preliminaryArray.includes(rarityArray[random])) {
// 			selectedArray.push(random);
// 		}
// 	}
// 	return selectedArray;
// };

export default function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

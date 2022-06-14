// Вычислить количество повторений каждого фрукта

let fruits = [
	'banana',
	'grapefruit',
	'banana',
	'grapefruit',
	'banana',
	'orange',
	'bananana',
];

let result = {};

fruits.forEach((item) => {
	if (!result[item]) {
		result[item] = 1;
	} else {
		result[item]++;
	}
});

console.log(result);

// есть массив платежей, нужно вывести 3 самых прибыльных дня.
// createdAt - дата платежа
// sum - сумма одного платежа
// Каждый платёж в разном объекте, но дата может быть одинаковая
// В ответе нужно вывести массив объектов
// [{Дата 1: значение, сумма платежей за этот день: значение}{Дата 2: значение, сумма платежей за этот день: значение}{Дата 3: значение, сумма платежей за этот день: значение}]

// *********************************************************************************
// РЕШЕНИЕ "В ЛОБ"
// const initArr = [
// 	{ createdAt: '2021-06-12', sum: 300 },
// 	{ createdAt: '2020-10-11', sum: 144 },
// 	{ createdAt: '2020-12-12', sum: 300 },
// 	{ createdAt: '2020-10-11', sum: 20 },
// 	{ createdAt: '2020-05-11', sum: 10 },
// 	{ createdAt: '2020-05-11', sum: 250 },
// 	{ createdAt: '2021-06-12', sum: 170 },
// 	{ createdAt: '2020-05-11', sum: 300 },
// 	{ createdAt: '2021-05-11', sum: 40 },
// 	{ createdAt: '2020-12-12', sum: 200 },
// 	{ createdAt: '2021-05-11', sum: 15 },
// 	{ createdAt: '2021-05-11', sum: 15 },
// 	{ createdAt: '2021-06-12', sum: 37 },
// 	{ createdAt: '2021-06-12', sum: 200 },
// 	{ createdAt: '2020-12-12', sum: 400 },
// ];

// const uniqueDateObj = initArr.reduce((acc, item) => {
// 	if (!acc[item.createdAt]) {
// 		acc[item.createdAt] = item.sum;
// 	} else {
// 		acc[item.createdAt] = acc[item.createdAt] + item.sum;
// 	}
// 	return acc;
// }, {});

// console.log(uniqueDateObj);

// const uniqueDateArr = Object.entries(uniqueDateObj).map((item) => ({
// 	createdAt: item[0],
// 	sum: item[1],
// }));

// console.log(uniqueDateArr);

// let finalyArr = [
// 	{ createdAt: '', sum: 0 },
// 	{ createdAt: '', sum: 0 },
// 	{ createdAt: '', sum: 0 },
// ];

// for (let i = 0; i < uniqueDateArr.length; i++) {
// 	if (uniqueDateArr[i].sum > finalyArr[0].sum) {
// 		finalyArr[2].sum = finalyArr[1].sum;
// 		finalyArr[2].createdAt = finalyArr[1].createdAt;
// 		finalyArr[1].sum = finalyArr[0].sum;
// 		finalyArr[1].createdAt = finalyArr[0].createdAt;
// 		finalyArr[0].sum = uniqueDateArr[i].sum;
// 		finalyArr[0].createdAt = uniqueDateArr[i].createdAt;
// 	} else if (uniqueDateArr[i].sum > finalyArr[1].sum) {
// 		finalyArr[2].sum = finalyArr[1].sum;
// 		finalyArr[2].createdAt = finalyArr[1].createdAt;
// 		finalyArr[1].sum = uniqueDateArr[i].sum;
// 		finalyArr[1].createdAt = uniqueDateArr[i].createdAt;
// 	} else if (uniqueDateArr[i].sum > finalyArr[2].sum) {
// 		finalyArr[2].sum = uniqueDateArr[i].sum;
// 		finalyArr[2].createdAt = uniqueDateArr[i].createdAt;
// 	}
// 	// console.log(finalyArr);
// }

// console.log(finalyArr);

// *********************************************************************************

// РЕШЕНИЕ ЧЕРЕЗ РЕКУРСИЮ (не факт, что лучше)

const payments = [
	{ createdAt: '2021-06-12', sum: 300 },
	{ createdAt: '2020-10-11', sum: 144 },
	{ createdAt: '2020-12-12', sum: 300 },
	{ createdAt: '2020-10-11', sum: 20 },
	{ createdAt: '2020-05-11', sum: 10 },
	{ createdAt: '2020-05-11', sum: 250 },
	{ createdAt: '2021-06-12', sum: 170 },
	{ createdAt: '2020-05-11', sum: 300 },
	{ createdAt: '2021-05-11', sum: 40 },
	{ createdAt: '2020-12-12', sum: 200 },
	{ createdAt: '2021-05-11', sum: 15 },
	{ createdAt: '2021-05-11', sum: 15 },
	{ createdAt: '2021-06-12', sum: 37 },
	{ createdAt: '2021-06-12', sum: 200 },
	{ createdAt: '2020-12-12', sum: 400 },
];

const res = {};

payments.forEach((item) => {
	res[item.createdAt] = res[item.createdAt]
		? item.sum + res[item.createdAt]
		: item.sum;
});

const array = Object.entries(res);

let total = [];

const findBiggestSum = (arr) => {
	if (total.length === 3) {
		return total;
	} else {
		arr.forEach((item) => {
			let sum = arr.map((i) => i[1]);
			if (Math.max(...sum) === item[1]) {
				total.push({
					createdAt: item[0],
					sum: item[1],
				});
				sum = sum.filter((el) => el !== item[1]);
				let newArr = arr.filter((el) => el[1] !== item[1]);
				findBiggestSum(newArr);
			}
		});
	}
};

findBiggestSum(array);

console.log('🚀 ~ total', total);

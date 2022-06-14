// Who likes it?

// Вы, наверное, знаете систему «лайков» из Facebook и других страниц. Люди могут «лайкать» сообщения в блогах, изображения или другие элементы. Мы хотим создать текст, который должен отображаться рядом с таким элементом. Реализуйте функцию, которая принимает массив, содержащий имена людей, которым понравился элемент. Он должен возвращать отображаемый текст, как показано в примерах:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
	if (!Array.isArray(names)) return;

	const namesLength = names.length;
	let text;
	switch (namesLength) {
		case 0:
			text = 'no one likes this';
			break;
		case 1:
			text = names[0] + ' likes this';
			break;
		case 2:
			text = names[0] + ' and ' + names[1] + ' like this';
			break;
		case 3:
			text = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
			break;
		default:
			const numberOfOtherUsers = namesLength - 2;
			text =
				names[0] +
				', ' +
				names[1] +
				' and ' +
				numberOfOtherUsers +
				' others like this';
	}
	console.log('🚀 ~ file: index.js ~ line 32 ~ likes ~ text', text);

	return text;
}

likes([]); // 'no one likes this'
likes(['Peter']); // 'Peter likes this'
likes(['Jacob', 'Alex']); //'Jacob and Alex like this'
likes(['Max', 'John', 'Mark']); //'Max, John and Mark like this'
likes(['Alex', 'Jacob', 'Mark', 'Max']); //'Alex, Jacob and 2 others like this'

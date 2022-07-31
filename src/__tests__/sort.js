import sortByHealth from '../sort';

test('test sortByHealth function', () => {
	const users = [
		{ name: 'мечник', health: 10 },
		{ name: 'маг', health: 100 },
		{ name: 'лучник', health: 80 },
	];
	const result = sortByHealth(users);
	expect(result).toEqual([
		{ name: 'маг', health: 100 },
		{ name: 'лучник', health: 80 },
		{ name: 'мечник', health: 10 },
	]);
});

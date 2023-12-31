import { getPrice } from '.';

it('if a car is parked for 2 hours, the price should be 2 real', () => {
	const parkedDate = new Date('2020-10-10T12:00:00');
	const exitDate = new Date('2020-10-10T14:00:00');
	const result = getPrice(parkedDate, exitDate);
	expect(result).toBe(2);
});

it('if a car is parked for 3 hours, the price should be 3 real', () => {
	const parkedDate = new Date('2020-10-10T12:00:00');
	const exitDate = new Date('2020-10-10T15:00:00');
	const result = getPrice(parkedDate, exitDate);
	expect(result).toBe(3);
});

it('if a car is parked for 2:10 hours, the price should be 3 real', () => {
	const parkedDate = new Date('2020-10-10T12:00:00');
	const exitDate = new Date('2020-10-10T14:10:00');
	const result = getPrice(parkedDate, exitDate);
	expect(result).toBe(3);
});

it('if a car is parked for more than 5 hours, the price should be 10 real', () => {
	const parkedDate = new Date('2020-10-10T12:00:00');
	const exitDate = new Date('2020-10-10T17:01:00');
	const result = getPrice(parkedDate, exitDate);
	expect(result).toBe(10);
});

it('if a car is parked for exact 5 hours, the price should be 5 real', () => {
	const parkedDate = new Date('2020-10-10T12:00:00');
	const exitDate = new Date('2020-10-10T17:00:00');
	const result = getPrice(parkedDate, exitDate);
	expect(result).toBe(5);
});

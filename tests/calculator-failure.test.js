const calculator = require('../scripts/calculator')

test('string with two commas should result in NaN', () => {
    expect(calculator.add('2,,')).toBe(NaN);
});

test('string with a alphabetic character should result in NaN', () => {
    expect(calculator.add('2,N')).toBe(NaN);
});
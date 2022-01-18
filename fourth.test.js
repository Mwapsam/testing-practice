const capitalizeString = require('./fourth.js');

test('hello to Hello', () => {
  expect(capitalizeString('hello')).toBe('Hello');
});

test('morning to Morning', () => {
  expect(capitalizeString('morning')).toBe('Morning');
});

test('hello world to Hello world', () => {
  expect(capitalizeString('hello world')).toBe('Hello world');
});

test('It needs to be a string', () => {
  expect(() => {
    capitalizeString(504);
  }).toThrow();
});

test('It needs to be a string', () => {
  expect(() => {
    capitalizeString(true);
  }).toThrow();
});

test('It needs to be a string', () => {
  expect(() => {
    capitalizeString(null);
  }).toThrow();
});

test('It needs to be a string', () => {
  expect(() => {
    capitalizeString(undefined);
  }).toThrow();
});

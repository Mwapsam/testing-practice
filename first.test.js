const stringLength = require('./first.js');

test('string length is 10', () => {
  expect(stringLength('abcdefghij')).toBe(10);
});

test('string length is 3', () => {
  expect(stringLength('abc')).toBe(3);
});

test('Too large', () => {
  expect(() => {
    stringLength('abcdefghijklm');
  }).toThrow();
});

test('Too small', () => {
  expect(() => {
    stringLength('');
  }).toThrow();
});

import Validator from '../app';

test('ok_name', () => {
  const username = 'test_1-name';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test.each([
  ['test%name'],
  ['test!name'],
  ['test;name'],
  ['test.name']])(
  ('invalid characters'),
  (str) => {
    expect(Validator.validateUsername(str)).toBeFalsy();
  },
);

test('three digits', () => {
  const username = 'test_123-name';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('four digits', () => {
  const username = 'test_1234-name';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test.each([
  ['1test_1-name'],
  ['test_1-name2'],
  ['-test_name'],
  ['test-1_name-'],
  ['_test-1_name'],
  ['test-1_name_']])(
  ('underscore, numbers and dash at the beginning and end'),
  (str) => {
    expect(Validator.validateUsername(str)).toBeFalsy();
  },
);

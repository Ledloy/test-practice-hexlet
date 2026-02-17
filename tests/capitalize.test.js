import assert from 'assert';
import capitalize from '../src/capitalize.js';

assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize(''), '');

// Если всё прошло успешно, можно вывести:
console.log('Все тесты пройдены!');
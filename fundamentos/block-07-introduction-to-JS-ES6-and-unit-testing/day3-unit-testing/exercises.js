const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4,5), 9, 'retorno de sum(4, 5) é 9');
assert.strictEqual(sum(0,0), 0, 'retorno de sum(0, 0) é 0');
assert.throws(() => {sum(4, '5'); });
assert.throws(() => {sum(4, '5'); }), /^Error: parameters must be numbers$/;
// assert.doesNotThrow(() => {sum(4, '5'); });

      
// implemente seus testes aqui

assert.strictEqual(typeof sum, 'function');
assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.throws(() => {
  sum(4, '5');
});
assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);

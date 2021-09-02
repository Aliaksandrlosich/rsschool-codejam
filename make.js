const assert = require("assert");
function sum(a, b) { 
return a + b; 
} 
function make(a) { 
return function (b, c, d) { 
return function (e) { 
return function (sum) { 
return [a, b, c, d, e].reduce(sum, 0); 
} 
} 
} 
}
describe('Make', () => {
  it('1 Make', () => {
    const sum1 = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(sum1, 777);
  });
 it('2 Make', () => {
    const sum1 = make(2)(45, 0, 664)(-41)(sum);
    assert.deepEqual(sum1, 670);
  });
});
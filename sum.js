const assert = require("assert");

function sumofother(array) 
{ let result = [];
     let sumArray = array.reduce(function(a, b) {
  return a + b;
});
     let length=array.length;
    for(let i = 0; i < length; i++)
      result.push(sumArray-array[i]);
 return result
};

describe('Sum of other', () => {
  it('1', () => {
    const array = sumofother([ 2, 3, 4, 1 ]);
    assert.deepEqual(array, [ 8, 7, 6, 9 ]);
  });
  it('2', () => {
    const array = sumofother([ 5, 0, 6, -1 ]);
    assert.deepEqual(array, [ 5, 10, 4, 11 ]);
  });
});
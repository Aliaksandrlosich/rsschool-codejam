const assert = require("assert");

function sumofother(array) 
{ let result = [];
  let length=array.length;
    let sumArray = array.reduce(function(a, b) {
  return a + b;
});
    for(let i = 0; i < length; i++)
      result.push(sumArray-array[i]);
 return result;
};

describe('Sum of other', () => {
  it('1', () => {
    const array = sumofother([2, 3 ,4 ,1]);
    const exit = [8, 7, 6, 9];
    assert.deepEqual(array, exit);
                }
    );
  it('2', () => {
    const array = sumofother([5, 0, 6, -1]);
    const exit = [5, 10, 4, 11];
    assert.deepEqual(array, exit);
} );
});

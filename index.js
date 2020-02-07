// eslint-disable-next-line func-style
function sum(fromN, toN) {
  let sumA = 0;
  console.log(`fromN ${fromN}, toN ${toN}`);
  // Sum all the values from fromN up to toN


  const recurse = function (fromN, toN) {
    sumA += fromN;
    console.log(`recurse: fromN ${fromN}, toN ${toN}, sumA ${fromN}`);
    if (fromN === toN) {

      return sumA;
    } else {
      return recurse(fromN + 1, toN);
    }
  };
  return recurse(fromN, toN);
}

console.log(sum(3, 5));

module.exports = sum;

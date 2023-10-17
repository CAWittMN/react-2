/**
 *"Unroll" a square array into a single array.
 * the original array is not mutated.
 *
 * @example
 * unroll([
 * [1, 2, 3],
 * [4, 5, 6],
 * [7, 8, 9]
 * ]);
 * // returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */
const unrollRecursion = (squareArray, accuArr = []) => {
  let arr = squareArray.map((row) => [...row]);
  let newArr = [...accuArr];
  if (arr.length === 0) {
    return newArr;
  }
  let topRow = arr.shift();
  let rightSide = arr.map((row) => row.pop());
  let bottomRowReversed = (arr.pop() || []).reverse();
  let leftSideReversed = arr.map((row) => row.shift()).reverse();
  newArr = [
    ...newArr,
    ...topRow,
    ...rightSide,
    ...bottomRowReversed,
    ...leftSideReversed,
  ];
  return unrollRecursion(arr, newArr);
};

const unrollWhileLoop = (squareArray) => {
  let arr = squareArray.map((row) => [...row]);
  let newArr = [];
  while (arr.length > 0) {
    let topRow = arr.shift();
    let rightSide = arr.map((row) => row.pop());
    let bottomRowReversed = (arr.pop() || []).reverse();
    let leftSideReversed = arr.map((row) => row.shift()).reverse();
    newArr = [
      ...newArr,
      ...topRow,
      ...rightSide,
      ...bottomRowReversed,
      ...leftSideReversed,
    ];
  }
  return newArr;
};

(module.exports = unrollRecursion), unrollWhileLoop;

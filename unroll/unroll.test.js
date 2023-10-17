const unrollRecursion = require("./unroll");
const unrollWhileLoop = require("./unroll");

describe("#unrollRecursion", function () {
  it("is a function", function () {
    expect(typeof unrollRecursion).toEqual("function");
  });

  it("returns an array", function () {
    let returnedValue = unrollRecursion([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it("returns the unrolled array", function () {
    let returnedValue = unrollRecursion([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    expect(returnedValue).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it("does not mutate the original array", function () {
    let originalArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    unrollRecursion(originalArray);
    expect(originalArray).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});

describe("#unrollWhileLoop", function () {
  it("is a function", function () {
    expect(typeof unrollWhileLoop).toEqual("function");
  });

  it("returns an array", function () {
    let returnedValue = unrollWhileLoop([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it("returns the unrolled array", function () {
    let returnedValue = unrollWhileLoop([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    expect(returnedValue).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it("does not mutate the original array", function () {
    let originalArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    unrollWhileLoop(originalArray);
    expect(originalArray).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });
});

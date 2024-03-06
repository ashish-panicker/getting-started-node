export const findLargest = function (a, b) {
  return a > b ? a : b;
};

export const findSmallest = function (a, b) {
  return a < b ? a : b;
};

// CJS syntax
// module.exports = { findLargest, findSmallest };
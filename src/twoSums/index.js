/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  for (const [i1, el1] of arr.entries()) {
    for (const el2 of arr.slice(i1)) {
      if (el1 + el2 === base) {
        return [el1, el2]
      }
    }
  }
};

twoSums([5, 9, 3], 12); // [9, 3]

export default twoSums;

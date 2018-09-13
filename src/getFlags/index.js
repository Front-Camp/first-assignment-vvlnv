/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  if (arr && arr.length) {
    return arr.reduce((acc, cur) => {
      if (cur.flags && cur.flags.length) {
        return [...acc, ...cur.flags]
      } else {
        // Err
      }
    }, [])
  } else {
    // Err
  }
};

export default getFlags;

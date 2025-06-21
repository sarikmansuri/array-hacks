/**
 * @param {Array.<number>} array
 * @returns {Number}
 *
 * @throws {TypeError}
 * @throws {Error}
 */
const secondMax = (array) => {
  // Check if the input is a valid array
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be a valid array');
  }

  // Remove duplicate elements from the array
  const uniqueValues = [...new Set(array)];

  // Ensure there are at least two distinct elements in the array
  if (uniqueValues.length < 2) {
    throw new Error('Array must contain at least two distinct numeric elements.');
  }

  // Filter out non-numeric values, Infinity, and -Infinity
  const nonNumericArr = array.filter((item) => {
    return typeof item !== 'number' || item === Infinity || item === -Infinity;
  });

  // Check if any non-numeric or infinite values were found in the array
  if (nonNumericArr.length) {
    throw new Error('Array must contain only numbers');
  }

  // Sort the array in descending order and select the largest element
  const sortArr = array.sort((a, b) => b - a)[0];

  // Find the last occurrence of the largest element in the sorted array
  const lastIndex = array.lastIndexOf(sortArr);

  // Retrieve the element immediately after the last occurrence of the largest element
  const secondMaxElement = array[lastIndex + 1];

  return secondMaxElement;
};

export { secondMax };

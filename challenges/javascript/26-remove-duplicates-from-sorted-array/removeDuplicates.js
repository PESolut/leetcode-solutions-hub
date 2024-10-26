/**
 * Removes duplicates from a sorted array in-place.
 * @param {number[]} nums - An array of numbers sorted in non-decreasing order.
 * @returns {number} The number of unique elements in the array.
 * @constraints
 * - 0 <= nums.length <= 3 * 10^4
 * - -100 <= nums[i] <= 100
 * - nums is sorted in non-decreasing order
 */
const removeDuplicates = (nums) => {

    let insertIndex = 1;

    for(let i = 1; i < nums.length; i++) {
        currentElement = nums[i]
        previousElement = nums[i - 1]

        // we only are doing something if the current element is different from the previous element
        if(currentElement !== previousElement) {
            nums[insertIndex] = currentElement;
            insertIndex++;
        }

    }

    return insertIndex;


}

console.log(removeDuplicates([1, 1, 2])) // => [1, 2]
console.log(removeDuplicates([0, 0, 2, 2, 3])) // => [0, 2, 3]

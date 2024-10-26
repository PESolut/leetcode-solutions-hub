/**
 * Removes all occurrences of a specified value from an array in-place.
 * @param {number[]} nums - An array of numbers.
 * @param {number} val - The value to be removed from the array.
 * @return {number} The number of elements in the array that are not equal to val.
 * @constraints
 * - 0 <= nums.length <= 100
 * - 0 <= nums[i] <= 50
 * - 0 <= val <= 100
 */
var removeElement = function(nums, val) {
    // Initialize joinIndex at the end of the array
    let joinIndex = nums.length - 1

    // Iterate through the array
    for(let i = 0; i <= joinIndex;){
        // Check if the current element equals the input value
        if(nums[i] === val){
            // Swap the current element with the element at joinIndex
            // This implements the "nums[i] to joinValue" logic
            nums[i] = nums[joinIndex]
            // Decrement joinIndex
            joinIndex--
        } else {
            // If no swap occurred, move to the next element
            i++
        }
        // The loop continues until i > joinIndex, implementing the "if i == joinIndex then stop the loop" logic
    }

    // Return joinIndex + 1 to get the correct count of elements not equal to val
    return joinIndex + 1
};

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))

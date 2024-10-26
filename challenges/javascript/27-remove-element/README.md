## Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

### Constraints

- 0 <= nums.length <= 100
- 0 <= nums[i] <= 50
- 0 <= val <= 100

### Examples

```
removeElement([3, 2, 2, 3], 3) // => [2, 2, _, _]
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2) // => [0, 1, 4, 0, 3, _, _, _]
``` 

### Thought Process

as with our last problem; we must modify our array in-place. 

we can keep a joinIndex and set this to start at the length of the nums array - 1.

we can then iterate through the loop; on each element we store values currentElement = nums[i] and joinValue = nums[joinIndex] and upon finding an element that equals to the input value, we set nums[joinIndex] = currentElement, nums[i] to joinValue and decrement our joinIndex ( only when swaps occur )

if i == joinIndex then stop the loop










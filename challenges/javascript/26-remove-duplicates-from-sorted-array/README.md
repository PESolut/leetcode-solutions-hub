## Remove Duplicates from Sorted Array

Given a sorted array, remove duplicates in-place such that each element appears only once and return the number of unique elements.

### Constraints

- 0 <= nums.length <= 3 * 10^4
- -100 <= nums[i] <= 100
- nums is sorted in non-decreasing order

### Examples

```
removeDuplicates([1, 1, 2]) // => [1, 2]
removeDuplicates([0, 0, 2, 2, 3]) // => [0, 2, 3]
```

### Thought Process

its imperative to notice the language of the problem. The array is sorted in non-decreasing order. This means that duplicates are next to each other.

another thing to notice is that we are removing duplicates in-place. This means that we are not creating a new array, but rather modifying the existing one.

the reason why we are doing this in-place is because the concept of pass by reference.
 
we can change the input array we are given  by directly modifying the parameter variable

this reminds me of static arrays, where when removing an element, we need to shift all of the elements. In our case; we are not removing an element, but rather putting the unique elements to the back of the array.

### ways to solve this problem

#### 1) using a sorted set

we can store every unique element in a sorted set. then we can iterate through this sorted set and update the nums array with the unique elements..

this is a valid solution, but it requires additional time.

O(log n) time for the sorted set, and O(n) time for the iteration through the set. which gives us O(n + log n) time.

#### 2) using two pointers

we can use two pointers to solve this problem. if we know that each element is sorted, adjacent elements are either duplicates or not.

we can scan through the array from left to right, on each iteration we can check if the current element is different from the next element.

we create a insertIndex pointer, which will be used to update the nums array with unique elements.

as we iterate through the array, we can compare the current element with the previous element. if the numbers are different, we can update the nums array[insertIndex] with the current element.

we increment the insertIndex pointer, and continue iterating through the array.

this solution has a time complexity of O(n), since we are iterating through the array once.

space complexity is O(1), since we are not using any additional data structures.

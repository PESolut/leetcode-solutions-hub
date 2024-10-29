# Dynamic Arrays

generally most higher level langauges use dynamic arrays by default

the main solution to dynamic arrays is that they fix the problem of not being able to resize an array after it's been created.

when we created a static array, we had to specify the size of the array when we created it.

this meant that if we wanted to add an element to the array, we would have to create a new array with a larger size, copy the elements from the old array to the new array, and then delete the old array.

this is very inefficent, and is why dynamic arrays were created.

the length of an array is the number of elements in the array.
the size of an array is the memory allocated to the array.

theres a pointer that tracks the last element in the array. because of this accessing an element is O(1), but adding an element is O(n) because we may have to resize the array.

when we add to the array and theres maximum length. We allocate a brand new array with all the elements we are trying to store. the best way to do this is to double the size of the array.

the elements that are copied share the same index in the new array.

the original array at this point is still stored in memory, but we don't need it anymore so it can be deleted.

why double the size and not some other number ( like the amount of elements we are adding)

so we dont have to keep resizing the array as we add elements.

we dont want to just allocate way more memory than we need because that would be a waste of memory.

when we double the size of the array, we are trading off space for time.

this doubling the capacity is called amortized time complexity. since usually when we add elements we dont have to resize the array, but when we do it costs us O(n) time.. average is O(1) so we can say that on average it is O(1) or constant time.

the number of operations that it takes to build an array of 9 times; first when we add the first number its 1 operation, then 2, then four, then 8... it took 15 operations.. 2 * n is the number of operations which can reduce to O(n)

we dont care about constants in Big O notation; because of Math. as the input size increases; it generally increases linerally or exponentially. the exponential growth is much more than the linear growth.

when comparing a linear algo to a exponential algo; as the input size increases; the exponential algo will grow much faster than the linear algo

## properties of dynamic arrays

- they are resizable
- they have a default size if not supplied with one

## operations on dynamic arrays  and their time complexities

| Operation | Big-O Time |
|-----------|------------|
| Read/Write i-th element | O(1) |
| Insert/Remove End | O(1) |
| Insert Middle | O(n) |
| Remove Middle | O(n) |

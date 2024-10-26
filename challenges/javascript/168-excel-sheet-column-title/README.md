# Excel Sheet Column Title - In-Depth Solution Guide

## Problem Statement

Given an integer `columnNumber`, return its corresponding column title as it appears in an Excel sheet.

For example:
- A -> 1
- B -> 2
- C -> 3
...
- Z -> 26
- AA -> 27
- AB -> 28 
...

## Understanding the Problem

This problem is essentially asking us to convert a decimal number into a base-26 number system, where instead of digits 0-9, we use letters A-Z. However, there's a twist: the numbering starts at 1, not 0.

## Key Concepts

1. **Base-26 System**: We're dealing with a number system that has 26 digits (A-Z) instead of the usual 10 (0-9).

2. **1-Indexing**: Unlike most programming scenarios where we start counting from 0, Excel columns start at 1. This introduces a slight complication in our conversion process.

3. **Right-to-Left Processing**: We need to build our string from right to left, similar to how we write numbers in decimal.

## Solution Approach

### Step 1: Setup

We'll use an array to build our title string. This allows us to easily add characters to the beginning of our result.

We'll also create a mapping from numbers (0-25) to letters (A-Z). This is an optimization to avoid repeatedly converting numbers to characters in our main loop.

### Step 2: Main Conversion Loop

We'll use a while loop that continues until we've processed the entire column number. In each iteration:

1. **Adjust for 1-indexing**: Subtract 1 from the column number. This is crucial because Excel columns start at 1, not 0.

2. **Get the current character**: Use the modulo operator (%) with 26 to get the remainder. This remainder (0-25) corresponds to our current letter (A-Z).

3. **Add the character to our result**: Add the character to the beginning of our array. We add to the beginning because we're processing from right to left.

4. **Update for next iteration**: Divide the column number by 26 (using integer division) to move to the next "digit".

### Step 3: Finalize Result

After the loop, join the array elements into a single string and return it.

## Detailed Walkthrough

Let's walk through the process for converting the column number 28 to its title "AB":

1. Initial state: columnNumber = 28, returnArr = []

2. First iteration:
   - Adjust: 28 - 1 = 27
   - Current char: 27 % 26 = 1, which corresponds to 'B'
   - Add 'B' to returnArr: ['B']
   - Update: 27 // 26 = 1 (integer division)

3. Second iteration:
   - Adjust: 1 - 1 = 0
   - Current char: 0 % 26 = 0, which corresponds to 'A'
   - Add 'A' to returnArr: ['A', 'B']
   - Update: 0 // 26 = 0

4. Loop ends (columnNumber is now 0)

5. Join returnArr to get "AB"

## Time and Space Complexity

- Time Complexity: O(log₂₆(n)), where n is the input columnNumber. We're doing a base-26 conversion, which takes logarithmic time.
- Space Complexity: O(log₂₆(n)) for the returnArr, as the length of the result is proportional to log₂₆(n).

## Common Pitfalls and Tips

1. **Forgetting to adjust for 1-indexing**: This is the most common mistake. Always remember to subtract 1 from the column number in each iteration.

2. **Using the wrong base**: Make sure you're consistently using 26 as your base for modulo and division operations.

3. **Building the string in the wrong order**: Remember to add new characters to the beginning of your result, not the end.

4. **Inefficient character conversion**: Pre-computing a mapping from numbers to letters can be more efficient than repeatedly using character code conversions.

## Conclusion

This problem is an excellent example of working with different number bases and handling special indexing rules. It tests your ability to think abstractly about number systems and to handle edge cases carefully. When approaching similar problems, always consider the base of the number system you're working with and any special rules (like 1-indexing) that might apply.

---

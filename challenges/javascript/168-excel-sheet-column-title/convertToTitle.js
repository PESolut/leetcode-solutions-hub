/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    // We'll use an array to build our title string
    let returnArr = []

    // Create a mapping from numbers (0-25) to letters (A-Z)
    // This is more efficient than repeatedly using String.fromCharCode in the main loop
    let numberToColumn = {}
    for(let i = 0; i < 26; i++){
        numberToColumn[i] = String.fromCharCode(65 + i)
    }

    // Continue loop until we've processed the entire column number
    while(columnNumber > 0){
        // Adjust for 1-indexing: Excel columns start at 1, not 0
        // This is a key step many forget!
        columnNumber--
        
        // Get the current character:
        // Use modulo 26 to get the remainder, which maps to our current letter
        let char = numberToColumn[columnNumber % 26]
        
        // Add the character to the beginning of the array
        // We use unshift because we're building the string from right to left
        returnArr.unshift(char)
        
        // Update columnNumber for the next iteration
        // We divide by 26 because we've handled the current "digit"
        columnNumber = Math.floor(columnNumber / 26)
    }
    
    // Join the array elements into a single string and return
    return returnArr.join('')
};
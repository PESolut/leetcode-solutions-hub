/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    // we can create two freq objects then comprae the values to see if we have a valid pair of inputs
    // ransom note must have the same unique keys as magazine
    /*
    example 1
    ransom =
    {
        a: 1
    }
    magazine =
    {
        b: 1
    }
----------------------
    example 2
    ransom =
    {
        a: 2
    }
    magazine =
    {
        b: 1
        a: 1
    }
----------------------
    example 3
    ransom =
    {
        a: 2
    }
    magazine =
    {
        b: 1
        a: 2
    }

    in order to create randsom we need: two a's

    [a,a] = neededLetters Array
    aab = magezine

    el = magezine[1] = a
    
    put all needed letters in an array []
    loop through magazine
        on each el, check if the current el is inside our array if it is
            // remove that element from our array

    // if neededLetters.length !== 0 return false else return true
    */

    let neededLetters = ransomNote.split('')
    for(let i = 0; i < magazine.length; i++){
        let char = magazine[i]
        if(neededLetters.includes(char)){
            let index = neededLetters.findIndex((c) => {
                console.log(c)
                return c == char
            })
            // console.log(neededLetters)


            neededLetters.splice(index,1)
            console.log('neededLetters has character ',char,'at index',index)
            // console.log(neededLetters)
        }
    }

    if(neededLetters.length == 0){
        return true
    } else {
        return false
    }
    
};
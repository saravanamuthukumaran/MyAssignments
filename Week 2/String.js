let str ="Hello world"
console.log(str)
let str1= str.split(" ")
console.log(str1.length)
console.log(str1[1])

/*answer2Example:2
1. Trim the String
2. Split the String into Words
3. Identify the Last Word
4. Calculate the Length of the Last Word
5. Return the length*/

let tstr =" I work as Qa analyst"
let tstrn = tstr.trim().split(" ").pop()
console.log(tstrn)
let len = tstrn.length 
console.log(len)

/*Example:3 
1. Remove spaces and convert all letters to the same case 
2. Sort the Characters 
3. Compare Sorted Strings 
4. Return the Result */


function compareString(str1, str2){
    str1=str1.replace(/\s/g," ").toLowerCase()
    str2=str2.replace(/\s/g," ").toLowerCase()

    let sortedStr1=str1.split("").sort().join()
    let sortedStr2=str2.split("").sort().join()

    return sortedStr1 === sortedStr2

}

console.log(compareString("listen", "silent"))
console.log(compareString("Hello", "world"))
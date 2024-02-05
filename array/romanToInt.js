
const romanToInt = (s) => {

    // create a map and associates each roman value with their number representation.
    const romanValues = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }

    // initialize variable to store final integer result
    let result = 0;

    // iterate thru roman numeral string from left to right;
    for(let i = 0; i < s.length; i++){
        // check if current symbol and next symbol form a valid subtractive pair
        if(i < s.length - 1 && romanValues[s[i]] < romanValues[s[i + 1]]){

            result += romanValues[s[i + 1]] - romanValues[s[i]]
            i++
        }else{

            result += romanValues[s[i]]
        }
    }

    return result
}


console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCVI")); // Output: 1996

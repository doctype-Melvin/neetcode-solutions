/*
Encode and Decode Strings
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.
*/

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // Encode the strings by appending the length of each string followed by a '#' character and the string itself
        return strs.map(str => str.length+'#'+str)
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // Decode the string by splitting it at each '#' character and extracting the original strings
        // The first part of each split is the length of the string, which we can ignore
        // The second part is the original string
        // We can use map to iterate over the array and slice to get the original string
       return str.map(word => word.slice(word.indexOf('#')+1))
    }
}
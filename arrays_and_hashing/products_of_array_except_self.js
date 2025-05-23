/*
Products of Array Except Self
Solved 
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in 
O
(
n
)
O(n) time without using the division operation?

Example 1:

Input: nums = [1,2,4,6]

Output: [48,24,12,8]
Example 2:

Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = []
        let suf = []

        for (let i = 0; i < nums.length; i++) {
           if (i === 0) {
            pre[0] = 1
            } else {
           pre[i] = pre[i-1] * nums[i-1]
            }
        }

        for (let j = nums.length-1; j >= 0; j--) {
            if (j === nums.length-1) {
                suf[j] = 1
            } else {
                suf[j] = suf[j+1] * nums[j+1]
            }
        }
        console.log(pre, suf)
        let result = []
        for (let k = 0; k < pre.length; k++) {
            result[k] = pre[k]*suf[k]
        }

        return result

    }
} 
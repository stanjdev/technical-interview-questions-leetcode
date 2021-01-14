// https://yangshun.github.io/tech-interview-handbook/best-practice-questions
// Week 1 - Sequences

// Contains Duplicates https://leetcode.com/problems/contains-duplicate/submissions/ 


// 1/14/21 - visited object. Improved since 4 months ago!
/* 
Runtime: 92 ms, faster than 57.77% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 47.2 MB, less than 18.39% of JavaScript online submissions for Contains Duplicate.
*/
var containsDuplicate = function(nums) {
    const visited = {};
    for (let i = 0; i < nums.length; i++) {
        if (visited[nums[i]] !== undefined) return true;
        else visited[nums[i]] = i;
    }
    return false;
};




// 2nd try 9/20/20 using double i and j iterators: 
// O(n^2) Quadratic Time. (for looping twice, bad for performance)
/* 
Runtime: 880 ms, faster than 15.51% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 40.6 MB, less than 96.04% of JavaScript online submissions for Contains Duplicate.
*/
var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};




// 1st attempt: uses .includes(), and array
/* 
TAKES TOO LONG... WORST.
Runtime: 1660 ms, faster than 7.08% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 43.5 MB, less than 75.16% of JavaScript online submissions for Contains Duplicate.
*/
var containsDuplicate = function(nums) {
    let current = [];
    for (let i = 0; i < nums.length; i++) {
       if (current.includes(nums[i])) {
            return true
       }
        current.push(nums[i])
    }
    return false
};
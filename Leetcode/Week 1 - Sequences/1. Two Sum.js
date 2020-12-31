// https://yangshun.github.io/tech-interview-handbook/best-practice-questions
// Week 1 - Sequences

// 1. Two Sum https://leetcode.com/problems/two-sum/ 
/* 
TWO SUM: 
- brute force nested for loops
- HashTable Object way, hashTable[complement] !== undefined
- new Map() way. map.has, map.get, map.set 
*/


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]



// Brute Force Way - Nested For Loops 
// (checking every single possibility): Using double i and j iterators (for looping twice, bad for performance) 
// First try 5/2020
var twoSum = function(nums, target) {
    let sum = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                sum.push(i, j)
            }
        }
    }
    return sum;
};

// 2nd try 9/20/20: same brute force, nested for loops approach
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                answer.push(i, j);
                return answer;
            }
        }
    }
};





// HashTable Way
// 3rd Try 11/15/20, 12/31/20: takes a bit more memory. Instead of using 2 for loops (1 to fill the hashTable and 1 to use it to compare against the array, you can just use 1 for loop for both, if sequenced properly)
var twoSum = function(nums, target) {
    let answer = [];
    let hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        let targMinusEl = target - nums[i];
        if (hashTable[targMinusEl] !== undefined) answer.push(hashTable[targMinusEl], i);
        hashTable[nums[i]] = i; // for each element in the array, record its index
    }
    return answer;
};


// SAME for Edabit and Coderbyte:
// https://coderbyte.com/algorithm/two-sum-problem 
// Two-Sum problem solved using hashTable
// hashTable way is quicker (My final hashTable answer!) https://edabit.com/challenge/KYeCAfYxsvomapQg2?tab=comments&commentId=5jRBQpi9okBZnHQcG 
function allPairs(arr, target) {
	let pairs = [];
	let hashTable = {};
	
	for (let i = 0; i < arr.length; i++) {
		let targetMinusEl = target - arr[i];
		if (hashTable[targetMinusEl]) {
			pairs.push([arr[i], targetMinusEl]); // if the difference was already tracked in our hashTable, push this valid pair into our answer array.
		}
		hashTable[arr[i]] = arr[i]; // otherwise, record the visited number to match with future differences.
	}
	return pairs.map(pair => pair.sort((a, b) => a - b)).sort((a, b) => a[0] - b[0]); // inner sort, then outer sort
}
  





// MAP way: 
// 11/26/20 https://youtu.be/U8B984M1VcU - USING MAP instead of OBJECT/Hashtable/HashMap
var twoSum = function(nums, target) {
    let result = [];
    let numIndex = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let complement = target - num;
        if (numIndex.has(complement)) {
            result[0] = numIndex.get(complement);
            result[1] = i;
            return result;
        }
        numIndex.set(num, i);
    }
};


// Same MAP way, alternative:
var twoSum = function(nums, target) {
    let answer = [];
    let hashMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let targMinusEl = target - num;
        if (hashMap.has(targMinusEl)) answer.push(hashMap.get(targMinusEl), i);
        hashMap.set(num, i)
    }
    return answer;
};
// https://yangshun.github.io/tech-interview-handbook/best-practice-questions 
// Week 3 Non-Linear Data Structures


// 226. Invert Binary Tree https://leetcode.com/problems/invert-binary-tree/
// https://www.youtube.com/watch?v=B8QkJDF4WZw 1 minute quick answer, but no explanation
// https://youtu.be/NFt7yhEcsCs - kind of an okay explanation. 


/**
 * DEFINITION for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */


/* 
My summary of LeetCode binary tree definitions and how to use them: 
the 'root' argument is the current node. Don't pay attention to the array the gets console logged. Draw out the actual tree.
You can traverse by grabbing the root.left or root.right. Because then, THAT child node is the one you're focusing on now. 
I never used 'root.val'. 
*/



// Recursive calls to both left and right after swapping them. Inverts from top down to bottom.
// Time: O(n) - have to visit each node to invert it
// Space: O(h) - where 'h' is the height of the tree.
var invertTree = function(root) {
  // root is the current focused node. If it's null, that means you hit leafless child nodes. return the child node's value to be used for previous recursive calls
  if (root == null) return root; 
  
  // swap em in place using destructuring assignment
  [root.left, root.right] = [root.right, root.left];
  
  // THEN, you recursively traverse downwards with these child nodes. The return calls are what bring you back up out of the entire thing. 
  invertTree(root.left);
  invertTree(root.right);
  
  // returns the root to be used for previous recursive calls, or returns the final swapped Tree root back up top.
  return root;
};
/* 
Explanation: 
First, have a base case check to see if you've hit a leafless child node, return the node you're currently at.
swap the left and the right of the current node in place.
recursively call invertTree function on both the left and the right you just swapped.
return the root to be used for the previous recursive calls or to finally return the inverted Tree
*/




// Iterative while loop and queue:
// Time: O(n) - where each node is visited / queued up. 
// Space: O(n) - where the queue will hold contain all nodes per level of the tree.
var invertTree = function(root) {
  if (root == null) return null; // good to have this base case, because otherwise the below code would throw errors.
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let curr = queue.shift();
    let temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;
    if (curr.left !== null) queue.push(curr.left);
    if (curr.right !== null) queue.push(curr.right);
  }
  return root;
}
/* 
Explanation:
Have a base case if the current root node is null, just return null. It was an empty tree to begin with.
Set up a queue. Can use just a simple empty array; Push the root into it.
while the queue isn't empty, set a currentNode to be the first value removed from the queue.
do the 3 temp swap thing for the currentNode's left and right nodes.
if the those left and right aren't null (meaning there's still more to go), 
push them into the queue array to feed the while loop to keep it going.
When the queue is finally empty, return the inverted Tree.
*/







// // 6/11/21 first attempt WORKS:
// var invertTree = function(root) {
//   if (!root) return root;
  
//   let temp = root.left;
//   root.left = root.right;
//   root.right = temp;
// /*  OR, you can do: */
//   // [root.left, root.right] = [root.right, root.left]
//   console.log(root.val, root.left, root.right);
//   invertTree(root.left);
//   invertTree(root.right);
  
//   return root;
// };


// // 6/11/21 2nd attempt iterative using a queue, this is more efficient
// const invertTree = (root) => {
//   if (!root) return root;
//   let queue = [];
//   queue.push(root);
//   while (queue.length) {
//     let curr = queue.shift();
    
//     let temp = curr.left;
//     curr.left = curr.right;
//     curr.right = temp;
    
//     // [curr.left, curr.right] = [curr.right, curr.left]; // SLOWER THAN TEMP variable way
//     if (curr.left !== null) queue.push(curr.left);
//     if (curr.right !== null) queue.push(curr.right);
//   }
//   return root;
// }


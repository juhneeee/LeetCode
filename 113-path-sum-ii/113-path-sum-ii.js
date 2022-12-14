/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */

//Runtime: 275 ms, faster than 5.18% of JavaScript online submissions for Path Sum II.
//Memory Usage: 61.1 MB, less than 5.03% of JavaScript online submissions for Path Sum II.

var pathSum = function(root, targetSum) {
    // visit each node
    // when call on root (5)
    // push value into currPath
    // call dfs on left and right
    const result = []
    function dfs(root,targetSum,currPath){
        if (root){
            if(!root.left && !root.right){
                // if leaf check sum
                currPath.push(root.val)
                console.log("leaf", currPath)
                const sum = currPath.reduce((a,b)=> a+b)
                if (sum == targetSum) {result.push(currPath)}
            } else {
                // if no leaf dfs
                dfs(root.left,targetSum,[...currPath, root.val])
                dfs(root.right,targetSum,[...currPath, root.val])
            }
        }
    }
    dfs(root,targetSum,[])
    return result
};


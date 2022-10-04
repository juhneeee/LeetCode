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
 * @return {boolean}
 */

// removed early return if negative target sum
// 40% time 57% space

var hasPathSum = function(root, targetSum) {
    if(root == null){return false}
    
    targetSum-=root.val
    if(root.left || root.right){
        return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
    } else return targetSum === 0

};
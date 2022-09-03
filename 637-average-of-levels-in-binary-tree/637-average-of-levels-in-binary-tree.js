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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const arr=[]
    
    function dfs(node,level=0){
        if(node){
            arr[level] ||= [0,0]
            arr[level][0]+= node.val
            arr[level][1]++
            
            dfs(node.left, level+1)
            dfs(node.right, level+1)
        }
    }
    dfs(root)
    return arr.map(([sum,count])=> sum/count)
};
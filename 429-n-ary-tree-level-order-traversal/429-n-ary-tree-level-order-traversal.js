/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const queue = [root]
    const result= []
    if (!root){return []}
    
    while (queue.length){
        const qLen = queue.length
        const level = []
        for (let i=0; i< qLen; i++){
            const node = queue.shift()
            level.push(node.val)
            queue.push(...node.children)
        }
        result.push(level)
    }
    return result
};

// while loop visits each level
// for loop visits each node of level
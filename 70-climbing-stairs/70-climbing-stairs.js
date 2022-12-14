/**
 * @param {number} n
 * @return {number}
 */

// pattern propagates like Fib. Not sure why
// update: it's because all  the paths from n-1 can reach n in one move (1)
// and all the paths from n-2 can reach n in one move(2)

var climbStairs = function(n, memo={}) {
    if (n <= 3){
        return n
    } if (memo[n]){
        return memo[n]
    }
    
    const val = climbStairs(n-1,memo)+climbStairs(n-2,memo)
    memo[n]=val
    return val
    
};

//     1: [1]
//     2: [1,1] [2]
//     3: [1,1,1] [2,1] [1,2]
//         3 ways
//     4: [1,1,1,1] [2,1,1] [1,2,1] [1,1,2] [2,2]
//         5 ways
//     5: 8 ways
//     6: [1,1,1,1,1,1][2,1,1,1,1][2,2,1,1][2,2,2]
//         1           5           6        1
//         13 ways
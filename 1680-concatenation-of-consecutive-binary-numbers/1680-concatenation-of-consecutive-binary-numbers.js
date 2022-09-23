/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
const MOD = 1e9 + 7;
    let res = 0;
    let shift = 1;
    for (let i = 1; i <= n; i++) {
        if (i == (1 << shift)) shift++;
        res *= (2 ** shift);
        res += i;
        res %= MOD;
    }
    return res;
};
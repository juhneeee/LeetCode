/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    function comb(n,r){
        let product=1,
            dif = n-r
        r++
        while(r<=n){
            product*= r
            r++
        }
        while(dif>1){
            product/= dif
            dif--
        }
        return product
    }
    const arr=[]
    for(let i=0; i<=rowIndex; i++){
        arr.push(comb(rowIndex,i))
    }
    return arr
};
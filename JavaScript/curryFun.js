function sum(a){
    if(!a) return 0;
    let ans = a;
    function smallerSum(b){
        if(!b) return ans;  //closure
        ans+=b;
        return smallerSum;
    }
    return smallerSum;
}

console.log(sum());   //0
console.log(sum(10)());   //10
console.log(sum(10)(20)());    //30
console.log(sum(10)(20)(30)());    //60
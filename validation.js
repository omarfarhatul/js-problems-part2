function multiply(n1, n2){
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        return 'Please provide a number';
    }
    const mul=n1*n2;
    return mul;
}
const result=multiply(9, 8);
console.log(result);
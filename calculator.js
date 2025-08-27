function add(n1, n2){
    return n1+n2;
}
function sub(n1, n2){
    return n1-n2;
}
function mul(n1, n2){
    return n1*n2;
}
function div(n1, n2){
    return n1/n2;
}

function calculator(a, b, operation){
    if(operation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operation === 'sub'){
        const result = sub(a, b);
        return result;
    }
    else if(operation === 'mul'){
        const result = mul(a, b);
        return result;
    }
    else if(operation === 'div'){
        const result = div(a, b);
        return result;
    }
    else{
        return "Only 'add', 'sub', 'mul', 'div' operation is allowed."
    }
}

const result1=calculator(6, 2, 'add');
const result2=calculator(6, 2, 'mul');
const result3=calculator(3, 2, 'sub');
const result4=calculator(6, 4, 'div');
const result5=calculator(7, 4, 'rem');
console.log(result1, result2, result3, result4, result5);
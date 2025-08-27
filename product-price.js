function getprice(product){
    if(typeof product !== 'object'){
        return 'Please provide an object';
    }
    const price=product.price;
    return price;
}

// const price = getprice({name: 'Ghorar gari', price: 450, color: 'red'});
const price=getprice(5);
console.log(price);


function getsecond(numbers){
    console.log(typeof numbers);
    const second = numbers[1];
    return second;
}
const second=getsecond([1, 3, 56]);
console.log(second);
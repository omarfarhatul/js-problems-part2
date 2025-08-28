const products = [
    {id: 1, name: 'Xiami phone one night', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'mac book air', price: 19000},
    {id: 4, name: 'Samsung phone', price: 19000},
    {id: 5, name: 'walton mobile', price: 19000},
]

// for(const product of products){
//     console.log(product);
// }

function matchedProducts(products, search){
    const matched =[];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);
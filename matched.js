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
    for(const product of products){
        console.log(product.name.includes(search));
    }
}

const result = matchedProducts(products, 'phone');
console.log(result);
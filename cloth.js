// shirt price -> 500
// pant price -> 300
// shoe price -> 800

function clothQuantity(shirtQ, pantQ, shoeQ){
    const pershirtPrice=500;
    const perpantPrice=300;
    const pershoePrice=800;

    const shirttotalprice=shirtQ*pershirtPrice;
    const panttotalprice=pantQ*perpantPrice;
    const shoetotalprice=shoeQ*pershoePrice;

    const totalprice=shirttotalprice+panttotalprice+shoetotalprice;
    return totalprice;
}

const cloth=clothQuantity(1, 2, 1);
console.log('cloth needed: ', cloth);
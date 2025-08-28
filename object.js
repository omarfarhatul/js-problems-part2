const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'Savar',
    isSingle: true,
    friends: ['Apu', 'Raj', 'Kabir'],
    movies: [{name: 'no. 1', year: 2012}, {name: 'borbad', year: 2025}],
    act: function(){
        console.log('acting like Sakib Khan')
    },
    car: {
        brand: 'tesla',
        price: 5000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask'
        }
    }
}

console.log(nayok);
console.log(nayok.car.manufacturer);
console.log(nayok.act);
nayok.act();

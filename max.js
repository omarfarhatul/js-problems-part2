const disha = 56;
const salman = 77;

if(disha>salman){
    console.log('Disha will get the strawberry.');
}
else{
    console.log('Salman will get the strawberry.');
}

// inside a function
function getMax(n1, n2){
    if(n1>n2){
        return n1;
    }
    else{
        return n2;
    }
}
    const max1 = getMax(64, 23);
    const max2 = getMax(59, 73);
    const ultimateMax=getMax(max1, max2);

    console.log('Max of two is: ', max1);
    console.log('Max of two is: ', max2);
    console.log('Ultimate max of two is: ', ultimateMax);
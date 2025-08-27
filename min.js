const prices= [300, 125, 365, 643, 123, 342, 266];
function getMin(numbers){
    let min=numbers[0];
    for(const num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min;
}

const cheap=getMin(prices);
console.log('Cheapest one is: ',cheap);
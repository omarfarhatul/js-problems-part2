const heights=[84, 75, 66, 87, 78, 55, 59];

function getMin(numbers){
    let min=numbers[0];
    for(const num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min;
}

const min=getMin(heights);
console.log('Max value is: ', min);
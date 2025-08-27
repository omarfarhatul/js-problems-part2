const heights=[54, 75, 66, 87, 78, 65, 59];

function getMax(numbers){
    let max=numbers[0];
    for(const num of numbers){
        if(num>max){
            max=num;
        }
    }
    return max;
}

const max=getMax(heights);
console.log('Max value is: ', max);
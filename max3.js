const jim=55;
const tim=74;
const kim=63;
if(jim>tim && jim>kim){
    console.log('Jim is the ultimate boss.', jim);
}
else if(tim>jim && tim>kim){
    console.log('Tim is the ultimate boss.', tim);
}
else{
    console.log('Kim is the ultimate boss.', kim);
}


// maximun number out of 3 numbers
function maxOfthree(n1, n2, n3){
    if(n1>n2 && n1>n3){
        return n1;
    }
    else if(n2>n1 && n2>n3){
        return n2;
    }
    else{
        return n3;
    }
}
const maxNum=maxOfthree(84, 89, 56);
console.log('Maximun number is: ', maxNum);


// another process
const max = Math.max(34, 63, 12);
console.log('Max isuing Math max: ', max);
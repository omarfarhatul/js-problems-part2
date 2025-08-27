function fullname(first, last){
    if(typeof first !== 'string'){
        return 'First name should be a String';
    }
    else if(typeof last !== 'string'){
        return 'Last name should be a String';
    }
    const full=first+' '+last;
    return full;
}

const fname=fullname('Omar', 'Farhatul');
console.log(fname);
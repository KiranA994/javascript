// write a prgm to check whether a given number is positive or negative.


num = 0;

if(num > 0){
    console.log('given number is positive');
}
else if(num == 0){
    console.log('neither positive nor negative');
}
else{
    console.log('given number is negative');
}

num > 0 ? console.log('given number is positive') : num == 0 ? console.log('neither positive nor negative') : console.log('given number is negative')
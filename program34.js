//  write a program to find cube of a given  nuber using function

var cube = (num)=>{
    const cub = num ** 3;
    return cub;
}

console.log(cube(2));

//  write a program to check whether given number is even or odd

var oe = (n)=>{
return n%2==0 ? 'even':'odd';
}

console.log(oe(55));

//  write a program to check whether the given number is positive or negative.

var pn = (num)=>{ 
    return num>0 ? 'positive':num<0?'negative':'neither positive nor negative';
}

console.log(pn(-10));
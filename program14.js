//  write a prgm to find second largest number from the given three nnumbers and sort  the given three numbers in descending order.

a = 100;
b = 200;
c = 300;

if(a > b && a > c){
    if(b > c){
        console.log("b is second largest number");
        console.log(`descending order is ${a},${b},${c}`);
    } 
    else{
        console.log("c is second largest number");
        console.log(`descending order is ${a},${c},${b}`);
    } 
}
else if(b > a && b > c){
    if(a > c){
        console.log("a is second largest number");
        console.log(`descending order is ${b},${a},${c}`);
    }
    else{
        console.log("c is second largest number");
        console.log(`descending order is ${b},${c},${a}`);
    }
    
}
else if(c >a && c > b){
    if(a  > b){
        console.log("a is second largest number");
        console.log(`descending order is ${c},${a},${b}`);
    }
    else{
        console.log("b is second largest number");
        console.log(`descending order is ${c},${b},${a}`);
    }
}
else{
    console.log('All numbers are equal');
}

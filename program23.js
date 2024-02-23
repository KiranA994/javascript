// write a prgm to check whether a given  number is prime or not

num = 10;
flag = true;
for(i=2;i<num;i++){
    if(num % i == 0){
        flag = false;
        break;
    } 
}
console.log(flag ? 'prime number':'not a prime number');

console.log('-------------------------------------------------');

//  write a prgm to print all prime numbers between 1-50.

min = 1;
max = 50;
for(i=2;i<=max;i++){
    count = 0;
    for(j = 2; j<i; j++){
        if(i % j == 0){
            count = count + 1;
            break;
        }
    }
    if(count == 0){
        console.log(i);
    }
}

console.log('-----------------------------------------');

// write a prgm to display all armstrong number between 8-500

sum = 0;
for(i=8;i <=500;i++){
    temp = i;
    while(temp>0){
        ld = temp % 10;
        sum = sum + Math.pow(ld,temp.toString().length);
        temp = parseInt(temp/10);
    }
    console.log(sum===temp);    
}


console.log('-------------------------------------------------------');



// write a prgm to find the gcd/hcf of given two number 

// 12 - 1 2 3 4 6 12

// 28 - 1 2 4 7 14 28

// common factors - 1,2,4

// hcf = 4

num1 = 12;
num2 = 28;
gcd = 0;
for(i=1; i<=num1 && i<=num2; i++){
    if(num1 % i == 0 && num2 % i == 0){
        gcd = i;
    }
}
console.log(gcd);


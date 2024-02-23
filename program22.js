//  write a prgm to print numbers from 1 to 10

for(i=1;i<=10;i++){
    console.log(i);
}

console.log('----------------------------------------------');

// write a prgm to print from 10 to 1


for(j=10;j>=1;j--){
    console.log(j);
}

console.log('----------------------------------------------');

//  wite a prgm to find the factorial of anumber using for loop

num = 3;
fact = 1;
for(k=1;k<=num;k++){
    fact = fact * k
}
console.log(fact);

console.log('----------------------------------------------');

//  write a prgm to create a loop which can iterate 10 times but can display only up to 5. 

for(l=1;l<=10;l++){
    console.log(l);
    if(l>=5){
        break;
    }
}
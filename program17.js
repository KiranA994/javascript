// write a program to print following output for the given input

// input = 2//3//4
// output = 24//369//4936
// pattern= 2*12 // 3*123 // 4*1234
// pattern = 2+22 // 3+33+333 // 4+44+444+4444

num = 5;
i = 1;
p = 0;
while(i<=num){
    p = p*10 + (num*i);
    i++;    
}
console.log(p);


// pattern= 2*12 // 3*123 // 4*1234

num = 3;
i = 1;
str = '';
while(i <= num){
    str = str + i;
    i++;
}
console.log(num*str);

// pattern = 2+22 // 3+33+333 // 4+44+444+4444

num = 4;
i = 1;
conc = '';
sum = 0;
while(i<=num){
    conc = conc + num;
    sum = sum + Number(conc);
    i++;
}
console.log(sum);
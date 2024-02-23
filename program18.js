// write a program to display number in reverse order.

num = 234;

str = '';
while(num > 0){
    lastDigit = num%10;
    str = str + lastDigit;
    num = Math.floor(num / 10);
}
console.log(str);

// check wheteher the number is palindrome or not

n  = 124;

rev = n;

conc = '';

while(n>0){
    ld = n % 10;
    conc = conc + ld;
    n = parseInt(n / 10);
}
if(rev == conc){
    console.log('The given number is palindrome');
}
else{
   console.log('The given number is not palindrome'); 
}



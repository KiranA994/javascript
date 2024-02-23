//  write a program to check whether given three digit number is  amstrong or not
//  153 = 1**3 + 5**3 + 3**3 = 1+125+27 = 153

num = 370;
temp = num;
ams = 0 ;
while(num > 0){
    ld = num % 10;
    ams = ams + ld**3;
    num = parseInt(num/10);
}
console.log(temp == ams? 'Armstrong': 'Not Armstrong');



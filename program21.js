// write a prgm to display the numbers whose exponential is in the range of 8-36
// - here the user can input the exponential value(power)
//  power = 2

power = 2;
low = 8;
up = 36;
i = 1;

while(i<=up){
    pow = i**power;
    if(pow >= low && pow <= up){
        console.log(i);
    }
    i++;
}
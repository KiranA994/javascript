//  * * * * *
//  *       *
//  *       *
//  *       *
//  *       *
//  *       *
//  * * * * *

for(i=1;i<=8;i++){
    str='';
    for(j=1;j<=5;j++){
        if(j==1 || j==5 || i==1 || i==8){
            str = str + '*';
        }
        else{
            str = str + ' ';
        }
    }
    console.log(str);
}

// 1
// 0 1
// 1 0 1
// 0 1 0 1

for(i=1;i<=4;i++){
    conc = '';
    for(j=1;j<=i;j++){
        if((i+j)%2 == 0){
            conc =conc + 1;
        }
        else{
            conc = conc + 0; 
        }
    }
    console.log(conc);
}
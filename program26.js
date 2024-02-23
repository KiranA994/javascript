// *
// * *
// * * *
// * * * *

for(i=1;i<=4;i++){
    str = '';
    for(j=1;j<=i;j++){
        str = str + ' * ';
    }
    console.log(str);
}

// 1
// 1 2
// 1 2 3 
// 1 2 3 4

for(row=1;row<=4;row++){
    conc = '';
    for(col=1;col<=row;col++){
        conc = conc + ' ' + col + ' ';
    }
    console.log(conc);
}

// 1
// 2 2 
// 3 3 3 
// 4 4 4 4

for(row=1;row<=4;row++){
    stri = '';
    for(col=1;col<=row;col++){
        stri = stri + ' ' + row + ' ';
    }
    console.log(stri);
}
console.log('----------------------------------------------------');

// * * * *
// * * *
// * * 
// * 

for(row=1;row<=4;row++){
    strin = '';
    for(col=4;col>=row;col--){
        strin = strin + ' ' + '*' + ' ';
    }
    console.log(strin);
}
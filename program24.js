//  pattern

// # # # #
// # # # #
// # # # #
// # # # #

for(i=1; i<=4; i++){
    str = '';
    for(j=1;j<=4; j++){
        str = str + " # ";
    }
    console.log(str);
}

console.log('----------------------------------------');

// * * * * *
// * * * * *
// * * * * *

for(i=1;i<=3;i++){
    conc = '';
    for(j=1;j<=5;j++){
        conc = conc + ' * ';
    }
    console.log(conc);
}

console.log('------------------------------------');

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3 
// 4 4 4 4

for(i=1;i<=4;i++){
    stri = '';
    for(j=1;j<=4;j++){
        stri = stri + " " + i + " ";
    }
    console.log(stri);
}
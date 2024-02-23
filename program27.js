// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

for(i=1;i<=5;i++){
    str = '';
    for(j=1;j<=i;j++){
            str = str + ' * ';
    }
    console.log(str);
}

for(row=1;row<=4;row++){
    strin = '';
    for(col=4;col>=row;col--){
        strin = strin + ' ' + '*' + ' ';
    }
    console.log(strin);
}
var myArr = [{

        num: 5,
        str: 'apple'
},
    {
        num: 8,
        str: 'cabbage'
}, {
        num: 1,
        str: 'mango'
            }];
//sorting by array str(string)
myArr.sort(function(val1, val2){
    if(val1.str < val2.str){
        return -1;

    }else{
        return 1;
    }
});

console.log(myArr);

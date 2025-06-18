function sumGive(n){
    let sum=0;
    for(i=0;i<=n;i++){
        sum+=i;
    }

    return sum;

}

function memoGive(fun){
    let cache={};
    return function(...args){
        let n=args[1];
        if(n in cache){
            return cache[n]
        }
        else{
            let res=fun(n)
            cache[n]=res;
            console.log(cache);
            return res;
        }

    }

}

let efficFun= memoGive(sumGive);
let finalefficsum= efficFun(8,6);
console.log(finalefficsum);
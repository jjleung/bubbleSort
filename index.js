//create a function expression named 'sort'
//'sort' will sort an array of values in the following sequence
// null,0,1,2,3,....9999,Infinity,'A','AA','B','BA',...'a','aa','b','bb','c','d',....,'z',...,'zzzzz'
//----if sort is given null it will return null

let sort = function(data){
n
    if(!data){
        return data;
    }
    let arr = data;
    function swap(ind1,ind2){
        let i1 = arr[ind1];
        let i2 = arr[ind2];

        arr[ind1] = i2;
        arr[ind2] = i1;

        return;
    }

    let didSwap;
    do{
        didSwap = false;
        for(let i = 0; i < data.length; i++){
            if(arr[i] === null){
                arr = arr.slice(0,i).concat(arr.slice(i+1));
                arr.unshift(null);
                didSwap = true;
            }else if(typeof arr[i] === "string" && typeof arr[i+1] === "number"){
                swap(i,i+1);
                didSwap = true;
            }else if(arr[i] > arr[i+1]){
                swap(i,i+1);
                didSwap = true;
            }
        }
    }while(didSwap);

    return arr;
    
}
module.exports = {
    sort
}
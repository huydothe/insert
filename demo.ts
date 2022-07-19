function insertSort(list:number[]){
    for(let i=1; i<list.length; i++){
        let temp=list[i];
        let j=i-1;

        while (j>=0 && list[j]>temp){
            list[j+1]=list[j];
            j--;
        }
        list[j+1]=temp;
    }
    console.log(list);
}
insertSort([1,5,2,8,4,54,222,5]);
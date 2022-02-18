/*
A Selection Sort Algorithm

1) Swap
2) minIndex

3) Sort Function

Run time O(n^2)
*/

var swap = (array,index1, index2) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

var findMinIndex = (array,startIndex) => {
    let minValue = array[startIndex];
    let minIndex = startIndex;

    for(var i = startIndex; i < array.length; ++i){
        if(array[i] < minValue){
            minIndex = i;
            minValue = array[i];
        }
    }

    return minIndex;
}

var selectionSort = (array)=>{

    var i = 0;

    while(i < array.length){
        let minIndex = findMinIndex(array,i);
        swap(array,i,minIndex);
        ++i;
    }

   

    return array;


}

var arr = [4,3,0,-1];

console.log(selectionSort(arr));
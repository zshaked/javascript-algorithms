//Binary Search Alogrithm O(log_n)
//Search on a sorted array

var arr = [1,3,4,5,6]

function search(array, targetValue){
    let min = 0;
    let max = array.length - 1;

    let guess = 0;

    while(min < max){

		guess = Math.round((max + min)/2) - 1;

        if(array[guess] == targetValue){
        	return guess;
        }

        /*
        if the index guessed is lower than the targetValue
        reset the lowest index to the middle of the max and min (shifting the index upwards)
        otherwise shift the max downwards
        */
        if(array[guess] < targetValue){
            min = guess + 1;
        }else{
            max = guess - 1;
        }
    }
    return -1;
}

console.log(search(arr,5));
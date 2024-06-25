const testArray = [6, 5, 3, 1, 8, 7, 2, 4]


function insertionSort(input) {
    let output = []
    output[0] = input[0]

    //for each element in the input array , going in order
    for (let i = 1; i < input.length; i++){
        //assign that element to the current value we're checking 
        let currentValue = input[i]
        console.log(currentValue)
        let inserted = false;
        // for each element in the output array, starting at the end
        for (let o = output.length - 1 ; o >= 0; o--){
            //check if that value is larger than currentvalue
            if (output[o] >= currentValue){
            //if it is , move its index up by one 
                output[o + 1] = output[o]
            } else {
                output[o + 1] = currentValue
                inserted = true ;

                break
            }
        }
        if (inserted === false) {
            output[0] = currentValue;
        }
    } 

return output

}

console.log(insertionSort(testArray))

export default insertionSort

//take the next element in input list 
//compare it to the last element in output list
//if it's larger than the last element, insert it there ouput[i + 1]
//if it's smaller, check it against the previous element at output[i - 1]
//keep going until an element it's smaller than is found
//insert it there, and move all the elements that were bigger than it up one index
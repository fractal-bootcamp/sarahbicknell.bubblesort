const testArray = [6, 5, 3, 1, 8, 7, 2, 4]

const outputHistory = []

function insertionSort(input) {
    let output = []
    output[0] = input[0]
    outputHistory.push({output: output.slice(), currentValue: input[0]});

    //for each element in the input array , going in order
    for (let i = 1; i < input.length; i++){
        //assign that element to the current value we're checking 
        let currentValue = input[i]

        let inserted = false;
        // for each element in the output array, starting at the end
        for (let o = output.length - 1 ; o >= 0; o--){
            //check if that value is larger than currentvalue
            if (output[o] >= currentValue){
                //if it is , move its index up by one 
                output[o + 1] = output[o]
                //if it isn't, we want to insert the currentvalue right next to it 
                //then we swtich insert to true to we know insertion has happened 
            } else {
                output[o + 1] = currentValue
                inserted = true ;
                
                break
            }
        }
        //if insert hasn't happened we know we're at the end so the value is smaller than anything in output and should be put at start 
        if (inserted === false) {
            output[0] = currentValue;
        }
        outputHistory.push({output: output.slice(), currentValue})
    } 

return outputHistory

}

console.log(insertionSort(testArray))

export default insertionSort

//take the next element in input list 
//compare it to the last element in output list
//if it's larger than the last element, insert it there ouput[i + 1]
//if it's smaller, check it against the previous element at output[i - 1]
//keep going until an element it's smaller than is found
//insert it there, and move all the elements that were bigger than it up one index
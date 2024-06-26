//our input is an unsorted array 
//there will be two functions
//one will break the array into two parts and feed it into the second function
//other will take the two arrays, compare the first index of each of them, and pop whichever is lower onto a new sorted array
//


function merge(firstArray: number[], secondArray: number[]): number[] {
    console.log("merge running!")
    let newFirstArray = [...firstArray]
    let newSecondArray = [...secondArray]
    let sortedArray: number[] = []
    
    while (newFirstArray.length > 0 && newSecondArray.length > 0){
        if (newFirstArray[0] < newSecondArray[0]){
            const element = newFirstArray.shift()
            if (element != undefined){ 
                sortedArray.push(element)
            }
        } else {
            const element = newSecondArray.shift()
            if (element != undefined){
                sortedArray.push(element)
            }
        }
    }

    //so now at least one array is empty, and i have an array of the elements sorted, however there might be something in the other array
    // so lets make sure we add those elements to the final array 
    //(we add both, and the other does not matter, as one should be empty)

    return [...sortedArray, ...newFirstArray, ...newSecondArray]
}

//oh shit, i'm naming this mergeSort inside of "divide" or something because this actually the main function and will call the other one
function mergeSort(myCuteMessyArray: number[], counter: {value: number}) {
    console.log("Starting array: ", myCuteMessyArray)
    if (myCuteMessyArray.length === 1) {
        return myCuteMessyArray
        // it's already sorted!
    }
    
    counter.value++
    //find the index of middle so we can divide it in two (floor'd in case its odd)
    const middleIndex = Math.floor(myCuteMessyArray.length / 2)
    //slice first half from start up to the middle index (slice method takes index of start and end of slice)
    //slice second half blahblahblah
    const firstHalf = myCuteMessyArray.slice(0, middleIndex)
    const secondHalf = myCuteMessyArray.slice(middleIndex, myCuteMessyArray.length)

    //then i want to recurse these back into the function
    //ok but this part confuses me lol
    const sortedFirstHalf = mergeSort(firstHalf, counter)
    console.log("sorted first half: ", sortedFirstHalf, counter.value)
    const sortedSecondHalf = mergeSort(secondHalf, counter)
    console.log("sorted second half: ", sortedSecondHalf)

    const cuteSortedArray = merge(sortedFirstHalf, sortedSecondHalf)
    console.log("after merge call:", cuteSortedArray)
    //ok so now i need to write the merge function

    return cuteSortedArray
}

const counter = {value: 0}

const finalstate = mergeSort([4, 2, 3, 7], counter)
console.log("counter: " , counter.value)
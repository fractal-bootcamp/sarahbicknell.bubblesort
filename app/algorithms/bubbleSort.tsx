const bubbleSort(arr) => {
    const newArray = [...arr];
    let swapped = false;

    for (let i = 0; i < arr.length - 1 ; i++){
        const element1 = arr[i]
        const element2 = arr[i + 1]

        const shouldSwap = element2 < element1;

        if (shouldSwap) {
            newArray[i] = element2;
            newArray[i + 1] = element1;

            //indicate that there was a swap

            swapped = true;
        }
    }

}

export default bubbleSort

    // if (!swapped) {
    //     return "sorted"
    // } else {
    //     return bubbleSort(newArray)
    // } turn into a wrapped function instead

// const wrappedBubbleSort = (arr: number[], callback: (returnArray: number[]) => void): number[] => {
//     let finished = false; 
//     let array = [...arr]

//     do {
//         const {arr: returnArr, swapped} = bubbleSort(array)

//         array = returnArr;
//         finished = !swapped

//         callback(returnArr)

//     } while (!finished)


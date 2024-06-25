const bubbleStep = (arr: number[]): {arr: number[], swapsHappened: boolean, completed: boolean} => {
    const newArray = [...arr];
    let swapsHappened = false;

    for (let i = 0; i < newArray.length - 1 ; i++){
        const element1 = newArray[i]
        const element2 = newArray[i + 1]

        const shouldSwap = element2 < element1;

        if (shouldSwap) {
            newArray[i] = element2;
            newArray[i + 1] = element1;

            //indicate that there was a swap

            swapsHappened = true;
            return { arr: newArray, swapsHappened: true, completed: false };
        }
    }
    return {arr: newArray, swapsHappened, completed: true}
    //for each run thru the array, it returns the new array and whether at least one swap happened
    // so over in my useEffect, I want it to keep going until there is a run thru with no more swaps happening, indicating storted

}

export default bubbleStep

//andrew wrote this to show me how to do each step with a callback function but ill revisit this later 
//when i do, i could add a click thru history feature
// const bubbleSortWithCallback = (arr: number[], callback?: (newArray: number[]) => any): number[] => {
//     const newArray = [...arr];
//     let swapsHappened = false;

//     for (let i = 0; i < newArray.length - 1 ; i++){
//         const element1 = newArray[i]
//         const element2 = newArray[i + 1]

//         const shouldSwap = element2 < element1;

//         if (shouldSwap) {
//             newArray[i] = element2;
//             newArray[i + 1] = element1;
            
//             //indicate that there was a swap
//             if(callback) callback(newArray)
//             swapsHappened = true;
//         }
//     }

//     if(swapsHappened) return bubbleSortWithCallback(newArray, callback)
//     return newArray
//     //for each run thru the array, it returns the new array and whether at least one swap happened
//     // so over in my useEffect, I want it to keep going until there is a run thru with no more swaps happening, indicating storted

// }

// const history = []

// bubbleSortWithCallback([1, 5, 2, 6, 3, 8, 1], (arr) => history.push(arr))

// console.log(history)

// 
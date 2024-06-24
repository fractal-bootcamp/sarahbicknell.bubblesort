const bubbleStep = (arr: number[]): {arr: number[], swapsHappened: boolean} => {
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
        }
    }
    return {arr: newArray, swapsHappened}
    //for each run thru the array, it returns the new array and whether at least one swap happened
    // so over in my useEffect, I want it to keep going until there is a run thru with no more swaps happening, indicating storted

}

export default bubbleStep

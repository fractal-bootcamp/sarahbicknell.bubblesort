// takes in: array of nums, target
// returns: index where found 


export default function linearSearch(array: number[], target: number): number | undefined {
    for (let i = 0; i < array.length; i++){
        if (array[i] == target){
            const targetLocation = i 
            return targetLocation
        } 
    } return undefined 
}

let array = [3, 2, 6, 9, 3, 6, 4, 5, 1, 2, 4, 9, 6, 7, 3]

console.log(linearSearch(array, 6))
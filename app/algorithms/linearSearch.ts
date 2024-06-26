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

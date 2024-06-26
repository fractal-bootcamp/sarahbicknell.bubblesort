// // 1. divide the array recursively into two halves 
// // a single item is sorted 

// // 2. conquer . each subarray is sorted using the merge sort algorithm

// // 3. merge teh sorted subarrays are merged back in sorted order

// //merge function

// //merge sort function 
// //going to split the array into two halves and pipe that unsorted array into two sorting functions
                                       
// //breadth first depth first search to do first might be helpful

// // graph: nodes with relationships to other nodes 
// // tree: similar to a graph but unidirectional - parent node -> children nodes 

// //desired data structure for viz:
// // tree of nodes, which every node is a sortedarray of numbers, unsortedarray of numbers, leftchild(recursive node), rightchild(recursive node )

// //how to visualize: 

// const merge = (left, right) => {
//     const newLeft = [...left]
//     const newRight = [...right]

//     const sorted = []

//     //if either of these are empty stop
//     while (newLeft.length && newRight.length) {
//         if (newLeft[0] < newRight[0]){
//             sorted.push(newLeft.shift())
//         } else {
//             sorted.push(newRight.shift())
//         }
//     }
//     return [...sorted, ...newLeft, ...newRight]
// }

// export type Node = {
//     sortedArray: number[],
//     unsortedArray: number[],
//     leftChild?: Node,
//     rightChild?: Node
// }

// type WrappedMergeSortReturn = {
//     sortedArray: number[],
//     metadata: {
//         node: Node
//     }
// }

// const wrappedMergeSort = (array) => {
//     //take an array, returns a sorted array
//     let node = {
//         sortedArray: [],
//         unsortedArray: array
//     }

//     const mergeSort = (array) => {
//         //reassign sorted array once sorted
//         //return left child right child 
//         let thisNode = {
//             sortedArray: array, 
//             unsortedArray: array
//         }

//         console.log('mergesort stack', array)
//         if (array.length === 1) {
//             return array
//         }
//         //split into two items and feed to merge 
//         const middle = Math.floor(array.length / 2)
//         const left = array.slice(0, middle)
//         const right = array.slice(middle, array.length)

//         const sortedLeft = mergeSort(left)
//         const sortedRight = mergeSort(right)
//         const sortedArray = merge(sortedLeft.sortedArray, sortedRight.sortedArray)

//         thisNode = {
//             ...thisNode, 
//             leftChild: sortedLeft.thisNode, 
//             rightChild: sortedRight.thisNode,
//             sortedArray
//         }

//         return {sortedArray: merge(sortedLeft.sortedArray, sortedRight.sortedArray), thisNode}
//     }
//     const sortedArray = mergeSort(array)

//     return{sortedArray, metadata: {
//         node
//     }}
// }
// console.log(mergeSort([3, 2, 4, 6, 2, 7, 5, 9]))
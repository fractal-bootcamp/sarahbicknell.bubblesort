'use client';
import { useState , useEffect} from "react";

import insertionSort from "../../algorithms/insertionSort";

const startingArray = [3, 5, 1, 7, 4, 6, 9, 2, 8]

export default function InsertionComp() {
    const [index, setIndex] = useState(0)

    //here I'll call the function and receive the data structure to display 
    const outputHistory = insertionSort(startingArray)
    
    //for each of the arrays in outputHistory, i want it to display for a moment (bonus: current value highlighted), then show the next one 
    useEffect(()=> {
        const intervalId = setInterval(() => {
            setIndex(currentIndex => (currentIndex + 1) % outputHistory.length)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [outputHistory.length])

    if (outputHistory.length === 0) {
        return <div>Loading...</div>;
    }

    const currentOutput = outputHistory[index];
    const currentValue = currentOutput.currentValue
    console.log(currentOutput)

    return (
        <div className="text-xl m-4 p-4"> 
            <h1 className="text-2xl font-mono pb-4"> Insertion Sort Visualization </h1> 
            <p> Input: </p>
            <div className="flex">
                 {startingArray.map((value, index) => (
                <div key={index} className="border p-4"                             
                style={{
                color: value === currentValue ? 'blue' : 'black', 
                borderColor: value === currentValue ? 'blue' : 'gray' }}> {value} </div>
            ))}
            </div>
            <div className="py-4">
                <p> Output: </p>
                <div className="flex"> 
                    {currentOutput.output.map((value, index) => (
                    <div key={index} className="border p-4"                             
                        style={{
                        color: value === currentValue ? 'red' : 'black', 
                        borderColor: value === currentValue ? 'red' : 'gray' }}> {value} </div>
                    ))}

                </div>
            </div>

        </div>
    )
}
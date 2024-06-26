'use client'

import linearSearch from "@/app/algorithms/linearSearch"
import { useState } from "react";


export default function LinearComp() {
    const array = [17, 4, 23, 12, 36, 5, 9, 11, 19, 27, 15, 2, 8, 10];
    const [displayIndex, setDisplayIndex] = useState<number | undefined>(undefined)
    const [foundIndex, setFoundIndex] = useState<number | undefined>(undefined);
    let targetIndex;

    function animateSearch(targetIndex: number | undefined) {
        if (targetIndex === undefined) return;

        let currentIndex = 0;

        function animateNext() {
            if (currentIndex <= targetIndex!) {
                setDisplayIndex(currentIndex);
                if (currentIndex === targetIndex) {
                    setFoundIndex(targetIndex);
                }
                currentIndex++;
                setTimeout(animateNext, 300); // Adjust the delay as needed
            }
        }
        animateNext()
    }

    function handleClick({value}: {value: number}): void {
        targetIndex = linearSearch(array, value)
        setDisplayIndex(undefined)
        setFoundIndex(undefined)
        animateSearch(targetIndex)
    }

    return(
        <div className="p-4"> 
            <div className="pb-4">
                <h1 className="text-3xl font-mono pb-4"> Linear Search </h1>
                <p> A dead simple search algorithm that iterates through a dataset in order one item at a time until it finds the target value. </p>
                <p> Click on a square to linear search for its value. </p>
            </div> 
            <div className="flex pb-4"> 
                {array.map((value: number, index: number)=> (
                    <button key={index} className="border p-4 w-14" style={{
                        color: index === displayIndex ? 'red' : 'black', 
                        borderColor: index === displayIndex ? 'red' : 'gray' }} onClick={()=> handleClick({value})}> {value} </button> 
                ))}
            </div>
            <div> 
                <p> Target Found at Index: {foundIndex} </p>
            </div>
        </div>
    )
}
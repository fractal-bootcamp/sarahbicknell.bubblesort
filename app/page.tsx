'use client';
import { useState , useEffect} from "react";

// iterate thru array 
//compare each element to the next
//if the next element is smaller, swap elements
// when done, check if it's sorted, if not, do it again

import bubbleStep from "./algorithms/bubbleSort"

const startingArray = [3, 5, 1, 7, 4, 6, 9, 2, 8]

export default function Home() {
  const [array, setArray] = useState(startingArray)

  useEffect(() => {
    const {arr: newArray, swapsHappened} = bubbleStep(array)
    if (swapsHappened == true ){
      setTimeout(()=> setArray(newArray), 1000)
      console.log(newArray)
    }
  }, [array])

  return (
    <div className="flex flex-col pl-10 justify-center">
      <h2 className="text-2xl font-bold pb-10 pt-10"> 
        Bubble Sort Visualization
      </h2>
      <div> 
        {startingArray.map((num, index) => {
          return <span key={index} className="mx-2"> {num}</span>
        })}
      </div>
      <div> 
        {array.map((num, index) => {
          return <span key={index} className="mx-2"> {num}</span>
        })}
      </div>
    </div>
  );
}

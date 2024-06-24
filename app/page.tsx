'use client';
import { useState , useEffect} from "react";

// iterate thru array 
//compare each element to the next
//if the next element is smaller, swap elements
// when done, check if it's sorted, if not, do it again

import bubbleSort from "./algorithms/bubbleSort"

const startingArray = [3, 5, 1, 7, 4, 6, 9, 2, 8]

export default function Home() {
  const [arrays, setArrays] = useState([])

  useEffect(() => {
    const array = wrappedBubbleSort(startingArray)

  }, [])

  return (
    <div>
      <div> 
        Gonna visualize bubble sort
      </div>
      <div> 
        {startingArray.map((num) => {
          return <span key={num} className="mx-2"> {num}</span>
        })}
      </div>
          <div> 
          {array.map((num) => {
            return <span key={num} className="mx-2"> {num}</span>
          })}
        </div>
    </div>
  );
}

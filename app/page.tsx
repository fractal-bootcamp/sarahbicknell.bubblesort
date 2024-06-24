'use client';
import { useState , useEffect} from "react";
import bubbleIcon from "./bubble.webp"

// iterate thru array 
//compare each element to the next
//if the next element is smaller, swap elements
// when done, check if it's sorted, if not, do it again

import bubbleStep from "./algorithms/bubbleSort"

const startingArray = [3, 5, 1, 7, 4, 6, 9, 2, 8]

export default function Home() {
  const [array, setArray] = useState(startingArray)
  const [input, setInput] = useState("")

  useEffect(() => {
    const {arr: newArray, swapsHappened} = bubbleStep(array)
    if (swapsHappened == true ){
      setTimeout(()=> setArray(newArray), 1000)
      console.log(newArray)
    }
  }, [array])

  function handleClick() { 
    const userArray = input.split(" ")
    const userArrayNums = userArray.filter(Boolean).map(Number)
    setArray(userArrayNums)
  }


  const createBubbleStack = (num: number): JSX.Element[] => {
    let icons = [];
    for (let i = 0; i < num; i++) {
      icons.push(<img key={i} src={bubbleIcon.src} alt="Bubble" style={{ display: 'block', width: '30px', height: '30px' }} />);
    }
    return icons;
  };

  return (
    <div className="flex flex-col pl-10">
      <h2 className="text-2xl font-bold pb-10 pt-10"> 
        Bubble Sort Visualization
      </h2>
      <div className="flex pb-4 text-gray-500"> 
        <input type="text" name="userInput" value={input} onChange={(event)=> setInput(event.target.value)} className="border rounded border-gray-400 mx-px"/>
        <button onClick={handleClick} className="border rounded border-black bg-slate-100 mx-px"> Enter your own numbers to sort (separated by spaces)</button>
      </div>
      <div className="flex"> 
        {array.map((num, index) => {
          return(
            <div key={index} className="mx-2 flex flex-col items-center"> 
              <div className="text-center"> {num} </div>
              <div> {createBubbleStack(num)}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

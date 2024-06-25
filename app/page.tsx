'use client'
import Link from "next/link";


export default function Homepage() {
  return(
    <div className="m-5 text-xl pb-3"> 
      <h1 className="text-3xl font-mono pb-5"> Algorithm Visualization Project </h1>
      <ul> 
        <li> 
          <Link href="/sortingalgos/bubblesort"> Bubble Sort</Link>
        </li>
        <li> 
          <Link href="/sortingalgos/insertionsort"> Insertion Sort</Link>
        </li>
        <li> 
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}
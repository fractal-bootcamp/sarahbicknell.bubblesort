'use client'
import Link from "next/link";


export default function Homepage() {
  return(
    <div className="m-5 text-xl pb-3"> 
      <h1 className="text-3xl font-mono pb-5"> Algorithm Visualization Project </h1>
      <ul> 
        <h1 className="text-2xl pb-2"> Sorting Algorithms</h1>
        <li> 
          <Link href="/sortingalgos/bubblesort"> Bubble Sort</Link>
        </li>
        <li> 
          <Link href="/sortingalgos/insertionsort"> Insertion Sort</Link>
        </li>
        <h1 className="text-2xl pb-2"> Search Algorithms</h1> 
        <li> 
        </li>
          <Link href="/searchalgos/linearsearch"> Linear Search </Link>
        <li> 
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}
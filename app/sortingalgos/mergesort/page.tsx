'use client';
import { useState , useEffect} from "react";

const Node = ({node}: {node: Node}) => {
    return (
        <div> 
            <div> 
                {node.sortedArray}
            </div> 
                {node.leftChild && <div> 
                    <NodeComponent sorted={sorted} node={node.leftChild}} /> 
                </div> 

        </div>
    )
}

export default function MergeComp() {
    return (
        <div> 
            <p> Merge Sort Here </p>
        </div>
    )
}
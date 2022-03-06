import React, { useState } from 'react'
import Box from "./Box"

const BoxList = () => {
    const INITIAL_STATE = [
        ["blue", 10, 10],
        ["red", 10, 20],
        ["yellow", 20, 10]
    ]

    const [boxes, setBoxes] = useState(INITIAL_STATE)

    const addBox = (color, width, height) => {
        setBoxes(boxes => [...boxes, {color, width, height}])
    }

    return (
        <div> 
            {boxes.map(arr => {
            const [color, width, height] = arr;
            return <Box color={color} width={width} height={height} addBox={addBox}/>
            })}

            <NewBoxForm />
        </div>

    )
}

export default BoxList;
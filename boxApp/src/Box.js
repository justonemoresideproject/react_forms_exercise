import React, { useState } from 'react'

const Box = ({color, width, height}) => {
    const style = {
        backgroundColor: {color},
        width: {width},
        height: {height}
    }

    return <div style={style}></div>
}

export default Box;
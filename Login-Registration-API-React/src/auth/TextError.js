import React from 'react'
import '../App.css';

const TextError = (props) => {
    return (
        <div style={{color: "red"}}>
            {props.children}
        </div>
    )
}

export default TextError

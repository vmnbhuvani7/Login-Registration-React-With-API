import React from 'react'

const TextError = (props) => {
    return (
        <div style={{color: "red"}} className="ml-3">
            {props.children}
        </div>
    )
}

export default TextError

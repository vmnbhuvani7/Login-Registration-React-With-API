import React from 'react'

const TextError = (props) => {
    return (
        <div style={{color: "red"}} className="ml-3 text-center">
            {props.children}
        </div>
    )
}

export default TextError

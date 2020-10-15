import React from 'react'

import { ErrorMessage, Field } from 'formik'
import TextError from '../auth/TextError'

const Input = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className=" d-flex align-items-center justify-content-between m-3 ">
            <label >{label}: </label>
            <div >
                <Field id={name} name={name} {...rest} className="formStyle"/>
                <ErrorMessage name={name} component={TextError} />
            </div>
        </div>
    )
}

export default Input

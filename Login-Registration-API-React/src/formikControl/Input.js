import React from 'react'

import { ErrorMessage, Field } from 'formik'
import TextError from '../auth/TextError'

const Input = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className="styleright">
            <label >{label}: </label>
            <Field className="styleright" id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input

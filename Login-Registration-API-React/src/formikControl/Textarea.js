import React from 'react'

import { ErrorMessage, Field } from 'formik'
import TextError from '../auth/TextError'

const Textarea = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className="styleright">
            <label>{label}: </label>
            <Field as='textarea' className="styleright" name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea

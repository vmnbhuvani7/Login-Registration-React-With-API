import React from 'react'

import { ErrorMessage, Field } from 'formik'
import TextError from '../auth/TextError'

const Select = (props) => {
    const { label, name, options, ...rest } = props
    return (
        <div className="styleright">
            <label>{label}: </label>
            <Field as='select' name={name} {...rest} className="styleright" >
                {
                    options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.key}
                            </option>
                        )
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Select

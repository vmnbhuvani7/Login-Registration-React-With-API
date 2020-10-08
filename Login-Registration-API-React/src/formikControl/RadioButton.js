import React from 'react'

import { ErrorMessage, Field } from 'formik'
import TextError from '../auth/TextError'

const RadioButton = (props) => {
    const { label, name, options, ...rest } = props
    return (
        <div className="styleright">
            <label>{label}: </label>
            <div className="d-flex align-items-center justify-content-between">
            <Field name={name} {...rest} >
                {
                    ({ field }) => {
                        return options.map(option => {
                            return (
                                <div key={option.value} className="px-1">
                                    <input
                                        type='radio'
                                        {...field}
                                        value={option.value}
                                        checked={field.value === option.value}
                                    />
                                    <label >{option.key}</label>
                                </div>
                            )
                        })
                    }
                }
            </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default RadioButton

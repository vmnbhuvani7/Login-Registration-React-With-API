import React from 'react'

import { ErrorMessage, Field } from 'formik'
import TextError from '../auth/TextError'

const RadioButton = (props) => {
    const { label, name, options, ...rest } = props
    return (
        <div className="d-flex align-items-center justify-content-between m-3">
            <label>{label}: </label>
            <div>
                <div className="d-flex">
                    <Field name={name} {...rest} >
                        {
                            ({ field }) => {
                                return options.map(option => {
                                    return (
                                        <div key={option.value} >
                                            <input
                                                className="mx-3"
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
        </div>
    )
}

export default RadioButton

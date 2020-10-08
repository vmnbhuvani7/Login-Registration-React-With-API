import React from 'react'

import { ErrorMessage, Field } from 'formik'
import TextError from '../auth/TextError'

const CheckBoxGroup = (props) => {
    const { label, name, options, ...rest } = props
    return (
        <div className="row">
            <div className="col-2">
                <label>{label}: </label>
            </div>
            <div className="col-10">
                <Field name={name} {...rest} className="styleright">
                    {
                        ({ field }) => {
                            return options.map(option => {
                                return (
                                    <div key={option.value}>
                                        <input
                                            type='checkbox'
                                            {...field}
                                            value={option.value}
                                            checked={field.value.includes(option.value)}
                                        />
                                        <label >{option.key}</label>
                                    </div>
                                )
                            })
                        }
                    }
                </Field>
                <ErrorMessage name={name} component={TextError} />
            </div>
        </div>
    )
}

export default CheckBoxGroup

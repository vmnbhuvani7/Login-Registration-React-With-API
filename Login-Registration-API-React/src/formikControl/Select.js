import React from 'react'

import { ErrorMessage, Field } from 'formik'
import TextError from '../auth/TextError'
import '../css/Form.css'
const Select = (props) => {
    const { label, name, options, ...rest } = props
    return (
        <div className="d-flex align-items-center justify-content-between m-3">
            <label>{label}: </label>
            <div >
                <Field as='select' name={name} {...rest} className="selecttag">
                    {
                        options.map(option => {
                            return (
                                // console.log(option.name)
                                <option key={option.code} value={option.name}>
                                    {option.name}
                                </option>
                            )
                        })
                    }
                </Field>
                <ErrorMessage name={name} component={TextError} />
            </div>
        </div>
    )
}

export default Select

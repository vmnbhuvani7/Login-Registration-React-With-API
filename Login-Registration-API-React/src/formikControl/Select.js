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
                <Field as='select' name={name} {...rest}>
                    {
                        options.map(option => {
                            if (option && option.name) {
                                return (
                                    <option key={option.code} value={option.name}>
                                        {option.name}
                                    </option>
                                )
                            }
                            else {
                                return (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                )
                            }
                        })
                    }
                </Field>
                <ErrorMessage name={name} component={TextError} />
            </div>
        </div>
    )
}

export default Select

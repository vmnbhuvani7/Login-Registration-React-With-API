import React, { useEffect, useState } from 'react'

import { ErrorMessage, Field } from 'formik'
import TextError from '../auth/TextError'
import '../css/Form.css'

const Select = (props) => {
    const { label, name, options, countryValue, stateValues, ...rest } = props
    const [value, setValue] = useState()

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        {
            value && (
                countryValue(value)
            )
        }
    }, [value])

    return (
        <div className="d-flex align-items-center justify-content-between m-3">
            <label>{label}: </label>
            <div >
                <Field as='select' name={name} {...rest} className="formStyle" onChange={(e) => handleChange(e, name)} value={value}>
                    <option key="" value="" >
                        Select a option
                    </option>
                    {
                        options.map(option => {
                            if (option && option.name) {
                                return (
                                    <option key={option.code} value={option.code}    >
                                        {option.name}
                                    </option>
                                )
                            }
                            else {
                                return (
                                    <option key={option} value={option} >
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

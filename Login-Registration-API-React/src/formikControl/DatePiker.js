import React from 'react'

import { ErrorMessage, Field } from 'formik'
import DateView from 'react-datepicker'
import TextError from '../auth/TextError'
import 'react-datepicker/dist/react-datepicker.css'

const DatePiker = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className="styleright">
            <label>{label}: </label>
            <Field name={name}>
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form
                        const { value } = field
                        return (
                            <DateView
                                {...field}
                                {...rest}
                                selected={value}
                                onChange={val => setFieldValue(name, val)}
                            />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default DatePiker

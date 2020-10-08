import React from 'react'

import CheckBoxGroup from '../formikControl/CheckBoxGroup'
import DatePiker from '../formikControl/DatePiker'
import Input from '../formikControl/Input'
import RadioButton from '../formikControl/RadioButton'
import Select from '../formikControl/Select'
import Textarea from '../formikControl/Textarea'

const FormikControl = (props) => {

    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButton {...rest} />
        case 'checkbox':
            return <CheckBoxGroup {...rest} />
        case 'date':
            return <DatePiker {...rest} />
        default: return null
    }
}

export default FormikControl

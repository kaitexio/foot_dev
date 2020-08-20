import React from "react";
import TextField from "@material-ui/core/TextField";

const renderTextField = ({
                             type,
                             label,
                             input,
                             placeholder,
                             defaultValue,
                             multiline,
                             meta: {touched, invalid, error},
                             ...custom
                         }) => {
    return (
        <TextField
            multiline={multiline}
            variant="outlined"
            fullWidth={true}
            type={type}
            label={label}
            placeholder={placeholder}
            error={touched && error}
            helperText={touched && error}
            defaultValue={defaultValue}
            {...input}
            {...custom}
        />
    )
}


export default renderTextField;
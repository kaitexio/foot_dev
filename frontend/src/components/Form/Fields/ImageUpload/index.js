import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import {makeStyles} from "@material-ui/core/styles";
import {withStyles} from "@material-ui/core";


const renderImageFile = withStyles(() => ({
    input: {
        display: 'none',
    },
    button: {
        marginTop: 10,
    },
}))(
    ({
         input: {value, name, onChange},
         label,
         meta: {touched, error},
         classes,
         onFieldChange,
         buttonLabel,
         accept = '*',
         required = false,
         rootClass = '',
     }) => (


        <FormControl classes={{root: rootClass}} required={required} component='fieldset' error={!!(touched && error)}>
            <FormLabel component='legend'>{label}</FormLabel>
            <input
                multiple="multiple"
                accept={accept}
                className={classes.input}
                id={name}
                type='file'
                onChange={e => {
                    e.preventDefault()
                    onChange(e.target.files[0])
                    onFieldChange && onFieldChange(e.target.files[0])
                }}
                onBlur={() => {
                }}
            />
            <label htmlFor={name}>
                <Button classes={{root: classes.button}} variant='outlined' component='span'>
                    {buttonLabel || 'ファイルを選択'}
                </Button>
            </label>
            <label>{value && value.name}</label>
            {touched && error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
)
export default renderImageFile;
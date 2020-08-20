import React from 'react';
import {Field, reduxForm} from 'redux-form';


import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

import {requestSign_up} from "../../../actions/auth";
import renderTextField from "../Fields/Text";


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    password: {
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    error: {
        textAlign: "center",
        margin: theme.spacing(1, 0, 0),
    },
    errorStr: {
        color: red[700]
    }
}));


function submitForm(formValues, dispatch) {
    dispatch(requestSign_up(formValues))
}


function Index({handleSubmit, onSubmit, submitting, error}) {

    const classes = useStyles();


    return (
        <form className={classes.form} onSubmit={handleSubmit(submitForm)}>
            <div className={classes.username}>
                <Field
                    name="username"
                    type="text"
                    component={renderTextField}
                    label="User Name"
                />
            </div>
            <div className={classes.password}>
                <Field
                    name="password1"
                    type="password"
                    component={renderTextField}
                    label="Password(半角英数字8文字以上)"
                    placeholder="Password"
                />
            </div>
            <div className={classes.password}>
                <Field
                    name="password2"
                    type="password"
                    component={renderTextField}
                    label="Password(確認用)"
                    placeholder="Password(確認用)"
                />
            </div>
            <div className={classes.error}>

                {error && <strong className={classes.errorStr}>{error}</strong>}

            </div>

            <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                disabled={submitting}
                className={classes.submit}
            >
                新規登録
            </Button>

        </form>
    )
}

function validate(formValues) {
    const errors = {}
    const requiredFields = [
        'username',
        'password1',
        'password2'
    ]

    requiredFields.forEach(field => {
        if (!formValues[field]) {
            errors[field] = "入力してください"
        }

    })

    if (errors.username || errors.password || errors.password2) {
        return errors
    }


    if (formValues["password1"] !== formValues["password2"]) {
        return {password2: "Passwordが一致しません"}

    }


}

export default reduxForm({
    form: "signup",
    validate: validate

})(Index);
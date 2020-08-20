import React from 'react';
import {Field, reduxForm} from 'redux-form';


import {Button} from '@material-ui/core';

import {requestLogin} from "../../../actions/auth";
import renderTextField from "../Fields/Text";

import styles from "./loginForm.module.scss";


function submitValidate(values) {
    const errors = {}
    const requiredFields = [
        'username',
        'password'
    ]

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = "入力してください"
        }
    })

    if (errors.username || errors.password) {
        return errors
    }
}


function submitForm(formValues, dispatch) {
    dispatch(requestLogin(formValues))
}

function Index(props) {
    const {handleSubmit, submitting, error} = props
    return (
        <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
            <div className={styles.username}>
                <Field
                    name="username"
                    type="text"
                    component={renderTextField}
                    label="User Name"
                />
            </div>
            <div className={styles.password}>
                <Field
                    name="password"
                    type="password"
                    component={renderTextField}
                    label="Password"
                    placeholder="Password"
                />
            </div>
            <div className={styles.error}>
                {error && <strong className={styles.errorStr}>{error}</strong>}
            </div>

            <Button
                type="submit"
                fullWidth
                color="primary"
                variant="outlined"
                disabled={submitting}
                className={styles.submit}
            >
                ログイン
            </Button>
        </form>
    )
}

export default reduxForm({
    form: "login",
    validate: submitValidate,
})(Index);
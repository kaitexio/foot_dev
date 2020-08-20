import React from "react";

import styles from "./askLogin.module.scss";

//component
import FormDialog from "../Dialog/FormDialog";
import LoginForm from "../Form/Login";
import SignUpForm from "../Form/SignUp";

const AskLogin = () => {
    return (
        <div className={styles.loginWrapper}>
            <FormDialog buttonLabel="ログイン" dialogTitle="ログイン" kind='a'>
                <LoginForm/>
            </FormDialog>
            <div className={styles.text}>または</div>
            <FormDialog buttonLabel="新規登録" dialogTitle="新規登録" kind='a'>
                <SignUpForm/>
            </FormDialog>
            <div className={styles.text}>でコメントができます</div>
        </div>

    );
}

export default AskLogin;
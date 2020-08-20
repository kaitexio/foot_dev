import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";

//style
import classes from "./settingform.module.scss";
//material ui
import {Avatar, Button} from '@material-ui/core';
//components
import {requestEdit} from "../../../actions/user";
import renderTextField from "../Fields/Text";
import renderImageFile from "../Fields/ImageUpload";


const SettingsForm = ({handleSubmit, submitting, me, error, initialValues}) => {

    const submitForm = (formValues, dispatch) => {
        dispatch(requestEdit(formValues))
    }
    return (
        <div className={classes.settingForm}>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className={classes.formField}>
                    <label>
                        アイコン
                    </label>
                    <div className={classes.cover}>
                        <Avatar className={classes.icon}/>
                        <Field className={classes.input} accept="*" id="img"
                               component={renderImageFile} name="img" type="file" buttonLabel="変更する"/>
                    </div>
                </div>
                <div className={classes.formField}>
                    <label>
                        ユーザーネーム
                    </label>
                    <div className={classes.cover}>
                        <Field
                            name="username"
                            type="text"
                            component={renderTextField}
                            defaultValue={initialValues.username}
                            label="User Name"
                        />
                    </div>
                </div>
                <div className={classes.settingButton}>
                    <Button className={classes.buttons} type="submit" variant="contained">
                        保存する
                    </Button>
                </div>
            </form>
        </div>

    );
}

const mapStateToProps = (state, props) => ({
    initialValues: state.Me
})

export default connect(mapStateToProps)(reduxForm({
    multipartForm: true,
    form: "setting",
    enableReinitialize: true
})(SettingsForm));

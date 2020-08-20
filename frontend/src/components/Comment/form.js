import React, {useState} from 'react';
import {Field, reduxForm} from 'redux-form';
import {useSelector} from "react-redux";

//material-ui
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";


import {REQUEST_NEWS_COMMENT_CREATE} from "../../actions/news";
import renderTextField from "../Form/Fields/Text";

const useStyles = makeStyles(theme => ({
    pick: {
        position: "relative"
    },
    commentArea: {
        display: "flex",
        width: "100%",
        alignItems: "center"
    },
    commentField: {
        marginLeft: "20px",
        width: "100%",
    },
    commentButton: {
        textAlign: "right",
        margin: "16px auto"
    }
}))


const CommentForm = (props) => {
    const classes = useStyles();
    const {error, handleSubmit, onSubmit, submitting} = props;
    const [disabled, setDisabled] = useState(true)
    const pathname = useSelector(state => state.router.location.pathname)
    const submitForm = (formValues, dispatch) => {

        dispatch(
            {
                type: REQUEST_NEWS_COMMENT_CREATE,
                payload: formValues,
                pathname: pathname
            }
        )
    }

    const handleDisabled = (text) => {
        setDisabled(!text.target.value.trim())
    }
    return (
        <div className={classes.pick}>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className={classes.commentArea}>
                    <Avatar/>
                    <div className={classes.commentField}>
                        <Field
                            name="text"
                            type="text"
                            component={renderTextField}
                            label="Comment"
                            placeholder="コメントを書く"
                            multiline={true}
                            onChange={handleDisabled}
                        />
                    </div>


                    {error && <strong className={classes.errorStr}>{error}</strong>}
                </div>
                <div className={classes.commentButton}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="inherit"
                        disabled={disabled}
                    >
                        コメント
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: "comment",
})(CommentForm);
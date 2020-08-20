import React from "react";
import classes from "./setting.module.scss";
import SettingsForm from "../../components/Form/Setting";
import {useSelector} from "react-redux";

const Setting = () => {

    const me = useSelector(state => state.Me)

    return (
        <div className={classes.pageContent}>
            <div className={classes.setting}>
                <div className={classes.settingContainer}>
                    <h1>アカウント設定</h1>
                    <SettingsForm/>
                </div>

            </div>
        </div>
    )
}
export default Setting;
import React from "react";
import styles from './styles.module.css'
import {Field} from "../Field";
import {fieldConfig} from "../../constants/fieldConfig";



export const AppContainer = () => {
    const field = fieldConfig
    return <div className={styles.appContainer}><Field field={field}/></div>
}

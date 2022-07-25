import React, {useState} from "react";
import styles from './styles.module.css'
import {Field} from "../Field";
import {fieldConfig} from "../../constants/fieldConfig";



export const AppContainer = () => {
    const [rightField, setRightField] = useState(fieldConfig)
    return <div className={styles.appContainer}><Field setField={setRightField} field={rightField}/></div>
}

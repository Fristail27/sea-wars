import React, {useState} from "react";
import styles from './styles.module.css'
import {Field} from "../Field";
import {fieldConfig, fieldConfig2} from "../../constants/fieldConfig";
import {FieldTypesEnum} from "../../constants/enums";


export const AppContainer = () => {
    const [leftField, setLeftField] = useState(fieldConfig)
    const [rightField, setRightField] = useState(fieldConfig2)
    return <div className={styles.appContainer}>
        <Field fieldType={FieldTypesEnum.self} setField={setLeftField} field={leftField}/>
        <Field fieldType={FieldTypesEnum.enemy} setField={setRightField} field={rightField}/>
    </div>
}

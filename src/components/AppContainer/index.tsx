import React, {useState} from "react";
import styles from './styles.module.css'
import {Field} from "../Field";
import {fieldConfig, fieldConfig2} from "../../constants/fieldConfig";
import {FieldTypesEnum} from "../../constants/enums";
import {createFieldWithRandomShips} from "../../helpers/createFieldWithRandomShips";


export const AppContainer = () => {
    const [leftField, setLeftField] = useState(createFieldWithRandomShips())
    const [rightField, setRightField] = useState(fieldConfig2)
    createFieldWithRandomShips()
    return <div className={styles.appContainer}>
        <Field fieldType={FieldTypesEnum.self} setField={setLeftField} field={leftField}/>
        <Field fieldType={FieldTypesEnum.enemy} setField={setRightField} field={rightField}/>
    </div>
}

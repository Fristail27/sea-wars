import React, {useEffect, useLayoutEffect, useState} from "react";
import styles from './styles.module.css'
import {Field} from "../Field";
import {fieldConfig, fieldConfig2} from "../../constants/fieldConfig";
import {FieldTypesEnum} from "../../constants/enums";
import {createFieldWithRandomShips} from "../../helpers/createFieldWithRandomShips";


export const AppContainer = () => {
    const [leftField, setLeftField] = useState(fieldConfig)
    const [rightField, setRightField] = useState(fieldConfig2)
    const [isStarted, setIsStarted] = useState<boolean>(false)


    useLayoutEffect(() => {
        setLeftField(createFieldWithRandomShips())
        setRightField(createFieldWithRandomShips())
    }, [])

    return <div className={styles.appContainer}>
        <div className={styles.fieldsContainer}>
            <Field fieldType={FieldTypesEnum.self} setField={setLeftField} field={leftField} isStarted={isStarted}/>
            <Field fieldType={FieldTypesEnum.enemy} setField={setRightField} field={rightField}/>
        </div>
        <div className={styles.btnContainer}>
            <button onClick={() => setIsStarted(true)}>Старт</button>
        </div>
    </div>
}

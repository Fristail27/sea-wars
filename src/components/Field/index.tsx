import React from "react";
import {FieldRow} from "./components/FieldRow";
import {HeaderRow} from "./components/HeaderRow";
import {LeftColumnValues} from "../../constants";
import {HeaderCell} from "./components/Cell";
import {CellValueEnum, FieldTypesEnum} from "../../constants/enums";
import styles from './styles.module.css'

type FieldTypes = {
    field: Array<Array<CellValueEnum>>,
    setField: React.Dispatch<React.SetStateAction<(0 | 1 | 2 | 3)[][]>>
    fieldType: FieldTypesEnum
}

export const Field: React.FC<FieldTypes> = ({field, setField, fieldType}) => {
    return <div className={styles.fieldContainer}>
        <div style={{marginTop: 30}}>
            {LeftColumnValues.map(val => <HeaderCell value={val} />)}
        </div>
        <div>
            <HeaderRow/>
            {field.map((row, i) => <FieldRow fieldType={fieldType} setField={setField} key={i} rowIndex={i} row={row}/>)}
        </div>
    </div>
}

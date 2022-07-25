import React from "react";
import {FieldRow} from "./components/FieldRow";
import {HeaderRow} from "./components/HeaderRow";
import {LeftColumnValues} from "../../constants";
import {HeaderCell} from "./components/Cell";
import {CellValueEnum} from "../../constants/enums";
import styles from './styles.module.css'

type FieldTypes = {
    field: Array<Array<CellValueEnum>>
}

export const Field: React.FC<FieldTypes> = ({field}) => {
    return <div className={styles.fieldContainer}>
        <div style={{marginTop: 30}}>
            {LeftColumnValues.map(val => <HeaderCell value={val} />)}
        </div>
        <div>
            <HeaderRow/>
            {field.map((row, i) => <FieldRow key={i} row={row}/>)}
        </div>
    </div>
}

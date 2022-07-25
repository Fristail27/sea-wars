import React from "react";
import {Cell} from "../Cell";
import {CellValueEnum} from "../../../../constants/enums";
import styles from './styles.module.css'

type FieldRowTypes = {
    row: Array<CellValueEnum>,
    rowIndex: number,
    setField: React.Dispatch<React.SetStateAction<(0 | 1 | 2 | 3)[][]>>
}

export const FieldRow: React.FC<FieldRowTypes> = ({row, rowIndex, setField}) => {
    return <div className={styles.fieldRow}>
        {row.map((cell, i) => <Cell setField={setField} rowIndex={rowIndex} columnIndex={i} key={i} value={cell}/>)}
    </div>
}

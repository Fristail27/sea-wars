import React from "react";
import {Cell} from "../Cell";
import {CellValueEnum} from "../../../../constants/enums";
import styles from './styles.module.css'

type FieldRowTypes = {
    row: Array<CellValueEnum>
}

export const FieldRow: React.FC<FieldRowTypes> = ({row}) => {
    return <div className={styles.fieldRow}>
        {row.map((cell, i) => <Cell key={i} value={cell}/>)}
    </div>
}

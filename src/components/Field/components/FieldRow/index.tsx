import React from "react";
import {EnemyCell, SelfCell} from "../Cell";
import {CellValueEnum, FieldTypesEnum} from "../../../../constants/enums";
import styles from './styles.module.css'

type FieldRowTypes = {
    row: Array<CellValueEnum>,
    rowIndex: number,
    setField: React.Dispatch<React.SetStateAction<CellValueEnum[][]>>
    fieldType: FieldTypesEnum
}

export const FieldRow: React.FC<FieldRowTypes> = ({row, rowIndex, setField, fieldType }) => {
    return <div className={styles.fieldRow}>
        {row.map((cell, i) => {
            if (fieldType === FieldTypesEnum.self) {
                return <SelfCell setField={setField} rowIndex={rowIndex} columnIndex={i} key={`${fieldType}-${i}-${rowIndex}`}
                             value={cell}/>
            } else {
                return <EnemyCell setField={setField} rowIndex={rowIndex} columnIndex={i} key={`${fieldType}-${i}-${rowIndex}`}
                             value={cell}/>
            }
        })}
    </div>
}

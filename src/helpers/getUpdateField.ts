import {CellValueEnum} from "../constants/enums";

export const getUpdateField = (field: CellValueEnum[][], columnInder: number, rowIndex: number, newValue: CellValueEnum) => {
    const copyField = field.map(row => row.map(cell => cell))
    copyField[rowIndex][columnInder] = newValue
    return copyField
}

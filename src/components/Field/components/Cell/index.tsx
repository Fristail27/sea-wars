import React from "react";
import clsx from "clsx";
import {CellValueEnum} from "../../../../constants/enums";
import styles from './styles.module.css'
import {getUpdateField} from "../../../../helpers/getUpdateField";

type HeaderCellTypes = {
    value?: string | number,
}

export const HeaderCell: React.FC<HeaderCellTypes> = ({value}) => {
    return <div className={styles.headerCell}>{value}</div>
}

type CellTypes = {
    value: CellValueEnum,
    columnIndex: number,
    rowIndex: number,
    setField: React.Dispatch<React.SetStateAction<(0 | 1 | 2 | 3)[][]>>

}

type EmptyCellTypes = {
    rowIndex: number,
    columnIndex: number,
    setField:  React.Dispatch<React.SetStateAction<(0 | 1 | 2 | 3)[][]>>
}

const EmptyCell: React.FC<EmptyCellTypes> = ({rowIndex, columnIndex, setField}) => {
    const onClick = () => {
        setField(prevField => getUpdateField(prevField, columnIndex, rowIndex, CellValueEnum.miss))
    }
    return <div onClick={onClick} className={clsx(styles.cell, styles.emptyCell)}/>
}

const MissCell = () => {
    return <div className={clsx(styles.cell, styles.missCell)}/>
}

const ShipCell = () => {
    return <div className={clsx(styles.cell, styles.shipCell)}/>
}

const KillCell = () => {
    return <div className={clsx(styles.cell, styles.killCell)}/>
}

export const Cell: React.FC<CellTypes> = ({value, rowIndex, columnIndex, setField}) => {
    switch (value) {
        case CellValueEnum.empty:
            return <EmptyCell rowIndex={rowIndex} setField={setField} columnIndex={columnIndex}/>
        case CellValueEnum.miss:
            return <MissCell/>
        case CellValueEnum.ship:
            return <ShipCell/>
        case CellValueEnum.kill:
            return <KillCell/>
        default:
            return <EmptyCell rowIndex={rowIndex} setField={setField} columnIndex={columnIndex}/>
    }
}

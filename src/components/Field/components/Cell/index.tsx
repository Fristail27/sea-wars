import React from "react";
import clsx from "clsx";
import {CellValueEnum} from "../../../../constants/enums";
import {getUpdateField} from "../../../../helpers/getUpdateField";
import {CloseIcon} from "../../../../assets/icons/CloseIcon";
import styles from './styles.module.css'

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
    setField: React.Dispatch<React.SetStateAction<CellValueEnum[][]>>
}

type EmptyCellTypes = {
    newValue: CellValueEnum,
    rowIndex: number,
    isNotClickable?: boolean,
    columnIndex: number,
    setField:  React.Dispatch<React.SetStateAction<CellValueEnum[][]>>
}

const EmptyCell: React.FC<EmptyCellTypes> = ({rowIndex, columnIndex, setField, newValue, isNotClickable}) => {
    const onClick = () => {
        setField(prevField => getUpdateField(prevField, columnIndex, rowIndex, newValue))
    }
    if (isNotClickable) return <div className={styles.cell}/>
    return <div onClick={onClick} className={clsx(styles.cell, styles.emptyCell)}/>
}

const MissCell = () => {
    return <div className={clsx(styles.cell, styles.missCell)}>
        <div className={styles.point}/>
    </div>
}

const ShipCell = () => {
    return <div className={clsx(styles.cell, styles.shipCell)}/>
}

const KillCell = () => {
    return <div className={clsx(styles.cell, styles.killCell)}><CloseIcon/></div>
}

export const Cell: React.FC<CellTypes> = ({value, rowIndex, columnIndex, setField }) => {
    switch (value) {
        case CellValueEnum.empty:
            return <EmptyCell newValue={CellValueEnum.miss} rowIndex={rowIndex} setField={setField} columnIndex={columnIndex} />
        case CellValueEnum.miss:
            return <MissCell/>
        case CellValueEnum.ship:
            return <ShipCell/>
        case CellValueEnum.kill:
            return <KillCell/>
        default:
            return <EmptyCell newValue={CellValueEnum.miss} rowIndex={rowIndex} setField={setField} columnIndex={columnIndex}/>
    }
}

export const EnemyCell: React.FC<CellTypes> = ({value, rowIndex, columnIndex, setField}) => {
    switch (value) {
        case CellValueEnum.empty:
            return <EmptyCell newValue={CellValueEnum.miss} rowIndex={rowIndex} setField={setField} columnIndex={columnIndex} />
        case CellValueEnum.miss:
            return <MissCell/>
        case CellValueEnum.ship:
            return <EmptyCell newValue={CellValueEnum.kill} rowIndex={rowIndex} setField={setField} columnIndex={columnIndex}/>
        case CellValueEnum.kill:
            return <KillCell/>
        default:
            return <EmptyCell newValue={CellValueEnum.miss} rowIndex={rowIndex} setField={setField} columnIndex={columnIndex}/>
    }
}

export const SelfCell: React.FC<CellTypes> = ({value, rowIndex, columnIndex, setField}) => {
    switch (value) {
        case CellValueEnum.empty:
            return <EmptyCell isNotClickable newValue={CellValueEnum.miss} rowIndex={rowIndex} setField={setField} columnIndex={columnIndex}/>
        case CellValueEnum.miss:
            return <MissCell/>
        case CellValueEnum.ship:
            return <ShipCell/>
        case CellValueEnum.kill:
            return <KillCell/>
        default:
            return <EmptyCell isNotClickable newValue={CellValueEnum.miss} rowIndex={rowIndex} setField={setField} columnIndex={columnIndex}/>
    }
}

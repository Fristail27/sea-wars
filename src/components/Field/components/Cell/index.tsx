import React from "react";
import clsx from "clsx";
import {CellValueEnum} from "../../../../constants/enums";
import styles from './styles.module.css'

type HeaderCellTypes = {
    value?: string | number,
}

export const HeaderCell: React.FC<HeaderCellTypes> = ({value}) => {
    return <div className={styles.headerCell}>{value}</div>
}

type CellTypes = {
    value: CellValueEnum
}

const EmptyCell = () => {
    return <div className={styles.cell}/>
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

export const Cell: React.FC<CellTypes> = ({value}) => {
    switch (value) {
        case CellValueEnum.empty:
            return <EmptyCell/>
        case CellValueEnum.miss:
            return <MissCell/>
        case CellValueEnum.ship:
            return <ShipCell/>
        case CellValueEnum.kill:
            return <KillCell/>
        default:
        return <EmptyCell/>
    }
}

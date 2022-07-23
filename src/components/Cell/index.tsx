import React from "react";
import styles from './styles.module.css'

type CellTypes = {
    value?: string | number,
    isHeaderCell?: boolean
}

export const Cell: React.FC<CellTypes> = ({value, isHeaderCell}) => {
    if (isHeaderCell) return <div className={styles.headerCell}>{value}</div>
    return <div className={styles.cell}>{value}</div>
}

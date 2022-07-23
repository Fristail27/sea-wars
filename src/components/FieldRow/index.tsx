import React from "react";
import {Cell} from "../Cell";
import styles from './styles.module.css'

export const FieldRow = () => {
    return <div className={styles.fieldRow}>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
        <Cell/>
    </div>
}

import React from "react";
import {HeaderCell} from "../Cell";
import {TopRowValues} from "../../../../constants";
import styles from './styles.module.css'


export const HeaderRow = () => {
    return <div className={styles.headerRowContainer}>
        {TopRowValues.map(val => <HeaderCell value={val}/>)}
    </div>
}

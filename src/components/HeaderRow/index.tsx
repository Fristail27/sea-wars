import React from "react";
import {Cell} from "../Cell";
import {TopRowValues} from "../../constants";
import styles from './styles.module.css'


export const HeaderRow = () => {
    return <div className={styles.headerRowContainer}>
        {TopRowValues.map(val => <Cell isHeaderCell value={val}/>)}
    </div>
}

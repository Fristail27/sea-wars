import React from "react";
import {FieldRow} from "../FieldRow";
import {HeaderRow} from "../HeaderRow";
import {LeftColumnValues} from "../../constants";
import {Cell} from "../Cell";
import styles from './styles.module.css'

export const Field = () => {
    return <div className={styles.fieldContainer}>
        <div style={{marginTop: 30}}>
            {LeftColumnValues.map(val => <Cell value={val} isHeaderCell />)}
        </div>
        <div>
            <HeaderRow/>
            <FieldRow/>
            <FieldRow/>
            <FieldRow/>
            <FieldRow/>
            <FieldRow/>
            <FieldRow/>
            <FieldRow/>
            <FieldRow/>
            <FieldRow/>
            <FieldRow/>
        </div>
    </div>
}

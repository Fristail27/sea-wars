import {CellValueEnum} from "../constants/enums";

// const checkKilledCell = (field:CellValueEnum[][], rowIndex: number, col: number) => {
//     if (field[])
// }

const checkCellNeibValues = (field: CellValueEnum[][], row: number, col: number, value:CellValueEnum) => {
    let result = []
    if (field[row][col+1] === value) {
        result.push([row, col + 1])
    }
    if (field[row][col-1] === value) {
        result.push([row, col - 1])
    }
    if (field[row+1] && (field[row+1][col] === value)) {
        result.push([row + 1, col])
    }
    if (field[row-1] && (field[row-1][col] === value)) {
        result.push([row - 1, col])
    }

    if (result.length > 0) return result

    return true
}

const checkCellNeibisNotValues = (field: CellValueEnum[][], row: number, col: number, value:CellValueEnum ) => {
    if (field[row][col+1] !== value
        && field[row][col-1] !== value
        && (field[row-1] ? field[row-1][col] !== value : true)
        && (field[row+1] ? field[row+1][col] !== value : true)
    ) {
        return true
    }
    return false
}

const setMissValues = (field: CellValueEnum[][], line: number[][]) => {
    line.forEach(([row, col]) => {
        if (col - 1 >= 0 && field[row][col-1] === CellValueEnum.empty) {
            field[row][col-1] = CellValueEnum.miss
        }
        if (col - 1 >= 0 && row - 1 >= 0 && field[row - 1][col-1] === CellValueEnum.empty) {
            field[row-1][col-1] = CellValueEnum.miss
        }
        if (col - 1 >= 0 && row + 1 <= 9 && field[row + 1][col-1] === CellValueEnum.empty) {
            field[row+1][col-1] = CellValueEnum.miss
        }
        if (row + 1 <= 9 && field[row + 1][col] === CellValueEnum.empty) {
            field[row+1][col] = CellValueEnum.miss
        }
        if (row - 1 >= 0 && field[row - 1][col] === CellValueEnum.empty) {
            field[row-1][col] = CellValueEnum.miss
        }
        if (col + 1 <= 9 && field[row][col+1] === CellValueEnum.empty) {
            field[row][col+1] = CellValueEnum.miss
        }
        if (col + 1 <= 9 && row - 1 >= 0 && field[row - 1][col+1] === CellValueEnum.empty) {
            field[row-1][col+1] = CellValueEnum.miss
        }
        if (col + 1 <= 9 && row + 1 <= 9 && field[row + 1][col+1] === CellValueEnum.empty) {
            field[row+1][col+1] = CellValueEnum.miss
        }
    })
}

const checkCell = (field: CellValueEnum[][], row: number, col: number) => {
    const coordinates = []
    const isNeibShipped = checkCellNeibValues(field, row, col, CellValueEnum.ship)
    if (isNeibShipped) return false

    const isNeibKilled = checkCellNeibValues(field, row, col, CellValueEnum.kill)

    const isNeibNotShip = checkCellNeibisNotValues(field, row, col, CellValueEnum.ship)

    const isNeibNotKill = checkCellNeibisNotValues(field, row, col, CellValueEnum.kill)

    console.log(isNeibNotShip)
    console.log(isNeibNotKill)
    if (isNeibNotShip && isNeibNotKill) {
        coordinates.push([row, col])
        return coordinates
    }

    // if (isNeibNotKill && isNeibNotShip) return false

}


export const getUpdateField = (field: CellValueEnum[][], columnIndex: number, rowIndex: number, newValue: CellValueEnum) => {
    const copyField = field.map(row => row.map(cell => cell))
    const coords = checkCell(copyField, rowIndex, columnIndex)
    if (coords && newValue === CellValueEnum.kill) {
        console.log(coords)
        setMissValues(copyField, coords)
    }
    console.log(copyField)
    copyField[rowIndex][columnIndex] = newValue
    return copyField
}

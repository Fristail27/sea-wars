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

    return false
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

const checkCell = (field: CellValueEnum[][], row: number, col: number, coordinates: number[][] = []) => {
    const isNeibShipped = checkCellNeibValues(field, row, col, CellValueEnum.ship)
    if (isNeibShipped) {
        return false
    }

    const neibKilled = checkCellNeibValues(field, row, col, CellValueEnum.kill)
    if (neibKilled) {
        if (coordinates.some(cor => JSON.stringify(cor) === JSON.stringify([row, col]))) {
            coordinates.push([row, col])
        }
        neibKilled.forEach(el => {
            if (!coordinates.some(cor => JSON.stringify(cor) === JSON.stringify(el))) {
                coordinates.push(el)
                const res = checkCell(field, el[0], el[1], coordinates)
            }
        })
        if (coordinates) {
            return coordinates
        }
    }
    const isNeibNotShip = checkCellNeibisNotValues(field, row, col, CellValueEnum.ship)

    const isNeibNotKill = checkCellNeibisNotValues(field, row, col, CellValueEnum.kill)

    if (isNeibNotShip && isNeibNotKill) {
        coordinates.push([row, col])
        return coordinates
    }
}


export const getUpdateField = (field: CellValueEnum[][], columnIndex: number, rowIndex: number, newValue: CellValueEnum) => {
    const copyField = field.map(row => row.map(cell => cell))
    copyField[rowIndex][columnIndex] = newValue
    const coords = checkCell(copyField, rowIndex, columnIndex)

    if (coords && newValue === CellValueEnum.kill) {
        console.log(111)
        setMissValues(copyField, coords)
    }
    console.log(copyField)
    return copyField
}

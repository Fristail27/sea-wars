import {CellValueEnum, ShipDirectionEnum} from "../constants/enums";

const createEmptyField = (): Array<Array<0 | 2>> => [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]

const getTwoRandomNums = ():number[] => {
    const randArrNum = Math.floor((Math.random() * 100)).toString().split('').map(num => +num)
    if (!Number.isInteger(randArrNum[1])) {
        randArrNum.unshift(0)
    }
    return randArrNum
}

const getRandomBool = ():boolean => Math.random() > 0.5

const setBlockedCells = (field: CellValueEnum[][], line: number[][], isVertical: boolean) => {
    if (isVertical) {
        line.forEach(([row, col]) => {
            if (row - 1 >= 0 && field[row - 1][col] === CellValueEnum.empty) {
                field[row - 1][col] = CellValueEnum.support
                if (col-1 > 0) {
                    field[row - 1][col - 1] = CellValueEnum.support
                }
                if (col+1 <= 9) {
                    field[row - 1][col + 1] = CellValueEnum.support
                }
            }
            if (col+1 <= 9) {
                field[row][col + 1] = CellValueEnum.support

            }
            if (col-1 >= 0) {
                field[row][col - 1] = CellValueEnum.support
            }
            if (row + 1 <=9 && field[row +1][col] === CellValueEnum.empty) {
                field[row + 1][col] = CellValueEnum.support
                if (col-1 > 0) {
                    field[row + 1][col - 1] = CellValueEnum.support
                }
                if (col+1 <= 9) {
                    field[row + 1][col + 1] = CellValueEnum.support
                }
            }
        })
    } else {
        line.forEach(([row, col]) => {
            if (col - 1 >= 0 && field[row][col-1] === CellValueEnum.empty) {
                field[row][col-1] = CellValueEnum.support
                if (row-1 > 0) {
                    field[row - 1][col - 1] = CellValueEnum.support
                }
                if (row+1 <= 9) {
                    field[row + 1][col - 1] = CellValueEnum.support
                }
            }
            if (row+1 <= 9) {
                field[row+1][col] = CellValueEnum.support
            }
            if (row-1 >= 0) {
                field[row-1][col] = CellValueEnum.support
            }
            if (col + 1 <=9 && field[row][col+1] === CellValueEnum.empty) {
                field[row][col + 1] = CellValueEnum.support
                if (row-1 > 0) {
                    field[row - 1][col + 1] = CellValueEnum.support
                }
                if (row+1 <= 9) {
                    field[row + 1][col + 1] = CellValueEnum.support
                }
            }
        })
    }
}

const validateCell = (field: CellValueEnum[][], row: number, col: number) => {
    if (field[row][col] === CellValueEnum.ship) {
        return false
    }
    if (field[row][col+1] === CellValueEnum.ship) {
        return false
    }
    if (field[row][col-1] === CellValueEnum.ship) {
        return false
    }
    if (field[row+1] && (field[row+1][col] === CellValueEnum.ship)) {
        return false
    }
    if (field[row+1] && (field[row+1][col+1] === CellValueEnum.ship)) {
        return false
    }
    if (field[row+1] && (field[row+1][col-1] === CellValueEnum.ship)) {
        return false
    }
    if (field[row-1] && (field[row-1][col] === CellValueEnum.ship)) {
        return false
    }
    if (field[row-1] && (field[row-1][col - 1] === CellValueEnum.ship)) {
        return false
    }
    if (field[row-1] && (field[row-1][col + 1] === CellValueEnum.ship)) {
        return false
    }

    return true
}

const validateShip = (field: CellValueEnum[][], coordinates: number[][]) => {
    let result = true
    for (let i = 0; i < coordinates.length; i++) {
        const isValidCell = validateCell(field, coordinates[i][0], coordinates[i][1])
        if (!isValidCell) {
            result = false
            break
        }
    }
    return result
}



const createCoordinate = (startPoint: number[], lengthShip:number, isVertical:boolean, isPlusCoordinate: boolean ) => {
    const [row, col] = startPoint;

    if (isVertical) {
        if (row < lengthShip - 1) {
            let res = []
            for (let i = 0; i< lengthShip; i++) {
                res.push([row+i, col])
            }
            return res
        } else if (row >= lengthShip - 1 && row <= (9 - lengthShip + 1)) {
            if (isPlusCoordinate) {
                let res = []
                for (let i = 0; i< lengthShip; i++) {
                    res.push([row+i, col])
                }
                return res
            } else {
                let res = []
                for (let i = 0; i< lengthShip; i++) {
                    res.push([row-i, col])
                }
                return res
            }
        } else {
            let res = []
            for (let i = 0; i< lengthShip; i++) {
                res.push([row-i, col])
            }
            return res
        }
    } else {
        if (col < lengthShip - 1) {
            let res = []
            for (let i = 0; i< lengthShip; i++) {
                res.push([row, col+i])
            }
            return res
        } else if (col >= lengthShip - 1 && col <= (9 - lengthShip + 1)) {
            if (isPlusCoordinate) {
                let res = []
                for (let i = 0; i< lengthShip; i++) {
                    res.push([row, col+i])
                }
                return res
            } else {
                let res = []
                for (let i = 0; i< lengthShip; i++) {
                    res.push([row, col-i])
                }
                return res
            }
        } else {
            let res = []
            for (let i = 0; i< lengthShip; i++) {
                res.push([row, col-i])
            }
            return res
        }
    }
}

const createAndCheckShip = (
    field: Array<Array<CellValueEnum>>,
    startPoints: number[],
    lengthShip:number,
    isVertical:boolean,
    isPlusCoordinate: boolean
): number[][] | false => {
    const coordinate = createCoordinate(startPoints, lengthShip, isVertical, isPlusCoordinate)
    const isValid = validateShip(field, coordinate)
    return isValid ? coordinate : false
}

const setShip = (field: CellValueEnum[][], coordinates: number[][]) => {
    for (let i = 0; i < coordinates.length; i++) {
        field[coordinates[i][0]][coordinates[i][1]] = CellValueEnum.ship
    }
}

const addRandomShipInField = (field: Array<Array<CellValueEnum>>, lengthShip: number, counter: {counter: number}) => {
    counter.counter += 1
    const startPoints = getTwoRandomNums()
    const isVertical = getRandomBool()
    const isPlusCoordinate = getRandomBool()
    const coordinates = createAndCheckShip(field, startPoints, lengthShip, isVertical, isPlusCoordinate)
    if (coordinates) {
        setShip(field, coordinates)
        setBlockedCells(field, coordinates, isVertical)
    } else {
        addRandomShipInField(field, lengthShip, counter)
    }
}

export const createFieldWithRandomShips = (): Array<Array<CellValueEnum>> => {
    const emptyField = createEmptyField()

    let counter = {counter: 0}

    addRandomShipInField(emptyField, 4, counter)
    addRandomShipInField(emptyField, 3, counter)
    addRandomShipInField(emptyField, 3, counter)
    addRandomShipInField(emptyField, 2, counter)
    addRandomShipInField(emptyField, 2, counter)
    addRandomShipInField(emptyField, 2, counter)
    addRandomShipInField(emptyField, 1, counter)
    addRandomShipInField(emptyField, 1, counter)
    addRandomShipInField(emptyField, 1, counter)
    addRandomShipInField(emptyField, 1, counter)

    console.log(counter)
    return emptyField
}

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

const checkCanSetShip = (field: Array<Array<CellValueEnum>>, lengthShip:number, direction: ShipDirectionEnum, isPlusDirection: boolean, startPoint: number[]) => {
    const [row, col] = startPoint;

    let result = true

    if (ShipDirectionEnum.vert) {
        if (row < lengthShip - 1) {
            for (let i = 0; i< lengthShip; i++) {
                if (field[row + i][col] === CellValueEnum.ship || field[row + i][col] === CellValueEnum.support) {
                    return false
                }
            }
        } else if (row >= lengthShip - 1 && row <= (9 - lengthShip + 1)) {
            if (isPlusDirection) {
                for (let i = 0; i< lengthShip; i++) {
                    if (field[row + i][col] === CellValueEnum.ship || field[row + i][col] === CellValueEnum.support) {
                        return false
                    }
                }
            } else {
                for (let i = 0; i< lengthShip; i++) {
                    if (field[row - i][col] === CellValueEnum.ship || field[row - i][col] === CellValueEnum.support) {
                        return false
                    }
                }
            }
        } else {
            for (let i = 0; i< lengthShip; i++) {
                if (field[row - i][col] === CellValueEnum.ship || field[row - i][col] === CellValueEnum.support) {
                    return false
                }
            }
        }
    } else {
        if (col < lengthShip - 1) {
            for (let i = 0; i< lengthShip; i++) {
                if (field[row][col+i] === CellValueEnum.ship || field[row][col+i] === CellValueEnum.support) {
                    return false
                }
            }
        } else if (col >= lengthShip - 1 && col <= (9 - lengthShip + 1)) {
            if (isPlusDirection) {
                for (let i = 0; i< lengthShip; i++) {
                    if (field[row][col + i] === CellValueEnum.ship || field[row][col + i] === CellValueEnum.support) {
                        return false
                    }
                }
            } else {
                for (let i = 0; i< lengthShip; i++) {
                    if (field[row][col - i] === CellValueEnum.ship || field[row][col - i] === CellValueEnum.support) {
                        return false
                    }
                }
            }
        } else {
            for (let i = 0; i< lengthShip; i++) {
                if (field[row][col - i] === CellValueEnum.ship || field[row][col - i] === CellValueEnum.support) {
                    return false
                }
            }
        }
    }
    return true
}

const addShipInField = (field: Array<Array<0|2>>, lengthShip: number, direction: ShipDirectionEnum) => {
    const startPoints = getTwoRandomNums()
    // const isValidPosition = checkCanSetShip(field, lengthShip, direction, startPoints)
}

const add4CellShip = (field: Array<Array<0|2|4>>) => {
    const [row, col] = getTwoRandomNums()

    const isVertical = getRandomBool()

    if (isVertical) {
        if (row < 3) {
            field[row][col] = CellValueEnum.ship
            field[row+1][col] = CellValueEnum.ship
            field[row+2][col] = CellValueEnum.ship
            field[row+3][col] = CellValueEnum.ship
            setBlockedCells(field,[[row, col], [row+1, col], [row+2, col], [row+3, col]], isVertical)
        } else if (row >= 4 && row <= 6) {
            const isTopDirection = getRandomBool()
            if (isTopDirection) {
                field[row][col] = CellValueEnum.ship
                field[row-1][col] = CellValueEnum.ship
                field[row-2][col] = CellValueEnum.ship
                field[row-3][col] = CellValueEnum.ship
                setBlockedCells(field,[[row, col], [row-1, col], [row-2, col], [row-3, col]], isVertical)
            } else {
                field[row][col] = CellValueEnum.ship
                field[row+1][col] = CellValueEnum.ship
                field[row+2][col] = CellValueEnum.ship
                field[row+3][col] = CellValueEnum.ship
                setBlockedCells(field,[[row, col], [row+1, col], [row+2, col], [row+3, col]], isVertical)
            }
        } else {
            field[row][col] = CellValueEnum.ship
            field[row-1][col] = CellValueEnum.ship
            field[row-2][col] = CellValueEnum.ship
            field[row-3][col] = CellValueEnum.ship
            setBlockedCells(field,[[row, col], [row-1, col], [row-2, col], [row-3, col]], isVertical)
        }
    } else {
        if (col < 3) {
            field[row][col] = CellValueEnum.ship
            field[row][col+1] = CellValueEnum.ship
            field[row][col+2] = CellValueEnum.ship
            field[row][col+3] = CellValueEnum.ship
            setBlockedCells(field,[[row, col], [row, col+1], [row, col+2], [row, col+3]], isVertical)
        } else if (col > 3 && col < 7) {
            const isRightDirection = getRandomBool()
            if (isRightDirection) {
                field[row][col] = CellValueEnum.ship
                field[row][col+1] = CellValueEnum.ship
                field[row][col+2] = CellValueEnum.ship
                field[row][col+3] = CellValueEnum.ship
                setBlockedCells(field,[[row, col], [row, col+1], [row, col+2], [row, col+3]], isVertical)
            } else {
                field[row][col] = CellValueEnum.ship
                field[row][col-1] = CellValueEnum.ship
                field[row][col-2] = CellValueEnum.ship
                field[row][col-3] = CellValueEnum.ship
                setBlockedCells(field,[[row, col], [row, col-1], [row, col-2], [row, col-3]], isVertical)
            }
        } else {
            field[row][col] = CellValueEnum.ship
            field[row][col-1] = CellValueEnum.ship
            field[row][col-2] = CellValueEnum.ship
            field[row][col-3] = CellValueEnum.ship
            setBlockedCells(field,[[row, col], [row, col-1], [row, col-2], [row, col-3]], isVertical)
        }
    }
}

const add3CellShip = (field: Array<Array<0|2|4>>) => {
    const [row, col] = getTwoRandomNums()

    const isVertical = getRandomBool()

    if (isVertical) {
        if (row < 3) {
            if (checkCanSetShip(
                field,
                3,
                ShipDirectionEnum.vert,
                true,
                [row, col]
            )) {
                field[row][col] = CellValueEnum.ship
                field[row+1][col] = CellValueEnum.ship
                field[row+2][col] = CellValueEnum.ship
                setBlockedCells(field,[[row, col], [row+1, col], [row+2, col]], isVertical)
            } else {
                add3CellShip(field)
            }

        } else if (row >= 3 && row <= 7) {
            const isTopDirection = getRandomBool()
            if (isTopDirection) {
                if (checkCanSetShip(field, 3, ShipDirectionEnum.vert, true, [row, col])) {
                    field[row][col] = CellValueEnum.ship
                    field[row - 1][col] = CellValueEnum.ship
                    field[row - 2][col] = CellValueEnum.ship
                    setBlockedCells(field, [[row, col], [row - 1, col], [row - 2, col]], isVertical)
                } else {
                    add3CellShip(field)
                }
            } else {
                if (checkCanSetShip(field, 3, ShipDirectionEnum.vert, false, [row, col])) {
                    field[row][col] = CellValueEnum.ship
                    field[row + 1][col] = CellValueEnum.ship
                    field[row + 2][col] = CellValueEnum.ship
                    setBlockedCells(field, [[row, col], [row + 1, col], [row + 2, col]], isVertical)
                } else {
                    add3CellShip(field)
                }
            }
        } else {
            if (checkCanSetShip(field, 3, ShipDirectionEnum.vert, false, [row, col])) {
                field[row][col] = CellValueEnum.ship
                field[row - 1][col] = CellValueEnum.ship
                field[row - 2][col] = CellValueEnum.ship
                setBlockedCells(field, [[row, col], [row - 1, col], [row - 2, col]], isVertical)
            } else {
                add3CellShip(field)
            }
        }
    } else {
        if (col < 3) {
            if (checkCanSetShip(field, 3, ShipDirectionEnum.hor, true, [row, col])) {
                field[row][col] = CellValueEnum.ship
                field[row][col + 1] = CellValueEnum.ship
                field[row][col + 2] = CellValueEnum.ship
                setBlockedCells(field, [[row, col], [row, col + 1], [row, col + 2]], isVertical)
            } else {
                add3CellShip(field)
            }
        } else if (col >= 3 && col <= 7) {
            const isTopDirection = getRandomBool()
            if (isTopDirection) {
                if (checkCanSetShip(field, 3, ShipDirectionEnum.hor, true, [row, col])) {
                    field[row][col] = CellValueEnum.ship
                    field[row][col + 1] = CellValueEnum.ship
                    field[row][col + 2] = CellValueEnum.ship
                    setBlockedCells(field, [[row, col], [row, col + 1], [row, col + 2]], isVertical)
                } else {
                    add3CellShip(field)
                }
            } else {
                if (checkCanSetShip(field, 3, ShipDirectionEnum.hor, false, [row, col])) {
                    field[row][col] = CellValueEnum.ship
                    field[row][col - 1] = CellValueEnum.ship
                    field[row][col - 2] = CellValueEnum.ship
                    setBlockedCells(field, [[row, col], [row, col - 1], [row, col - 2]], isVertical)
                } else {
                    add3CellShip(field)
                }
            }
        } else {
            if (checkCanSetShip(field, 3, ShipDirectionEnum.hor, false, [row, col])) {
                field[row][col] = CellValueEnum.ship
                field[row][col - 1] = CellValueEnum.ship
                field[row][col - 2] = CellValueEnum.ship
                setBlockedCells(field, [[row, col], [row, col - 1], [row, col - 2]], isVertical)
            } else {
                add3CellShip(field)
            }
        }
    }
}



export const createFieldWithRandomShips = (): Array<Array<CellValueEnum>> => {
    const emptyField = createEmptyField()

    add4CellShip(emptyField)

    add3CellShip(emptyField)
    add3CellShip(emptyField)

    //
    // const randomStart = getTwoRandomNums()
    // emptyField[randomStart[0]][randomStart[1]] = 2
    //
    // const isVertical = getRandomBool()
    //
    // if (isVertical) {
    //
    // }

    // console.log(randomStart)
    console.log(emptyField)
    return emptyField
}

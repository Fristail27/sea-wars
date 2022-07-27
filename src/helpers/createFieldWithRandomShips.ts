import {ShipDirectionEnum} from "../constants/enums";

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

const checkCanSetShip = (field: Array<Array<0|2>>, lengthShip:number, direction: ShipDirectionEnum, startPoint: number[]) => {

}

const addShipInField = (field: Array<Array<0|2>>, lengthShip: number, direction: ShipDirectionEnum) => {
    const startPoints = getTwoRandomNums()
    const isValidPosition = checkCanSetShip(field, lengthShip, direction, startPoints)
}

const set4Ship = (field: Array<Array<0|2>>) => {

}

export const createFieldWithRandomShips = () => {
    const emptyField = createEmptyField()
    const randomStart = getTwoRandomNums()
    emptyField[randomStart[0]][randomStart[1]] = 2

    const isVertical = getRandomBool()

    if (isVertical) {

    }

    console.log(randomStart)
    console.log(emptyField)

}

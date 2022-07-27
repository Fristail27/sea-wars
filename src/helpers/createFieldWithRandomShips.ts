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
        randArrNum[1] = Math.floor(Math.random() * 10)
    }
    return randArrNum
}

const getRandomBool = ():boolean => Math.random() > 0.5

const checkCanSetShip = (field: Array<Array<0|2>>, length: 1|2|3|4) => {

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

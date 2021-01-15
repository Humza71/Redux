import * as actiontypes from './actionTypes'

export const increment = () => {
    return {
        type: actiontypes.INCREMENT
    }
}
export const decrement = () => {
    return {
        type: actiontypes.DECREMENT
    }
}
export const add = (value) => {
    return {
        type: actiontypes.ADD,
        val: value
    }
}
export const subtract = (value) => {
    return {
        type: actiontypes.SUBTRACT,
        val: value
    }
}
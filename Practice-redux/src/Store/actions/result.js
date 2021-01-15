import * as actiontypes from './actionTypes'



export const save_result = (res) => {
    return {
        type: actiontypes.STORE_RESULT,
        result: res
    }
}
export const store_result = (res) => {
    return (dispatch, getState) => { // Using Action Creators and getState(). dispatch through redux-thunk
        // const oldState = getState().ctr.counter
        // console.log(oldState)
        setTimeout(() => {// Asunchronous Code
            dispatch(save_result(res))
        }, 2000);
    }
}
export const delete_result = (ID) => {
    return {
        type: actiontypes.DELETE_RESULT,
        ElementID: ID
    }
}

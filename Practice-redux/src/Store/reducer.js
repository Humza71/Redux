import *  as actionTypes from './actions.js'

const initialState = {
    counter:0,
    results:[]
}

const reducer = (state = initialState,action) =>{

    switch(action.type){
        case actionTypes.INCREMENT :
            return{
                ...state,
                counter: state.counter + 1
                
            }
        case actionTypes.DECREMENT:
            return{
                ...state,
                counter: state.counter - 1
                    
            }    
        case actionTypes.ADD:
            return{
                ...state,
                counter: state.counter + action.val
                    
            }    
        case actionTypes.SUBTRACT:
            return{
                ...state,
                counter: state.counter - action.val
            }    
    
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }    
        case actionTypes.DELETE_RESULT:
            // const newArray = [...state.results];
            // newArray.spice = (id,1);
            const newArray = state.results.filter(result=> result.id !== action.ElementID)
            return{
                ...state,
                results: newArray
            }    
    
        default:
            return state;
            
    }
}

export default reducer;
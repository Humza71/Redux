import *  as actionTypes from '../actions/actionTypes.js'

const initialState = {
    results:[]
}

const reducer = (state = initialState,action) =>{

    switch(action.type){   
         case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
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
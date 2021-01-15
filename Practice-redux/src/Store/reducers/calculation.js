const initialState ={
    count:123
}


const calculations = (state = initialState,action)=>{

    switch(action.type){
        case 'Increment':
            console.log(action.val)
            return{
                 ...state,
                 count:action.val+1   
            }
        case  'Decrement':
            console.log(action.val)
            return{
                ...state,
                count:action.val-1   
           }
        default:
            return state

    }

}

export default calculations

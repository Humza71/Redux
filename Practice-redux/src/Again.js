import React from 'react'
import { connect } from 'react-redux'
const Again = (props) => {
    return (
        <div>
           
             <button onClick={()=>props.OnDecrementCounter(props.count)}> Decrement: {props.count}  </button>
        </div>
    )
}

const mapStatetoProps = state =>{
    return{
        count:state.count
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        OnDecrementCounter: (value) => dispatch({
            type: "Decrement",
            val: value
        })
    }
}


export default connect(mapStatetoProps,mapDispatchToProps)(Again)



import React from 'react'
import { connect } from 'react-redux'

function Check(props) {
    return (
        <div>
            <button onClick={()=>props.OnIncrementCounter(props.count)}> Increment: {props.count}  </button>
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
        OnIncrementCounter: (value) => dispatch({
            type: "Increment",
            val: value
        })
    }
}


export default connect(mapStatetoProps,mapDispatchToProps)(Check)
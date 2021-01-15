import React, { Component } from 'react';
import * as actoinCreators from '../../Store/actions/index'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import  {connect}  from  'react-redux'

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                    this.setState( ( prevState ) => { return { counter: prevState.counter} } )
                    break;          
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.OnIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.OnDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.OnAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.OnSubtractCounter}  />
                <hr />
                <button onClick={ ()=> this.props.OnStoreResult(this.props.ctr)}> Store Result</button>
                <ul>
                    {this.props.StoredResults.map(strResult=> (
                            <li  key= {strResult.id} onClick={()=>this.props.OnDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    console.log('MapStateToProps',state.rslt.results)
    console.log('mapStateToProps',state.ctr.counter)
    return {
        ctr: state.ctr.counter,
        StoredResults: state.rslt.results
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        OnIncrementCounter: () => dispatch(actoinCreators.increment()),
        OnDecrementCounter: () => dispatch(actoinCreators.decrement()),
        OnAddCounter: () => dispatch(actoinCreators.add(10)),
        OnSubtractCounter: () => dispatch(actoinCreators.subtract(10)),
        OnStoreResult: (result) => dispatch(actoinCreators.store_result(result)),
        OnDeleteResult: (id) => dispatch(actoinCreators.delete_result(id))
    }                    
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
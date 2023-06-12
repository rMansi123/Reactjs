import React from 'react';
import { useReducer } from 'react';

const InitialData={count:0}

function Reducer(state,action)
{
    switch(action.type)
    {
        case 'INCREMENT':
            return {count:state.count+1}
        case 'DECREMENT':
            return {count:state.count-1}
        case 'RESET':
            return {count:state.count=0};
        default : return state;
    }
}

function UseReducer(props) {
    const[state,dispatch] = useReducer(Reducer,InitialData)
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col mt-5">
                    <button className='btn btn-primary' onClick={()=>dispatch({type:'DECREMENT'})
                    }>Decrement</ button>
                    <h1>{state.count}</h1>
                    <button className='btn btn-primary' onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
                    <button className='btn btn-danger' onClick={()=>dispatch({type:'RESET'})}>click</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default UseReducer;
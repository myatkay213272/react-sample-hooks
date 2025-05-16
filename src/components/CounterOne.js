import React, { useReducer } from 'react'

const initialState = {
    count :0,
    step :1
}



const reducer = (state,action) =>{
    console.log(state,action)

    switch(action.type){
        case 'dec' :
            return {
                ...state,
                count : state.count - state.step
            }
        case "inc":
            return{
                ...state ,
                count : state.count + state.step
            }
        
        case "setcount" :
            return {
                ...state,
                count : Number(action.payload)
            }
        case "setstep":
            return {
                ...state,
                step : Number(action.payload)
            }
    }
}

const CounterOne = () => {

    const [state,dispatch] =useReducer(reducer,initialState)
    const {count ,step } = state

    const dec = ()=>{
        dispatch({type:'dec'})
    }


    const inc  = ()=>{
        dispatch({type: 'inc'})
    }

    const defineCount = (e)=>{
        dispatch({type:'setcount' , payload : e.target.value})
    }

    const defineStep = (e)=>{
        dispatch({type:'setstep',payload: e.target.value})
    }

  return (
    <div>

        <input 
            type="range" 
            min="0" max="10" 
            value={state.step}
            onChange={defineStep}
        /> {state.step}

        <br/>

        <button onClick={dec}> - </button>

        <input 
            type="text" 
            value={state.count}
            onChange={defineCount}
        />

        <button onClick={inc}> + </button>

    </div>
  )
}

export default CounterOne
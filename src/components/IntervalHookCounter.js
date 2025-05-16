import React, { useEffect, useState } from 'react'

const IntervalHookCounter = ({prop}) => {

    const [count,setCount] = useState(0)

   const tick = ()=>{
    setCount(preCount => preCount + 1)
   }


   

   useEffect(()=>{

    function doSomething (){
    console.log(prop)
   }

   doSomething()


    const interval = setInterval(tick,1000)

    return ()=>{
        clearInterval(interval)
    }
   },[prop])

  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalHookCounter
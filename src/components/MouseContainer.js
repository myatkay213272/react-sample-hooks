import React, { useState } from 'react'
import HookCounter from './HookCounter'

const MouseContainer = () => {

    const [display,setDisplay] = useState(true)

  return (
    <div>

        <button onClick={()=>setDisplay(!display)}>Toggle dispaly</button>

    {display &&
    
    <HookCounter/>
    }

    </div>
  )
}

export default MouseContainer
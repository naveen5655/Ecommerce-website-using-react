import React from 'react'
 function R_event()
{
    
    function register()
    {
        alert("Register successfully")
    }
    return(
     <div>
    <button onClick={register}>register</button>
    </div>
    )
}
export default R_event
import React from 'react'
import Taj from './images/Tajmahal.jfif'
class App extends React.Component
{
  render()
  {
    return(
      <div style={{backgroundColor:'yellow',color:'black'}}>
        <h1>TajMahal</h1>
        <img src={Taj} alt='no img'></img>
      </div>
    )
  }
}
 export default App

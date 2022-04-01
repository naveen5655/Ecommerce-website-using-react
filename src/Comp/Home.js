import React, { Component } from 'react'
import photo from '../images/diwali.jpg'
import SearchBar from './Searchbar'
class Home extends React.Component
{
    render()
    {

        return (
            <div style={{backgroundColor:"yellow"}} >
            <h1 style={{color:"red"}}>WELCOME TO IMPORT && EXPORT ALL IN ONE SERVICE</h1>
            
            <img src={photo} set height={500} width={1500}/>
        </div>
       )
    }

}
export default Home
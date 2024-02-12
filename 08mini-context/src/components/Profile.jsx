import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    return (
        <div style={{backgroundColor:'lavender', margin: '10px'}}>

        {
            (!user.username) ? 
            <div style={{color:'red',fontSize:'2rem'}}>please login</div> : 
            <div style={{color:'green',fontSize:'2rem'}}>Welcome {user.username.toUpperCase()}!</div>
        }
        
        </div>
    )
}

export default Profile
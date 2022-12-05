import React , { useState  , useEffect} from 'react'
import axios from 'axios'
function Users() {
  
  const [userss, setUsers] = useState([])

  const getAllUsers = async () => {
    await  axios.get( 'http://localhost:3001/users').then( (response) => {
       
        setUsers(response.data)
     }).catch( err => {
            console.log(err)
     } )
  }  


  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <>
      
        {
            userss.map((user, index) => {
                return (
                        <div  key={index} >
                            <h1 style={{ color:'red' }}> { user.name } </h1>
                            <h1 style={{ color : 'green' }} >{user.email}</h1>
                         </div>

                ) })
        }

    </>
  )
}

export default Users

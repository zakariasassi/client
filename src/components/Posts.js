import React  , {useState , useEffect } from 'react'
import axios from 'axios'
function Posts() {

    const [posts, setPosts] = useState([])

    const getAllPosts = async () => {
      await  axios.get( 'http://localhost:3001/posts').then( (response) => {
         
        setPosts(response.data)
       }).catch( err => {
              console.log(err)
       } )
    }  
  
  
    useEffect(() => {
        getAllPosts()
    }, [])
  





  return (
    <>
   {
            posts.map((post, index) => {
                return (
                        <div  key={index} >
                            <h1 style={{ color:'red' , textAlign:'center' }}> { post.title } </h1>
                            <h1 style={{ color : 'green' , textAlign:'center'  }} >{post.body}</h1>
                         </div>

                ) })
        }

      
    </>
  )
}

export default Posts

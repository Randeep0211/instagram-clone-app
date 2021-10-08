import React, { useState , useEffect } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import  instagram from './assets/instagram.jpg'
import './App.css'
import Post from './components/post'
import  {db} from './Firebase'
import Modal from './components/modal'
import Image from './components/ImageUpload'





function App(props){

    const [posts,setPosts]=useState([])
    const[username,setUsername] = useState(false)
    const[email,setEmail] = useState(false)
    const[password,setPassword] = useState(false)
    const [user,setUser]= useState(null)


    const SignUp= (event)=>{

    }
    

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc => ({
                id : doc.id,
                post:doc.data()})))
        })
    },[])

    
    return (
        <Fragment>
            <div className='App'>
                <h1>Welcome To Instagram-Clone App</h1>

                {/* /* {user?.displayName ? ( */ }

                {/* // ):(
                    //     <h3>Sorry you need to login</h3>
                // )} */}


        <Modal>
          <div>
              <h2>I am a modal</h2>
          </div>

          <form>
              <input type='text' placeholder='username' value={username} onChange={(evt)=>setUsername(evt.target.value)}></input>

              <input type='text' placeholder='email' value={email} onChange={(evt)=>setEmail(evt.target.value)}></input>

              <input type='text' placeholder='password' value={password} onChange={(evt)=>setPassword(evt.target.value)}></input>

              <button onClick={SignUp}>log in</button>

             
            </form>
      </Modal>

                    <Image username={user} />
                <img className='app__image' src={instagram} alt='Connecting people' />

            
                    
               

                {posts.map(({id,post}) => (
                    <Post key={id} username={post.username} caption={post.caption} image={post.image}></Post>
                )

                )}

               
                {/* {posts} */}
                {/* {posts} */} 


            </div>
        </Fragment>
    )


}

export default App
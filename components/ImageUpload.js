import React, { useState } from 'react'
import {storage,db} from '../Firebase'


function Image({username}){

    const [image , setImage] = useState(null)
    const [progress , setProgress] = useState(0)
    const [caption,setCaption] = useState('')

    const handleChange = (evt)=>{
        if(evt.target.files[0]){
            setImage(evt.target.files[0])
        }
    }

    const handleUpload = ()=>{
        const uploadTask= storage.ref(`images/${image.name}`).put(image)

        uploadTask.on(
            'state_changed',
            (snapshot)=>  {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes)*100
                )
                setProgress(progress)
            },

            ()=>{
                storage.ref('images').child(image.name).getDownLoadUrl().then(url =>{
                    db.collection.posts.add({
                        caption: caption,
                        imageUrl: url,
                        username: username


                    })

                    setProgress(0)
                    setCaption(0)
                    setImage(null)
                })
            }

            )
    }
    return (
        <div>
            <progress  value={progress} max='100'/>
            <form>
                <input type='text' placeholder='Enter a caption' onChange={event => setCaption(event.target.value)} value={caption}/>
                <input type='file'  onChange={handleChange}/>
                <button onClick={handleUpload}>upload</button>

            </form>
        </div>
    )
}

export default Image
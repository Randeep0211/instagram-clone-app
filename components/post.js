import React from "react";
import dp from '../assets/dp.jpg'
import './post.css'
import { Avatar } from "@material-ui/core";


const Post = ({username,caption,image})=>{

    return (
        <div classname='post'>

            <div classname='dp'>
            <Avatar 

            className='post__avatar'

                src={dp}
                alt=''

            />
            <h3>{username}</h3>

            </div>

            <img className='post__image' src={image} alt=''></img>

            <h3 className='caption'><strong>{username}</strong>: {caption}</h3>

        </div>
    )

}

export default Post
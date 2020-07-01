import React from 'react'
import './Posts.css'
import Post from './Post/Post'


function Posts() {
    return (
        <div className='Posts'>
            <Post imageUrl='logo192.png' imageAlt='alt' author='Me'>Ala bala </Post>
        </div>
    )
}

export default Posts

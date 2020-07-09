import React from 'react';
import './CreatePost.css';
import Posts from '../Posts/Posts'

export default function CreatePosts() {
    return (
        <div className='CreatePost'>
            <form>
                <textarea></textarea>
                <button>Post</button>
                <Posts limit={3}/>
            </form>
        </div>
    )
}

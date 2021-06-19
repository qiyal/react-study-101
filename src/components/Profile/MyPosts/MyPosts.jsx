import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="post 1" />
                <Post message="post 2" />
                <Post message="post 3" />
                <Post message="post 4" />
            </div>
        </div>
    );
}

export default MyPosts

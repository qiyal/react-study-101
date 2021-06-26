import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="post 1" likesCount="0"  />
                <Post message="post 2" likesCount="23" />
                <Post message="post 3" likesCount="45" />
                <Post message="post 4" likesCount="89" />
            </div>
        </div>
    );
}

export default MyPosts

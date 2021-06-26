import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {
            id: 1,
            message: 'post 1',
            likesCount: 0
        },
        {
            id: 2,
            message: 'post 2',
            likesCount: 23
        },
        {
            id: 3,
            message: 'post 3',
            likesCount: 45
        },
        {
            id: 4,
            message: 'post 4',
            likesCount: 89
        }
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts

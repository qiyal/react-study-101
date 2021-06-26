import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}  />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount} />
                <Post message={postsData[3].message} likesCount={postsData[3].likesCount} />
            </div>
        </div>
    );
}

export default MyPosts

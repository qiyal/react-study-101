import React from 'react'
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/df/ec/54/dfec54c49f154e9f94af718d847e2e56.jpg"/>
            post 1
            <span>like</span>
            <div>
                <span>dislike</span>
            </div>
        </div>
    );
}

export default Post;

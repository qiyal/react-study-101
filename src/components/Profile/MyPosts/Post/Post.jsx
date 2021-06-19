import React from 'react'
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/df/ec/54/dfec54c49f154e9f94af718d847e2e56.jpg"/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;

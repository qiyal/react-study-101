import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Abay" id="1" />
                <DialogItem name="Dulat" id="2" />
                <DialogItem name="Nurbolat" id="3" />
            </div>

            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="Hello" />
                <Message message="mmm" />
            </div>
        </div>
    );
}

export default Dialogs;

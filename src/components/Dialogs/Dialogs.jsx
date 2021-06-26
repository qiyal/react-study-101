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

    let dialogs = [
        {
            id: 1,
            name: 'Abay'
        },
        {
            id: 2,
            name: 'Dulat'
        },
        {
            id: 3,
            name: 'Nurbolat'
        }
    ]

    let messages = [
        {
            id: 1,
            message: 'Hi'
        },
        {
            id: 2,
            message: 'Hello'
        },
        {
            id: 3,
            message: 'mmm'
        }
    ]

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} />)

    let messagesElements = messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;

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

    let dialogsData = [
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

    let messagesData = [
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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    );
}

export default Dialogs;

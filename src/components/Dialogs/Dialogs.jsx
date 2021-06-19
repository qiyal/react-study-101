import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    Abay
                </div>
                <div className={s.dialog}>
                    Dulat
                </div>
                <div className={s.dialog}>
                    Nurbolat
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    mmm
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

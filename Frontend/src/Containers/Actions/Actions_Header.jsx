import s from "./Actions_Header.module.scss"

export default function Actions_Header(){



    return(
        <div className={s.header}>
            <button>Actions</button>
            <i className={`fa-solid fa-ellipsis-vertical ${s.option}`}></i>
        </div>
    )
}
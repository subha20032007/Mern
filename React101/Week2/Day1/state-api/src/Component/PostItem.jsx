import style from './Style.module.css'
export const PostItem=({id,title,body})=>{

    return(
        <div className={style.Box}>
           <h1>{title}</h1>
           <h6>{body}</h6>
        </div>
    )
}
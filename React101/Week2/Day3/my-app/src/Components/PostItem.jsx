export const PostItem=({id,title,body})=>{

    return(
        <div style={{border:'1px solid red',marginTop:'10px'}}>
            <h3>{id}-{title}</h3>
            <h6>{body}</h6>
        </div>
    )
}
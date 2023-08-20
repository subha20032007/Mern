
export const Pagination =({handelPagination,page,totalCount})=>{

    return(
        <div className='pagination'>
            <button disabled={page===1} onClick={()=>handelPagination(-1)}>PREVIEW</button>
            <button disabled={true} >{page}</button>
            <button disabled={Math.ceil(totalCount/4)==page} onClick={()=>handelPagination(+1)}>NEXT</button>
        </div>
    )
}
//totalCount=12/4=3 3 is the last page number =>[1,2,3,4],[5,6,7,8],[9,10,11,12]
//totalCount=13/4=3+1 after 3 1 page add =>[1,2,3,4],[5,6,7,8],[9,10,11,12],[13]=page=4(use-Math.ceil())

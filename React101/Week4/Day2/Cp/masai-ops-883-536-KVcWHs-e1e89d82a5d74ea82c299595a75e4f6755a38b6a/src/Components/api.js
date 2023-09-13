
import axios from "axios"
const appurl=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`
export const GetData=()=>{

    return axios.get(appurl)
    
}

export const PostData=(data={title:"",status:""})=>{
    return axios({
        method:"POST",
        url:appurl,
        data:data
    })
}
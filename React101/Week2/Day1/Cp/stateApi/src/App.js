import "./App.css";
import {useState} from 'react';
import Post from "./Components/Post";
const getData=(url)=>{
return fetch(url)
.then(res=>res.json())
.catch(err=>console.log(err))
}
function App() {
const [posts,setPost]=useState([])
const [loading,setLoading]=useState(false)
  const fetchAndupdateData=async()=>{
    
    try{
      setLoading(true)
      const data=await getData(`https://jsonplaceholder.typicode.com/posts`)
//console.log(data)
setPost(data)
setLoading(false)
    }catch(err){
      setLoading(true)
      console.log(err)
      setLoading(false)
    }
   

  }
  if(loading){
    return <h1>Loading ....</h1>
  }
  return (
    <div className="App" data-testid="app">
      <button onClick={fetchAndupdateData}
        id="get-posts-btn"
      >
        GET POSTS
      </button>
      <div id="post-container">
        {posts.map((el)=>
        <Post key={el.id}
             id={el.id}
             title={el.title}
             body={el.body}

        />
        )}
      </div>
    </div>
  );
}

export default App;

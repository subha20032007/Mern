
import './App.css';
import {AllRoutes} from './Componets/AllRoutes';
import { Navbar } from './Componets/Navbar';

function App() {
  
  const baseUrl=process.env.REACT_APP_BASE_URL
  return (
    <div className="App">
   <h1>baseURL:{baseUrl}</h1>
   <div><Navbar/> </div>
<div> <AllRoutes/></div>


     
    </div>
  );
}

export default App;

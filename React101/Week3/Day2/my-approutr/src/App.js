
import './App.css';
import { AllRoutes } from './Componets/AllRoutes';
import { Navbar } from './Componets/Navbar';

function App() {
  return (
    <div  className="App">
    <div>
    <Navbar/>
      </div>
      <div >
      <AllRoutes/>
      </div>
    </div>
  );
}

export default App;

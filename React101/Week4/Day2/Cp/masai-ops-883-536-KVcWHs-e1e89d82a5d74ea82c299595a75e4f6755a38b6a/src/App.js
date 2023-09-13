import { Todos } from "./Components/Todo";

// import Todo from "./Components/Todo";
console.log(process.env.REACT_APP_JSON_SERVER_PORT)
function App() {
  return <>
  <h1>App Start</h1>
  <Todos/>
  </>;
}

export default App;

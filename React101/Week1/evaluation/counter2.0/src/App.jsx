import { useState } from "react";

function App() {
const [count,setCount]=useState(0)
const handelReset=()=>{
  setCount(0)
}
const handelSub=()=>{
  setCount(count-1)
}
const handelSum=()=>{
  setCount(count+1)
}
let isDisable=false
count===0?isDisable=true:isDisable=false
function isPrime(num){
if(num<2){
  return false;
}else{
for(let i=2;i<=Math.sqrt(num);i++){
if(num%i==0){
  return false

}
}
}
return true
}

  return (
    <div>
      <div>
        <button disabled={isDisable} onClick={handelSub} data-testid="minusonebtn">-1</button>
        <button onClick={handelSum} data-testid="plusonebtn">+1</button>
      <div>
        <button onClick={handelReset} data-testid="resetbtn">Reset Count</button>
      </div>
      </div>
      <span data-testid="counter">Count : {count}</span>
      <div>
      <h2><span data-testid="odd-or-even">This Number Is :{count%2===0?"Even":"Odd"}</span></h2>
        <h2>Is prime :<span data-testid="is-prime"> {isPrime(count)?"true":"false"}</span></h2>
      </div>
    </div>
  );

}

export default App;


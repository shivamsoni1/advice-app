import React,{useState,useEffect} from 'react'
import './App.css';
function App() {
 const url ='https://api.adviceslip.com/advice';
 const [advice,setAdvice] = useState('');
 useEffect(()=>{
   fetchApi();
 })
 const fetchApi =(async ()=>{
  const data = await fetch(url);
  const res = await data.json();
  setAdvice(res.slip.advice);
 })
 return (
  <div>
   
   <h1>{advice}</h1>
  </div>
 )
}

export default App

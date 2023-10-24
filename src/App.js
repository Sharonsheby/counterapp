
import './App.css';
import { Button } from 'react-bootstrap';
import React,{useState} from 'react'

function App() {
  const [count, setCount] =useState(0)
  return (
    <>
    <div className='container my-5'>
      <div className='card text-center my-5'>
        <div className='card-body'> 
          <h1>Counter App</h1>
          <div className='my-5'>
            <h2 className='my-5'>{count}</h2>
            <Button variant="success mx-3" onClick={()=>setCount(count+1)}>Increment</Button>{' '}
            <Button variant="danger mx-3" onClick={()=>setCount(count-1)} disabled={count==0}>Decrement</Button>{' '}
            <Button variant="secondary mx-3" onClick={()=>setCount(0)} disabled={count==0}>Reset</Button>{' '}
          </div>
        </div>

      </div>
    </div>
      
      
    </>
  );
}

export default App;

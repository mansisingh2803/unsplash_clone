import React,{useState} from 'react';
import './App.css';

function App() {
  const [value,setValue] = useState('');
  const[results,setResults]=useState([])
  // Y6MzUc8wJvycq1rtSUPVct5oSbqNtNVzjOU7hwFFQgc
  const fetchImages = () =>{
    fetch(`https://api.unsplash.com/search/photos?client_id=Y6MzUc8wJvycq1rtSUPVct5oSbqNtNVzjOU7hwFFQgc&query=${value}&orientation=squarish`)
     .then(res=>res.json())
     .then(data=>{
      setResults(data.results);
     })
  }
  return (
    <div className="App">
      <div className='myDiv'>
        <span>Search</span>
        <input className ="text" type='text' value= {value}  onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={()=>fetchImages()}>Send</button>
      </div>
      <div className="gallery">
        {
          results.map((item)=>{
            return <img className='item' key={item.id} src={item.urls.regular}/>
          })
        }
      </div>
    </div>
  );
}

export default App;

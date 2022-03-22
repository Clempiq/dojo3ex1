import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  
  const [username, setUserName] = useState('');
  const [country, setCountry] = useState('FR');
  const [age, setAge] = useState('');
  

  function handleButton (event) {
        event.preventDefault();
        console.log(username);
        fetch(`https://api.agify.io/?name=${username}&country_id=${country}`)
            .then( (resp) => resp.json())
            .then((data) => {
                console.log(data.age);
            setAge(data.age);
  } 
  )
  }

  return (
    <div className="App">
      <h1>Estimation inutile: âge en fonction du prénom</h1>
      <form onSubmit={handleButton}>
      <input type="text" onChange={(event) => setUserName(event.target.value)}/>
      <button>Estimer</button>
      <select onChange={(event) => setCountry(event.target.value)}>
          <option value="FR">France</option>
          <option value="US">US</option>
          <option value="ES">Spain</option>
      </select>
      </form>
      <br/>
      <h3>Estimation</h3>
      <section>{age}</section>
    </div>
  )

  }
export default App;

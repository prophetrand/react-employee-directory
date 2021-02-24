import React, { useState, useEffect } from 'react';
import API from './utils/API';
import './App.css';

function App() {
  // setting state getter and setter with useState hook. Default state value here is an empty array.
  const [work, setWork] = useState([]);

  useEffect(() => {
    loadCompany();
    console.log(work);
  }, []);

  function loadCompany() {
    API.populateCompany()
      .then((employees) => {
        setWork(employees);
      });
  }

  return (
    <div>
      <p>Hello Leia</p>
    </div>
  );
}

export default App;


// might be useful for populating users: https://gist.github.com/aerrity/53a7f710fcf4e78228de477b48a1259f
// above example populates a list of 50 users, I can adjust this number by changing the ?results=50 number in the fetch call.
// API homepage: https://randomuser.me/
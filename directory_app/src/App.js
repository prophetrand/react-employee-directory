import React, { useState, useEffect } from 'react';
import API from './utils/API';
import Header from './components/Header';
import Table from './components/Table';
import './App.css';

function App() {
  // setting state getter and setter with useState hook. Default state value here is an empty array.
  const [work, setWork] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    loadCompany();
  }, []);

  function loadCompany() {
    API.populateCompany().then((res) => {
      setWork(res);
    });
  }

  const filterTime = event => {
    setFilter(event.target.value);
    console.log(filter);
    // there might be an issue here as the console.log is always one step (character) behind the input
  }

  // const sortTime = () => {
  //   function to sort by name
  // }

  return (
    <div>
      <Header filterTime={filterTime} />
      <main>
        {/* wrap Table component in work.map function, still pass props in the same way */}
        <Table
          key={work.id}
          name={work.name}
          email={work.email}
          phone={work.phone}
          picture={work.picture}
        />
        <ul>
          {work.map((guys) => {
            return <li key={guys.id}>{guys.name}</li>
          })}
        </ul>
      </main>

    </div>
  );
}

export default App;

// API homepage: https://randomuser.me/
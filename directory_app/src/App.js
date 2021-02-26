import React, { useState, useEffect } from 'react';
import API from './utils/API';
import Header from './components/Header';
import Table from './components/Table';
import './App.css';

function App() {
  // setting state getter and setter with useState hook. Default state value for "work" is an empty array, and for "filter" and "sort" the default is an empty string.
  const [work, setWork] = useState([]);
  const [filter, setFilter] = useState("");
  // const [sort, setSort] = useState("");

  useEffect(() => {
    loadCompany();
  }, []);

  function loadCompany() {
    API.populateCompany().then((res) => {
      setWork(res);
    }).catch(err => console.log(err));
  }

  const filterTime = event => {
    const { value } = event.target;
    console.log(value);

    setFilter(value);
  }

  // const sortTime = () => {
  //   function to sort by name
  // }

  return (
    <div>
      <Header filterTime={filterTime} />
      <main>
        <Table 
          work={work}
          filter={filter}
          // sort={sort}
          // sortTime={sortTime}
        />
      </main>
    </div>
  );
}

export default App;

// API homepage: https://randomuser.me/
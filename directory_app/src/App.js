import React, { useState, useEffect } from 'react';
import API from './utils/API';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  // setting state getter and setter with useState hook. Default state value for "work" is an empty array, and for "filter" and "sort" the default is an empty string.
  const [work, setWork] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [symbol, setSymbol]= useState('(Click here to sort)')
  useEffect(() => {
    loadCompany();
  }, []);

  function loadCompany() {
    API.populateCompany().then((res) => {
      setWork(res);
    }).catch(err => console.log(err));
  }

  const filterTime = e => {
    const { value } = e.target;
    console.log(value);

    setFilter(value);
  }

  const sortTime = e => {
    let nameSort = e.target.getAttribute("data-toggle");
    
    switch (nameSort) {
      case "alphabetical":
        setWork(work.sort((first, second) => (first.name < second.name) ? 1 : -1));
        setSort("reverse");
        setSymbol('\u25bc');
        break;
      case "reverse":
        setWork(work.sort((first, second) => (first.name > second.name) ? 1 : -1));
        setSort("alphabetical");
        setSymbol('\u25b2');
        break;
      default:
        setWork(work.sort((first, second) => (first.name > second.name) ? 1 : -1));
        setSort("alphabetical");
        setSymbol('\u25b2');
    }
  }

  return (
    <div>
      <Header filterTime={filterTime} />
      <main>
        <Table 
          work={work}
          filter={filter}
          sort={sort}
          sortTime={sortTime}
          symbol={symbol}
        />
      </main>
    </div>
  );
}

export default App;

// API homepage: https://randomuser.me/
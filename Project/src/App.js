import React, { useEffect, useState } from 'react';
import './App.css'
import './index.js'

function App(){

  const [Repos, setRepos] = useState([{}]);
  
  useEffect(() => {

    async function getRepos() {
      const response = await fetch("https://api.github.com/users/Sarosh1Faheem/repos")
      const data = await response.json();
      console.log(data);
      setRepos(data)
    }
    getRepos();    

  //   fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     .then(response => response.json())
  //     .then(json =>{
  //       console.log(json)
  //       setData(json)
  //     })
  }, [])

  return(
    <div className='App'>
      <h1>You are Watching My All Repositories</h1>
        <ul>
          {Repos.map((repoObj, ind) => 
            {return(<li key={ind}>{repoObj.name}</li>)}
          )}
        </ul>
    </div>
  );
}

export default App;
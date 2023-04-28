import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [data, setData] = useState({});

  // const getData = () => {
  //   axios.get("https://v6.exchangerate-api.com/v6/5f6c169eb629a374b98a6f66/latest/USD", {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => {
  //     if(response.status === 200) {
  //       return response.data
  //     }
  //     else {
  //       console.log('eee')
  //     } 
  //   })
  //   .then(d => {
  //     console.log(d)
  //   })
  //   .catch(e => console.log(e))
  // }

  // const getData = () => {
  //   axios.post("https://jsonplaceholder.typicode.com/posts", {
  //     userId: 1,
  //     title: 'My title',
  //     body: 'My body'
  //   })
  //   .then(response => console.log(response))
  //   .catch(e => console.log(e))
  // }

  const getData = () => {
    axios({
      method: 'post',
      url: "https://jsonplaceholder.typicode.com/posts",
      data: {
        userId: 1,
        title: 'My title',
        body: 'My body'
      }
    })
    .then(r => console.log(r))
  }

  useEffect(() => {getData()}, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
axios.get('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
  console.log(res)
})

fetch
var postApi = 'https://jsonplaceholder.typicode.com/posts'
fetch(postApi)

.then(function(reponse){
    return reponse.json();
})
.then(function(post){
    console.log(post)
})
.catch(function(err){
    console.log('Lỗi')
})
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

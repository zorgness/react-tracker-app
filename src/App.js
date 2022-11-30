<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg'
import './App.css'
import {TrackersApp} from './components/TrackersApp'
>>>>>>> exercises/01-composant-parent

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
      <header className="App-header"></header>
      <TrackersApp />
>>>>>>> exercises/01-composant-parent
    </div>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

function App() {
  return (

    <div className="App">
      <NavBar />
      <SideBar />
      <header className="App-header">
        <h1>SISCOT</h1>
      </header>
    </div>
  );
}

export default App;

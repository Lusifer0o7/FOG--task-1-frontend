import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Toggelbar from './components/Toggelbar';
import Soldier from './components/Soldier';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <Soldier/>
      <Toggelbar/>
    </div>
  );
}

export default App;

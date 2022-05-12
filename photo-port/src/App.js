import './App.css';
import About from './components/About/index.js';
import Nav from './components/Nav/index.js';

function App() {
  return (
    <div className="App">
        <Nav></Nav>
      <main>
        <About></About>
      </main>  
    </div>
  );
}

export default App;

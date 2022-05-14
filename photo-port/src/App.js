import './App.css';
import About from './components/About/index.js';
import Nav from './components/Nav/index.js';
import Gallery from './components/Gallery/index.js';

function App() {
  return (
    <div className="App">
        <Nav></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>  
    </div>
  );
}

export default App;

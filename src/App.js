import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
    </div>
  );
}

export default App;

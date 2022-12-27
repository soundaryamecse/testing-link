import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './Container/Home';
import Products from './Container/products';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;

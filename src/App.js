
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Sports from './pages/Sports';
import "antd/dist/antd.css";
function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;

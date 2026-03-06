import logo from './logo.svg';
import './App.css';

function App() {
  let currentYear = Date();
  let isLoggedIn = true;
  return (
    <div>
        <h1>ENSF-381: Full Stack Web Development</h1>
        <p>React Components</p>
        <p>Current Year {currentYear}</p>
        {isLoggedIn ? <p>Welcome Back!</p> : <p>Please Login!</p>}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Controls from './Controls';
import UserList from './UserList';
import Footer from './Footer';

function App() {
  let date = new Date();
  let currentYear = date.getFullYear();
  let isLoggedIn = true;
  return (
    <div>
        <h1>ENSF-381: Full Stack Web Development</h1>
        {isLoggedIn && 
        <section>
          <Controls />
          <UserList />
          <Footer />
        </section>
          }
    </div>
  );
}

export default App;

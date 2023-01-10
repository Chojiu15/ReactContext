import logo from './logo.svg';
import './App.css';
import { MovieController } from './context/MovieContext';
import { UsersController } from './context/UsersContext';
import Movies from './components/Movies'
import NavBar from './components/NavBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <MovieController>
        <UsersController>
        <NavBar />
        <Movies />
        <AddMovie />
      </UsersController>
      </MovieController>
    </div>
  );
}


export default App;

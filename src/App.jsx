import './style/style.css'
import SideBarLecturer from './compenents/SideBar/SideBarLecturer';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './compenents/NavBar';
import Home from './pages/Home';
import Lecturer from './pages/Lecturer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>

    </BrowserRouter>
  );
}

export default App;

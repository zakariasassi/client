import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Posts from './components/Posts';
function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;

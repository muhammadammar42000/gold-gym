import './App.css';
import { Box } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;

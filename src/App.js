import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './components/Homepage';
import Categories from './components/Categories';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;

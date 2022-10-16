import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Producto1 from './pages/Producto1';
import Servicio from './pages/Servicio';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/producto1' element={<Producto1 />} />
        <Route exact path='/servicio/:url' element={<Servicio />} />
      </Routes>
    </Router>
  );
}

export default App;

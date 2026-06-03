import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home.jsx';
import { Proyectos } from './pages/Proyectos/Proyectos.jsx';
import { Stack } from './pages/Stack/Stack.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/stack" element={<Stack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { Home } from './pages/Home/Home.jsx';
import { Proyectos } from './pages/Proyectos/Proyectos.jsx';
import { Stack } from './pages/Stack/Stack.jsx';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

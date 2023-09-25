
import './App.css';

import { BrowserRouter, Routes } from 'react-router-dom'
import renderRoutes from './routes';
import { Suspense} from 'react';
import CheckLoading from './Templates/components/CheckLoading'


function App() {
  return (
    <Suspense fallback={<CheckLoading />}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

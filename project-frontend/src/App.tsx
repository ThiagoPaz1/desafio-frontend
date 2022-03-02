import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainArea from './pages/MainArea';
import UserProfileArea from './pages/UserProfileArea';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainArea /> } />
          <Route path="/perfilUser" element={ <UserProfileArea /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

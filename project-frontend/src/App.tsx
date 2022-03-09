import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainArea from './pages/MainArea';
import UserProfileArea from './pages/UserProfileArea';
import { UsersProvider } from '../src/context/Users';

function App() {
  return (
    <UsersProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <MainArea /> } />
            <Route path="/perfilUser" element={ <UserProfileArea /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </UsersProvider>  
  );
}

export default App;

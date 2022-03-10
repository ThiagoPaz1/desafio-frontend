import React from 'react';

import SearchBar from './SearchBar';
import { MainStyle } from './styles';

function Main() {
  return (
    <MainStyle>
      <main>
        <h1>Encontre o seu perfil ou outros vários perfis do github!</h1>
        <SearchBar />
      </main>
    </MainStyle>
  );
}

export default Main;
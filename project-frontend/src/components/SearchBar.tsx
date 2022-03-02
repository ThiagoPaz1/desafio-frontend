import React, { useState, useEffect } from 'react';
import axios from 'axios';

import User from './User';

function SearchBar() {
  const [recentlyUsers, setRecentlyUsers]: any = useState([]);
  const [foundUser, setFoundUser]: any = useState([]);
  const [userApi, setUserApi]: any = useState([]);
  const [loginProfile, setLoginProfile] = useState('');
  const [notFoundUser, setNotFoundUser] = useState('');
  
  useEffect(() => {
    if (loginProfile !== '' && loginProfile !== ' ') {
      const userSearch = loginProfile.toLowerCase();

      axios.get(`https://api.github.com/users/${userSearch}`)
      .then(response => setUserApi([response.data]))
      .catch(() => console.log('Perfil não encotrado.'))
    }
  }, [loginProfile]);

  const handleChange = (event: any) => {
    const { value } = event.target;
    setLoginProfile(value);
  }

   const searchProfiles = (event: any) => {
    event.preventDefault();

    const filterUser = userApi.find((data: any) => {
      const userSearch = loginProfile.toLowerCase();

      return data.login.toLowerCase() === userSearch;
    });

    let filterUserEquals;

    if (filterUser === undefined) {
      setNotFoundUser('Perfil não encontrado');
    }

    if (filterUser !== undefined) {
      filterUserEquals = foundUser.find((usersEquals: any) => {
        return usersEquals.login === filterUser.login;
      });

      setNotFoundUser('');
      setLoginProfile('');
    }

    if (filterUser !== undefined && !filterUserEquals) {
      setFoundUser([filterUser]);
      setRecentlyUsers([...recentlyUsers, filterUser]);
      setLoginProfile('');
    }
  }

  return ( 
    <div>
      <form>
        <input
          onChange={ handleChange }
          type="text" placeholder="Digite um nome de usuario"
          value={ loginProfile }
        />
        <button onClick={ searchProfiles }>Pesquisar</button>
      </form>
      <h3>{ notFoundUser }</h3>
      <User datasUsers={ foundUser } />
    </div>
  );
}

export default SearchBar;
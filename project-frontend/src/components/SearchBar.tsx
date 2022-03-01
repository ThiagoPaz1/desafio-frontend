import React, { useState, useEffect } from 'react';

import axios from 'axios';

function SearchBar() {
  const [foundUser, setFoundUser]: any = useState();
  const [userApi, setUserApi]: any = useState([]);
  const [loginProfile, setLoginProfile] = useState('');
  
  useEffect(() => {
    if (loginProfile !== '' && loginProfile !== ' ') {
      axios.get(`https://api.github.com/users/${loginProfile}`)
      .then(response => setUserApi([response.data]))
      .catch(() => console.log('Perfil não encotrado.'))
    }
  }, [loginProfile]);

  const handleChange = (event: any) => {
    const { value } = event.target;
    
    if (value !== '' && value !== ' ') {
      setLoginProfile(value);
    }
  }

  const searchProfiles = async (event: any) => {
    event.preventDefault();
  
    const filterUser = userApi.find((data: any) => data.login === loginProfile);

    setFoundUser(filterUser);
  }

  return ( 
    <div>
      <form>
        <input onChange={ handleChange } type="text" placeholder="Digite um nome de perfil"/>
        <button onClick={ searchProfiles }>Pesquisar</button>
      </form>
    </div>
  );
}

export default SearchBar;
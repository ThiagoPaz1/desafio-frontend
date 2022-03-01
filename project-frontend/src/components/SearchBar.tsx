import React, { useState, useEffect } from 'react';

import axios from 'axios';

function SearchBar() {
  const [foundUser, setFoundUser]: any = useState([]);
  const [userApi, setUserApi]: any = useState([]);
  const [loginProfile, setLoginProfile] = useState('');
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    if (loginProfile !== '' && loginProfile !== ' ') {
      axios.get(`https://api.github.com/users/${loginProfile}`)
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
    
    const filterUser = userApi.find((data: any) => data.login === loginProfile);
    
    let filterUserEquals;

    if (filterUser === undefined) {
      setMessage('Perfil não encontrado');
    }
    if (filterUser !== undefined) {
      filterUserEquals = foundUser.find((usersEquals: any) => usersEquals.login === filterUser.login)
      
      setMessage('');
      setLoginProfile('');
    }
    if (filterUser !== undefined && !filterUserEquals) {
      setFoundUser([...foundUser, filterUser]);
      setLoginProfile('');
    }
  }

  return ( 
    <div>
      <form>
        <input
          onChange={ handleChange }
          type="text" placeholder="Digite um nome de perfil"
          value={ loginProfile }
        />
        <button onClick={ searchProfiles }>Pesquisar</button>
      </form>
      <h3>{ message }</h3>
      <ul>
        { foundUser.map((users:any, index:number) => <li key={ index }> {users.name}</li>)}
      </ul>
    </div>
  );
}

export default SearchBar;
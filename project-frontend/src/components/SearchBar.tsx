import React, { useState, useEffect, useContext } from 'react';
import { UsersContext } from '../context/Users';
import axios from 'axios';

import User from './User';
import RecentlyProfiles from './RecentlyProfiles';

function SearchBar() {
  const { setUsers, setUsersRepos }: any = useContext(UsersContext);
  const [recentlyUsers, setRecentlyUsers]: any = useState([]);
  const [reposApi, setReposApi]: any = useState([]);
  const [foundUser, setFoundUser]: any = useState([]);
  const [userApi, setUserApi]: any = useState([]);
  const [loginProfile, setLoginProfile] = useState('');
  const [notFoundUser, setNotFoundUser] = useState('');

  useEffect(() => {
    if (loginProfile !== '' && loginProfile !== ' ') {
      const userSearch = loginProfile.toLowerCase();

      axios.get(`https://api.github.com/users/${userSearch}`)
        .then(response => setUserApi([response.data]))
        .catch(() => console.log('Perfil não encotrado.'));
    }
  }, [loginProfile]);

  useEffect(() => {
    if (loginProfile !== '' && loginProfile !== ' ') {
      const userReposSearch = loginProfile.toLowerCase();

      axios.get(`https://api.github.com/users/${userReposSearch}/repos`)
      .then(response => setReposApi(response))
      .catch(() => console.log(`Repositorios deste usuário ${userReposSearch} não encontrado.`));
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
      const recentlyFind = recentlyUsers.find((user:any) => user.login === filterUser.login);

      setUsers(filterUser);
      setFoundUser([filterUser]);
      setUsersRepos(reposApi.data);

      if (!recentlyFind) {
        setRecentlyUsers([...recentlyUsers, filterUser]);
      }

      setLoginProfile('');
    }
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          type="text" placeholder="Digite um nome de usuario"
          value={loginProfile}
        />
        <button onClick={searchProfiles}>Pesquisar</button>
      </form>
      <h3>{notFoundUser}</h3>
      <User datasUsers={foundUser} />
      <section>
        <RecentlyProfiles datasUsersRecently={recentlyUsers} />
      </section>
    </div>
  );
}

export default SearchBar;
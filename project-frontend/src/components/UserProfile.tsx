import React, { useContext } from "react";

import { UsersContext } from '../context/Users';

function UserProfile() {
  const { users, usersRepos }: any = useContext(UsersContext);
  return (
    <div>
      <h1>Área do usuario</h1>
      <div>
        <img width="100px" src={users.avatar_url} alt="Foto do usuario" />
        <div>
          <span>Nome: {users.name ? users.name : 'Não informado'}</span><br />
          <span>Login: {users.login ? users.login : 'Não informado'}</span><br />
          <span>Localização: {users.location ? users.location : 'Não informado'}</span><br />
          <span>Seguidores: {users.followers ? users.followers : 0}</span><br />
          <span>Repositórios públicos: {users.public_repos ? users.public_repos : 0}</span>
        </div>
      </div>
      <section>
        <h1>Repositórios:</h1>
        <ul>
        { usersRepos.map((datasRepo:any, index:any) => {
          const dataCreated = datasRepo.created_at.substr(0, datasRepo.pushed_at.indexOf('T'));
          const lastPush = datasRepo.pushed_at.substr(0, datasRepo.pushed_at.indexOf('T'));
          return (
            <li key={index}>
            <a href={ datasRepo.svn_url } target="_blank" rel="noreferrer">
              <h3>Nome: {datasRepo.name ? datasRepo.name : 'Não informado'}</h3>
            </a>  
            <div>Linguagem utilizada: {datasRepo.language ? datasRepo.language : 'Não informada'}</div>
            <div>Descrição: {datasRepo.description ? datasRepo.description : 'Não informada'}</div>
            <div>Data de criação: {datasRepo.created_at ? dataCreated.split('-').reverse().join('-') : 'Não informada'}</div>
            <div>Último push: {datasRepo.pushed_at ? lastPush.split('-').reverse().join('-') : 'Não informada'}</div>
          </li>
          );
        }
        )}
        </ul>
      </section>
    </div>
  );
}

export default UserProfile;
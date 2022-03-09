import React from 'react';
import { Link } from 'react-router-dom';

function User(props: any) { 
  const { datasUsers } = props;

  return (
    <div>
      <ul>
        { datasUsers.map((item: any, index: number) => 
          <li key={ index }>
            <Link to="/perfilUser">
              <img width="100px" src={ item.avatar_url} alt="Foto do usuario"/>
            </Link>
            <div>
              <span>Nome: { item.name ? item.name : 'Não informado' }</span><br/>
              <span>Login: { item.login ? item.login : 'Não informado' }</span><br/>
              <span>Localização: { item.location ? item.location : 'Não informado' }</span>
            </div>
          </li>
        )} 
      </ul>
    </div>
  );
}

export default User;
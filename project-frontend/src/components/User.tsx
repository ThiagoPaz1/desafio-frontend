import React from 'react';
import { Link } from 'react-router-dom';

import { UserStyles } from './styles';

function User(props: any) {
  const { datasUsers } = props;

  return (
    <UserStyles>
      <div>
        <ul>
          {datasUsers.map((item: any, index: number) =>
            <li key={index}>
              <Link to="/perfilUser">
                <img src={item.avatar_url} alt="Foto do usuario" />
              </Link>
              <div style={{display: "flex", flexDirection: "column"}}>
                <span>Nome: {item.name ? item.name : 'Não informado'}</span>
                <span>Login: {item.login ? item.login : 'Não informado'}</span>
                <span>Localização: {item.location ? item.location : 'Não informado'}</span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </UserStyles>
  );
}

export default User;
import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { UserStyles } from './styles';

function RecentlyProfiles(props) {
  const { datasUsersRecently } = props;
  const [message, setMessage] = useState('Vizualizar pesquisas recentes');
  const [showUsers, setShowUsers] = useState(false);

  const showSearchRecentlyUsers = () => {
    const messageCheck = 'Vizualizar pesquisas recentes';

    if (message === messageCheck) {
      setMessage('Ocultar pesquisas recentes');
      setShowUsers(true);
    } else {
      setMessage('Vizualizar pesquisas recentes');
      setShowUsers(false);
    }
  }

  return (
    <div>
      <button onClick={showSearchRecentlyUsers}>{message}</button>
      <UserStyles>
        <ul>
          {showUsers ? datasUsersRecently.map((item, index) =>
            <li key={index} style={{ marginTop: "10px" }} >
              <Link to="/perfilUser">
                <img src={item.avatar_url} alt="Foto do usuario" />
              </Link>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>Nome: {item.name ? item.name : 'Não informado'}</span>
                <span>Login: {item.login ? item.login : 'Não informado'}</span>
                <span>Localização: {item.location ? item.location : 'Não informado'}</span>
              </div>
            </li>
          ) : ''}
        </ul>
      </UserStyles>
    </div>
  );
}

export default RecentlyProfiles;
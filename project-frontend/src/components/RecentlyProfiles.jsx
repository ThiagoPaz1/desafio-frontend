import React, { useState }from "react";
import { Link } from 'react-router-dom';

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

    // if (showUsers === false) {
    //   console.log('true');
    // } else {
    //   setMessage(false);
    // }
  }

  return (
    <div>
      <button onClick={showSearchRecentlyUsers}>{ message }</button>
      <ul>
        {showUsers ? datasUsersRecently.map((item, index) => 
          <li key={index}>
            <Link to="/perfilUser">
              <img width="100px" src={ item.avatar_url} alt="Foto do usuario"/>
            </Link>
            <div>
              <span>Nome: { item.name ? item.name : 'Não informado' }</span><br/>
              <span>Login: { item.login ? item.login : 'Não informado' }</span><br/>
              <span>Localização: { item.location ? item.location : 'Não informado' }</span>
            </div>
          </li>
        ) : ''}
      </ul>
    </div>
  );
}

export default RecentlyProfiles;
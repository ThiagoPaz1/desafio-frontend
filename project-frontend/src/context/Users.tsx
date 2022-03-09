import React, { createContext, useState } from "react";

export const UsersContext = createContext();

export function UsersProvider({ children }: any) {
  const [users, setUsers] = useState();
  const [usersRepos, setUsersRepos] = useState();

  return (
    <UsersContext.Provider value={{ users, setUsers, usersRepos, setUsersRepos }}>
      { children }
    </UsersContext.Provider>
  );
}
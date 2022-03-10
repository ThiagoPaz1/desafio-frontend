import styled from 'styled-components';

export const MainStyle = styled.main `
 display: flex;
 justify-content: center;
 font-family: arial;
 background-color: #E0F8EC;
`;

export const SearchBarStyle = styled.div `
  display: flex;
  justify-content: center;
  font-family: arial;
  background-color: #E0F8EC;

  input {
    width: 700px;
    padding: 5px;
  }

  button {
    padding: 6px;
    color: black;
    background-color: #E6E6E6;
    border: 1.5px black solid;
    border-radius: 5px;
  }
`;

export const UserStyles = styled.div `

  li {
    display: flex;
    list-style: none;
    background-color: #E6E6E6;
    border: 1.5px black solid;
    border-radius: 5px;
    width: 350px;
  }

  img {
    border: 1.5px black solid;
    border-radius: 50px;
    margin-left: 5px;
    width: 110px; 
  }

  span {
    margin: 3px;
    margin-top: 10px;
    margin-left: 12px;
  }
`;

export const UserProfileStyles = styled.div `
  display: flex;
  list-style: none;
  background-color: #E6E6E6;
  border: 1.5px black solid;
  border-radius: 5px;
  width: 350px;

  img {
    border: 1.5px black solid;
    border-radius: 50px;
    margin-left: 5px;
    width: 110px; 
  }

  li {
    margin-top: 10px;
  }

  span {
    margin: 3px;
    margin-top: 10px;
    margin-left: 12px;
  }
`;

export const RepoAreaStyle = styled.section `
  font-family: arial;

  li { 
    list-style: none;
    background-color: #E6E6E6;
    margin-top: 10px;
    border: 1.5px black solid;
    border-radius: 5px;
    width: 350px;
  }
  
  a {
    text-decoration: none;
  }

  h3 {
    color: black;
    margin-left: 10px;
  }

  div {
    margin-left: 10px;
  }
`;

export const Div = styled.section`
  margin-bottom: 20px;
`;
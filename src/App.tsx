import React from 'react';
import './App.css';
import { Header } from './Styles';
import CreateAccountForm from './components/CreateAccount/CreateAccountForm';

function App() {
  return (
    <Header>
      <p>A demonstration of react hooks and forms validation</p><br/>
      <CreateAccountForm></CreateAccountForm>
    </Header>
  );
}

export default App;

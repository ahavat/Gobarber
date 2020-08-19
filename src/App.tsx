/* eslint-disable import/extensions */
import React from 'react';
import GlobalStyle from './styles/global';
// import SignUP from './pages/SignUp/index';
import SignIn from './pages/Signin';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);
export default App;

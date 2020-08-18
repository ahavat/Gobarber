/* eslint-disable import/extensions */
import React from 'react';
import GlobalStyle from './styles/global';
// import SignIn from './pages/Signin/index';
import SignUP from './pages/SignUp/index';

const App: React.FC = () => (
  <>
    <SignUP />
    <GlobalStyle />
  </>
);
export default App;

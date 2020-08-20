/* eslint-disable import/extensions */
import React from 'react';
import GlobalStyle from './styles/global';
// import SignUP from './pages/SignUp/index';
import SignIn from './pages/Signin';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);
export default App;

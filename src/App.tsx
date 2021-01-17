import React from 'react';
import GlobolStyle from './styles/global';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobolStyle />
  </>
);

export default App;

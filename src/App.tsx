import React from 'react';
import GlobolStyle from './styles/global';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Peterson' }}>
      <SignIn />
    </AuthContext.Provider>

    <GlobolStyle />
  </>
);

export default App;

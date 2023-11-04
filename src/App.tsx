import React from 'react';

import MainContainer from './components/MainContainer/MainContainer';
import UserDataProvider from './contexts/UserDataContext';

export default function App() {
  return (
    <div className="App">
      <UserDataProvider>
        <MainContainer />
      </UserDataProvider>
    </div>
  );
}

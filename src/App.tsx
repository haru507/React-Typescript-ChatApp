import React, {useReducer} from 'react';
import Router from "./Router";
import { AppHeaderBar } from './components/UIkit';

import {UserAuthReducer, initialState} from './Reducers/UserReducer'
import { UserAuthContext } from './Contexts/UserAuthContext'

const App = () => {

  const [state, dispatch] = useReducer(UserAuthReducer, initialState)
  
  return (
    <UserAuthContext.Provider value={{state,dispatch}}>
      <AppHeaderBar />
      <Router />
    </UserAuthContext.Provider>
  );
}

export default App;

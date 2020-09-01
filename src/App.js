import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from './components/newUser/welcome';
import ProfileSettings from './components/newUser/profileSettings';
import Home from './components/auth/js/home';

function App() {
  return (
    <main style={{overflow: 'hidden'}}>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/profile-settings' component={ProfileSettings}/>
        <Route path='/auth/home' component={Home}/>
      </Switch>
    </main>
  );
}

export default App;

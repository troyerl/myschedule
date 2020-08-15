import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from './components/newUser/welcome';
import ProfileSettings from './components/newUser/profileSettings';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/profile-settings' component={ProfileSettings}/>
      </Switch>
    </main>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from './components/newUser/welcome';
import ProfileSettings from './components/newUser/profileSettings';
import Home from './components/auth/home';

import routes from './routes';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path={routes.newUser.welcome} component={Welcome} />
        <Route path={routes.newUser.profileSettings} component={ProfileSettings}/>
        <Route path={routes.auth.home} component={Home}/>
      </Switch>
    </main>
  );
}

export default App;

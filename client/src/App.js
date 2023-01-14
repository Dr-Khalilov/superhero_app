import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage'));
const Hero = lazy(() => import('./pages/HeroPage'));

function App () {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <NavLink to='/'>Main</NavLink>
          </li>
          <li>
            <NavLink to='/heroes'>Heroes</NavLink>
          </li>
        </ul>
        <Suspense fallback='App loading...'>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/heroes' component={Hero} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

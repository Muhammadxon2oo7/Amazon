import React from 'react';
import { Route } from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';
import Explore from './explore/Explore';
import Pdp from './pdp/Pdp';
import SignUp from './signup/SignUp';
import { Switch } from 'react-router-dom';
const index = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
      <Route exact path={["/explorenow","/shopnow" ,"/toys", '/baby', '/computer',"/gaming"]}  >
        <Explore/>
      </Route>
      <Route path="/explorenow/:id">
        <Pdp/>
      </Route>
      {/* <Route  path="/*">
        <Notfound/>
      </Route> */}
    </Switch>
  )
}

export default index
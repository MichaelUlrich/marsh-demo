import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import CommInfo from './comm-info';
import Contact from './contact';
import Art from './art';
import Resume from './resume';
{/* React Router */}
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/comm-info" component={CommInfo} />
    <Route path="/contact" component={Contact} />
    <Route path="/art" component={Art} />
  </Switch>
)
export default Main;

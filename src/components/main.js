import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './about';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
{/* React Router */}
const Main = () => (
  <switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  </switch>
)
export default Main;

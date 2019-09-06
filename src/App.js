import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
    <Layout fixedHeader="true">
      <Header className="header-color" style={{margin:"auto"}} scroll>
        <Navigation className="navbar-style" style={{margin:"auto"}}>
          <Link to="/"><strong>Home</strong></Link>
          <Link to="/art"><strong>Art</strong></Link>
          <Link to="/comm-info"><strong>Commision Info</strong></Link>
          <Link to="/contact"><strong>Contact</strong></Link>
        </Navigation>
      </Header>
        <Content>
          <div className="page-content"/>
          <Main/>
        </Content>
      </Layout>
    </div>
  );
}
export default App;

import React, { Component } from 'react';
import { Grid, Cell, Tooltip} from 'react-mdl';
class Landing extends Component {
  render() {
    return(
      <div style= {{width: '100%', margin: 'auto'}}>   {/* Double curly braces for inline styling */}
        <Grid className="landing-grid">
          <Cell col={12}>
            <img className="avatar-img" src="https://a.facdn.net/1556227254/w00my.gif"/>
            <div className="banner-text">
              <h1>Furry Heathen</h1>
              <hr/> {/*Dotted Line*/}
              <p> | Marsh x 25 x Taurus | </p>
              <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="social-links">
                <a href="https://www.patreon.com/PoodlePoofs" target="_blank">
                  <Tooltip label="Patreon" large="true">
                    <i class="fab fa-patreon fa-3x"/></Tooltip>
                </a>
                <a href="https://twitter.com/Kiwikiddyt" target="_blank">
                  <Tooltip label="Twitter" large="true">
                    <i class="fab fa-twitter fa-3x"/></Tooltip>
                </a>
                <a href="https://www.furaffinity.net/user/w00my/" target="_blank">
                  <Tooltip label="FurAffinity" large="true">
                    <i class="fas fa-paw fa-3x"/></Tooltip>
                </a>
                <a href="https://discordapp.com/invite/vYkNcdr" target="_blank">
                  <Tooltip label="Discord" large="true">
                    <i class="fab fa-discord fa-3x"/></Tooltip>
                </a>
                <a href="https://www.etsy.com/shop/Poodlepoofs" target="_blank">
                  <Tooltip label="Etsy" large="true">
                    <i class="fab fa-etsy fa-3x"/></Tooltip>
                </a>
              </div>
            </div>
          </Cell> {/* https://tleunen.github.io/react-mdl/components/grid/ */}
        </Grid>
      </div>
    )
  }
}
export default Landing;

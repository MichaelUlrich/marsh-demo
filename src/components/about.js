import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
class About extends Component {
  render() {
    return(
      <div className="about-body">   {/* Double curly braces for inline styling */}
        <Grid className="about-grid">
          <Cell col={6}>
            <img src="https://cdn.discordapp.com/attachments/429905389954400266/611275382699720793/legout.png"
              style={{position: 'absolute', padding: '50px'}}></img>
          </Cell>
          <Cell col={6}>
            <div className="about-text">
              <h1>My name here</h1>
              <hr/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default About;

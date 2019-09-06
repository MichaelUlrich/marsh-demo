import React, { Component } from 'react';
import Modal from '../components/modal/modal';
import SlideShow from '../components/Slideshow/';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton,
          Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl';

{/*import Modal from "../components/modal";*/}
{/*import ImageCarousel from "../components/carousel"*/}
{/*const images = [{source: 'https://cdn.discordapp.com/attachments/479847490326233108/602998771005128742/smorestime2.png'}];*/}
{/*
      8/28
      https://youtu.be/1tgQk94SoBU?t=1360
      where i left off
*/}
export default class Projects extends Component {
  images = {
    chars: [
      {id: 1, url: '/img/chars/1551744007.png'},
      {id: 2, url: '/img/chars/1539833051.png'},
      {id: 3, url: '/img/chars/1542266444.png'},
      {id: 4, url: 'img/chars/1547590056.gif'},
      {id: 5, url: '/img/chars/1527649429.png'},
      {id: 6, url: '/img/chars/1553547503.png'},
      {id: 7, url: '/img/chars/1553571421.png'},
      {id: 8, url: '/img/chars/1555213453.png'},
      {id: 9, url: '/img/chars/1560014824.png'},
    ], comms: [
      {id: 1, url: '/img/comms/1559360827.png'},
      {id: 2, url: '/img/comms/1560701202.png'},
      {id: 3, url: '/img/comms/1561059879.png'},
      {id: 4, url: '/img/comms/1562105419.png'},
      {id: 5, url: '/img/comms/1562882228.png'},
      {id: 6, url: '/img/comms/1562967193.png'},
      {id: 7, url: '/img/comms/1562989964.png'},
      {id: 8, url: '/img/comms/1563226547.png'},
      {id: 9, url: '/img/comms/1563750767.png'},
      {id: 10, url: '/img/comms/1563767083.png'},
      {id: 11, url: '/img/comms/1563852297.png'},
      {id: 12, url: '/img/comms/1566622185.png'},
      {id: 13, url: '/img/comms/tammyarttread.png'},
    ], ych: [
      {id: 1, url: '/img/ych/1557026775.png'},
      {id: 2, url: '/img/ych/1557435914.png'},
      {id: 3, url: '/img/ych/1557788458.png'},
      {id: 4, url: '/img/ych/1559768888.png'},
      {id: 5, url: '/img/ych/1559790174.png'},
      {id: 6, url: '/img/ych/1561326500.png'},
      {id: 7, url: '/img/ych/1562881911.png'},
      {id: 8, url: '/img/ych/1564953193.png'},
      {id: 9, url: '/img/ych/1565038400.png'},
      {id: 10, url: '/img/ych/1565320956.png'},
      {id: 11, url: '/img/ych/1565479130.png'},
      {id: 12, url: '/img/ych/1566073618.png'},
      {id: 13, url: '/img/ych/1567109289.png'},
    ]
  } /* Images and URLs*/
  showModal = () => {
    this.setState({
      ...this.state, /* From all props */
      show: !this.state.show /* Only change show */
    });
  }
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }
  toggleCategories() {
    if(this.state.activeTab === 0) { {/* Characters */}
      return(
        <SlideShow slides = {this.images.chars}/>
      )
    } else if (this.state.activeTab === 1){ {/* Commissions */}
      return(
        <SlideShow slides = {this.images.comms}/>
      )
    } else if (this.state.activeTab === 2){ {/* YCH */}
      return(
        <SlideShow slides = {this.images.ych}/>
      )
    }
  }
  render() {
    return(
      <div className = "category-tabs">
        <Tabs className = "tab" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Characters</Tab>
          <Tab>Commissions</Tab>
          <Tab>YCH</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

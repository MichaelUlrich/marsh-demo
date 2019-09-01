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
      {id: 1, url: 'https://cdn.discordapp.com/attachments/479847490326233108/602998771005128742/smorestime2.png'},
      {id: 2, url: 'https://media.discordapp.net/attachments/479847490326233108/607683304296153147/borgorpom.png?width=632&height=703'},
      {id: 3, url: 'https://media.discordapp.net/attachments/479847490326233108/605236653623345162/tammyarttread.png?width=588&height=703'},
      {id: 4, url: 'https://media.discordapp.net/attachments/479847490326233108/605157291850727424/rosebat.png?width=670&height=702'},
      {id: 5, url: 'https://media.discordapp.net/attachments/479847490326233108/605157290776985634/tammycat.png?width=698&height=702'},
      {id: 6, url: 'https://cdn.discordapp.com/attachments/479847490326233108/603063455942967337/clowbi2.png'},
      {id: 7, url: 'https://cdn.discordapp.com/attachments/479847490326233108/602998768773890048/yuunisinstreampost.png'},
      {id: 8, url: 'https://cdn.discordapp.com/attachments/479847490326233108/602998767058157588/magpieinstreampost.png'},
    ], comms: [
      {id: 1, url: 'https://cdn.discordapp.com/attachments/479847490326233108/602998771005128742/smorestime2.png'},
      {id: 2, url: 'https://media.discordapp.net/attachments/479847490326233108/607683304296153147/borgorpom.png?width=632&height=703'},
    //  {id: 3, url: 'https://media.discordapp.net/attachments/479847490326233108/605236653623345162/tammyarttread.png?width=588&height=703'},
      {id: 4, url: 'https://media.discordapp.net/attachments/479847490326233108/605157291850727424/rosebat.png?width=670&height=702'},
    //  {id: 5, url: 'https://media.discordapp.net/attachments/479847490326233108/605157290776985634/tammycat.png?width=698&height=702'},
    //  {id: 6, url: 'https://cdn.discordapp.com/attachments/479847490326233108/603063455942967337/clowbi2.png'},
      {id: 7, url: 'https://cdn.discordapp.com/attachments/479847490326233108/602998768773890048/yuunisinstreampost.png'},
      {id: 8, url: 'https://cdn.discordapp.com/attachments/479847490326233108/602998767058157588/magpieinstreampost.png'},
    ], ych: [
    //  {id: 1, url: 'https://cdn.discordapp.com/attachments/479847490326233108/602998771005128742/smorestime2.png'},
      {id: 2, url: 'https://media.discordapp.net/attachments/479847490326233108/607683304296153147/borgorpom.png?width=632&height=703'},
    //  {id: 3, url: 'https://media.discordapp.net/attachments/479847490326233108/605236653623345162/tammyarttread.png?width=588&height=703'},
      {id: 4, url: 'https://media.discordapp.net/attachments/479847490326233108/605157291850727424/rosebat.png?width=670&height=702'},
      {id: 5, url: 'https://media.discordapp.net/attachments/479847490326233108/605157290776985634/tammycat.png?width=698&height=702'},
    //  {id: 6, url: 'https://cdn.discordapp.com/attachments/479847490326233108/603063455942967337/clowbi2.png'},
      {id: 7, url: 'https://cdn.discordapp.com/attachments/479847490326233108/602998768773890048/yuunisinstreampost.png'},
      {id: 8, url: 'https://cdn.discordapp.com/attachments/479847490326233108/602998767058157588/magpieinstreampost.png'},
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

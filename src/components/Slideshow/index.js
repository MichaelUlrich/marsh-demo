import React, {Component} from 'react';
import Slide from './Slide';
import withModal from '../HOC/withModal'
export default class SlideShow extends React.Component {
  render() {
    let SlideWithModal = withModal(Slide);
    let slides = this.props.slides.map((slide) => {
      return <SlideWithModal key = {slide.id} url = {slide.url} />
    })
    return (
      <div className="slide-container">
        {slides}
      </div>
    )
  }
}

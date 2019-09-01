import React from 'react';

export default class Modal extends React.Component {
  onClose = (e) => {
    e.stopPropagation(); //Stop click being propagated to parent object
    this.props.onClose && this.props.onClose(e); /* If onClose is passed, call onClose */
  }
  render() {
    if(!this.props.show) {
      return null; {/* Will not display if false*/}
    }
    return (
      <div className = "backdrop">
        <div className = "modal-style">
          {this.props.children} {/* Show text within objects div instead*/}
          <div className = "foot-style">
            <button className = "close-modal-button" onClick={(e) => {this.onClose(e)}}>
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

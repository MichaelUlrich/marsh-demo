import React from 'react'
{/* Wraps any component in a dottled 2px red line*/}
const style = {
  border: "2px dashed red"
}
const withBorder = (WrappedComponent) => {
  //return class extends React.Component { /* Returns definition of the class */
    class _WithBorder extends React.Component {
      render() {
        return (
          <div style={style}>
            <WrappedComponent {...this.props}/>
          </div>
        );
      }
    }

  _WithBorder.displayName = "WithBorder"; {/* Gives name to class*/}
  return _WithBorder;
}
export default withBorder;

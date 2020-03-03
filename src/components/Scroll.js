import React from 'react';

const Scroll = props => {
  return (
    <div
      style={{
        overflow: 'scroll',
        borderTop: '2px solid black',
        height: 'calc(100vh - 123.6px)'
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

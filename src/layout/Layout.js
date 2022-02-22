import React from 'react';

const Layout = (props) => {
  return (
    <React.Fragment>
      <header>
        <span>Fantastic Beasts & how to call them</span>
      </header>
      {props.children}
    </React.Fragment>
  );
};

export default Layout;

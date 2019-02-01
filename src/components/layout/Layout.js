import React from 'react';
import Aux from '../../hocs/Aux';
import './Layout.scss';
import Header from '../header';
import Footer from '../footer';

const Layout = props => (
  <Aux>
    <Header />
    <main className="Container">
      {props.children}
    </main>
    <Footer />   
  </Aux>
);

export default Layout;

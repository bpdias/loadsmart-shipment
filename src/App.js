import React, { Component } from 'react';
import Layout from './components/layout/Layout';
import Shipment from './pages/shipment';
import Aux from './hocs/Aux';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Shipment />
        </Layout>
      </Aux>
    );
  }
}

export default App;

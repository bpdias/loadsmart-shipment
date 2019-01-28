import React, { Component } from 'react';
import Layout from './components/layout/Layout';
import Shipment from './pages/shipment';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Shipment />
        </Layout>
      </div>
    );
  }
}

export default App;

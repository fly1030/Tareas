import React from 'react';
import Layout from './layout.react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Layout className="TareasCard">
        <Layout.Column className="metadataCard">Metadata</Layout.Column>
        <Layout.Column>Task Info</Layout.Column>
      </Layout>
    );
  }
}

export default App;

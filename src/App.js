import React from 'react';
import Layout from './layout.react';
import './App.css';
import TareasLeftBar from './tareasLeftBar.react';
import taskImage from './list.svg';

class App extends React.Component <{}> {
  render() {
    return (
      <div>
        <header className="TareasHeader">
          <img src={taskImage} className="App-logo" alt="logo" />
          <h1 className="App-title">Tareas</h1>
        </header>
        <Layout className="TareasCard">
          <Layout.Column className="metadataCard">
            <TareasLeftBar />
          </Layout.Column>
          <Layout.Column>Task Info</Layout.Column>
        </Layout>
      </div>
    );
  }
}

export default App;

import React from 'react';
import Layout from './layout.react';
import './App.css';
import TareasLeftBar from './tareasLeftBar.react';
import TareasList from './tareasList.react';
import taskImage from './list.svg';
import folderImage from './folder-settings-button.svg';

type keyType = 'Owner' | 'Subscribed' | 'Created';
type State = {
  selectedKey: keyType,
};

class App extends React.Component <State> {
  state = {selectedKey: 'Owner'}

  render() {
    return (
      <div>
        <header className="TareasHeader">
          <img src={taskImage} className="App-logo" alt="logo" />
          <h1 className="App-title">Tareas</h1>
        </header>
        <Layout className="TareasCard">
          <Layout.Column className="metadataCard">
            {this._renderLeftBar()}
          </Layout.Column>
          <Layout.Column>
            <TareasList selectedKey={this.state.selectedKey}></TareasList>
          </Layout.Column>
        </Layout>
      </div>
    );
  }

  _renderLeftBar() {
    return (
      <div>
        {this._renderFolderView("Owner")}
        {this._renderFolderView("Subscribed")}
        {this._renderFolderView("Created")}
      </div>
    );
  }

  _renderFolderView(title: string) {
    const onClick = (): void => {
      this.setState({selectedKey: title});
    }
    return (
      <div
        className="tareasFolder"
        onClick={onClick}
        >
        <img src={folderImage} className="tareasFolderImage"/>
        {title}
      </div>
    );
  }

}

export default App;

// @flow
import React from 'react';
import folderImage from './folder-settings-button.svg';
import './App.css';

export type keyType = 'Owner' | 'Subscribed' | 'Created';

type State = {
  selectedKey: keyType,
};

class tareasLeftBar extends React.Component <State> {
  state = {selectedKey: 'Owner'}

  render() {
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

export default tareasLeftBar;

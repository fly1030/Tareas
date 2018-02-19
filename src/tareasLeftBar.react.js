// @flow
import React from 'react';
import folderImage from './folder-settings-button.svg';
import './App.css';

class tareasLeftBar extends React.Component <{}> {
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
    return (
      <div
        className="tareasFolder"
        onClick={this.props.onClick({title})}
        >
        <img src={folderImage} className="tareasFolderImage"/>
        {title}
      </div>
    );
  }
}

export default tareasLeftBar;

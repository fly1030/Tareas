// @flow
import React from 'react';
import folderImage from './folder-settings-button.svg';
import './App.css';
import type keyType from './tareasLeftBar.react';

type Props = {'selectedKey': keyType};

// TODO: Once backend available, fetch all tasks async base on tab selected
class tareasList extends React.Component <Props> {
  render() {
    return (
      <div className="tareasList">
        {this.props.selectedKey}
      </div>
    );
  }

}

export default tareasList;

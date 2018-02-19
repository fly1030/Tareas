// @flow
import React from 'react';

type Props = {
  children?: React$Element<any>,
  className?: string,
};

class Layout extends React.Component <Props> {
  render() {
    return (
      <div {...this.props} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

Layout.Column = class extends React.Component {
  render() {
    return (
      <div {...this.props} className={this.props.className}/>
    );
  }
}

export default Layout;

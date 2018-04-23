import React from 'react';
import {inject} from 'mobx-react';

@inject('store')
export default class Logout extends React.Component {
  componentWillMount() {
    this.props.store.auth.logout();
  }

  render() {
    return (
      <div>
        <span>Logout Success.</span>
      </div>
    );
  }
}
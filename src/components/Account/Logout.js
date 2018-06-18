import React from 'react';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';

@withRouter
@inject('store')
@observer
export default class Logout extends React.Component {
  timeout = null;

  componentWillMount() {
    this.props.store.auth.logout();
    this.timeout = setTimeout(() => {

    })
  }

  componentWillUnmount() {
    //clearTimeout();
  }

  render() {
    return (
      <div>
        <span>Logout Success.</span>
      </div>
    );
  }
}
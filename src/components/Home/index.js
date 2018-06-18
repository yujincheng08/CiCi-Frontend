import React from "react";
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';

@withRouter
@inject('store')
@observer
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <span>
          Hello {this.props.store.profile.username}, This is home.
        </span>
      </div>
    );
  }

}
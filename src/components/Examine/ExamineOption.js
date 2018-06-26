import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import _ from 'lodash';

export default class ExamineOption extends React.Component {
  render() {
    const {onClick, defs} = this.props;
    let def = _.sample(defs.slice());
    return (
      <ListItem button onClick={onClick}>
        <ListItemText>
          {`${def['pos']} ${def['def']}`}
        </ListItemText>
      </ListItem>
    );
  }

}


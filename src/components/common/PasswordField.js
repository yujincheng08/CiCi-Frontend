import React from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default class PasswordField extends React.Component {

  componentWillMount() {
    this.setState({showPassword: false});
  }

  onShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  render() {
    const {showPassword} = this.state;
    const {label, id, inputProps} = this.props;
    return (
      <FormControl {...this.props}>
        <InputLabel htmlFor={id ? id : label}>{label}</InputLabel>
        <Input
          id={id ? id : label}
          type={showPassword ? "text" : "password"}
          inputProps={inputProps}
          endAdornment={
            <InputAdornment position={"end"}>
              <IconButton
                aria-label={"Toggle password visibility"}
                onClick={this.onShowPassword}
              >
                {this.state.showPassword ? <Visibility/> : <VisibilityOff/>}
              </IconButton>
            </InputAdornment>}
        >
          {this.props.children}
        </Input>
      </FormControl>
    );
  }
}
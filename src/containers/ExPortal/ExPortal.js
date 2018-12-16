import React, { Component } from "react";

import ExProfile from "../../components/Profile/ExProfile";

class ExPortal extends Component {
  state = {
    isDisabled: true
  };

  onChange = date => this.setState({ date });

  editToggle = () => {
    let isDisabled;
    this.state.isDisabled ? (isDisabled = false) : (isDisabled = true);
    this.setState({
      isDisabled: isDisabled
    });
  };

  render() {
    return (
      <>
        <ExProfile
          onChange={this.onChange}
          editToggle={this.editToggle}
          isDisabled={this.state.isDisabled}
          date={this.state.date}
          logout={this.props.logout}
        />
      </>
    );
  }
}

export default ExPortal;

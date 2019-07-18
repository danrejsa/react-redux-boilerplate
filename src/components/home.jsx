import React, { Component } from "react";
import logo from "../logo.svg";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Home extends Component {
  static propTypes = {
    //TODO
  };
  state = {};
  render() {
    return (
      <div>
        <Container>
          <h2>This is just a boilerplate</h2>
          <img src={logo} className="App-logo2" alt="logo" />
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  //TODO
});
export default connect(
  mapStateToProps,
  {  }
)(Home);

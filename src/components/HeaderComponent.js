import React from "react";
import Navbar from "react-bootstrap/Navbar";

class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="navbar">
          <Navbar.Brand>Compare Fruits</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default HeaderComponent;

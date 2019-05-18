import React from "react";
import { connect } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import SingleProductComponent from "./SingleProductComponent";

import products from "../products.json";
import { addProduct, removeProduct } from "../actions/index";

class ProductComponent extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            {products.map(product => (
              <SingleProductComponent
                key={product.id}
                product={product}
                addProduct={this.props.addProduct}
                removeProduct={this.props.removeProduct}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(
  null,
  { addProduct, removeProduct }
)(ProductComponent);

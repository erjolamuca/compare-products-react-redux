import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SingleProductComponent extends React.Component {
  state = {
    added: false
  };

  addProduct = product => {
    this.props.addProduct(product);
    this.setState({
      added: true
    });
  };

  removeProduct = product => {
    this.props.removeProduct(product);
    this.setState({
      added: false
    });
  };

  render() {
    const product = this.props.product;
    return (
      <Col md={3} key={product.id}>
        <Card className="card">
          <Card.Img variant="top" src={`/images/${product.image}`} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            {this.state.added ? (
              <Button
                onClick={() => this.removeProduct(product)}
                className="cardButton"
              >
                Remove
              </Button>
            ) : (
              <Button
                onClick={() => this.addProduct(product)}
                className="cardButton"
              >
                Compare
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleProductComponent;

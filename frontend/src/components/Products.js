import React from 'react';
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating.js'
const Products = (props) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${props.product._id}`}>
        <Card.Img src={props.product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link className="text-dark" to={`/product/${props.product._id}`}>
          <Card.Title as="div">
            <strong>{props.product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={props.product.rating}
            text={`${props.product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h2">${props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Products;

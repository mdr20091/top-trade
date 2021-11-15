import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message.js';
import { addToCart, removeFromCart } from '../actions/cartActions.js';

const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  const productId = id;

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, id]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  };

  const onCheckoutHandler = () => {
    history.push('/login?redirect=shipping')
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is Empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup varient="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(event) =>
                        dispatch(
                          addToCart(item.product, Number(event.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup.Item variant="flush">
            <h4>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h4>
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.qty, 0)
              .toFixed(2)}
          </ListGroup.Item>
          <ListGroup.Item className="d-grid gap-2">
            <Button
              type="button"
              className="btn-block"
              disabled={cartItems.length === 0}
              onClick={onCheckoutHandler}
            >
              Procced to checkout
            </Button>
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;

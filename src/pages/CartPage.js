import React, { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from '../pages/CartContext';
import './CartPage.css';


const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <h1 className="text-center my-5">Shopping Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" href="/checkout">Proceed to Checkout</Button>
    </Container>
  );
};

export default CartPage;

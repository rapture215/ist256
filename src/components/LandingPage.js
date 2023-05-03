import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import './LandingPage.css';


const products = [
    {
    id: 1,
    name: 'purple Air-jordans retro 1s ',
    image: "https://th.bing.com/th?id=OP.zfbssQWZRodfwg474C474&w=122&h=122&c=17&o=5&pid=21.1",
    price: 9.99,
    description: 'This is a description for Product 1.'
    },
  
  {
    id: 2,
    name: "Air-jordan baby blue's",
    image: "https://th.bing.com/th?id=OP.bUe8rIpHh3KeEg474C474&w=122&h=122&c=17&o=5&pid=21.1",
    price: 19.99,
    description: 'This is a description for Product 2.'
    },

  {
    id: 3,
    name: 'Air-jordan pink retros',
    image: "https://th.bing.com/th?id=OP.sYeNY6vJEIhh7w474C474&w=122&h=122&c=17&o=5&pid=21.1",
    price: 19.99,
    description: 'This is a description for Product 2.'
    },
    
  {
    id: 4,
    name: 'Air-jordan burgendy retros',
    image: 'https://th.bing.com/th?id=OP.fpt3xj9u2Y5yJA474C474&w=122&h=122&c=17&o=5&pid=21.1',
    price: 19.99,
    description: 'This is a description for Product 2.'
    },
  {
    id: 5,
    name: 'Air-jordan retros 1 (red)',
    image: 'https://www.bing.com/th?id=OP.ADq0twlzBP%2bIxg474C474&o=5&pid=21.1&w=142&h=142&qlt=100&dpr=1&c=17',
    price: 19.99,
    description: 'This is a description for Product 2.'
    },
  {
    id: 6,
    name: 'Nike tech',
    image: 'https://th.bing.com/th/id/OIP.9oYQHXZoF1DpQ_IHNOHqVwHaKX?w=186&h=260&c=7&r=0&o=5&pid=1.7',
    price: 19.99,
    description: 'black hoodie .'
    },
  {
    id: 7,
    name: 'Nike runnig sweat(top)',
    image: 'https://th.bing.com/th/id/OIP.jcMDMMXENOiiFYiQqbRZTQHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7',
    price: 19.99,
    description: 'blue running appearle .'
    },
  {
    id: 8,
    name: 'Nike runnig sweat(top)',
    image: 'https://th.bing.com/th/id/OIP.QtXS14GBPYtaZkeKQ_7DHgHaKX?w=186&h=260&c=7&r=0&o=5&pid=1.7',
    price: 19.99,
    description: 'grey running appearle .'
    },
  {
    id: 9,
    name: 'Nike joggers ',
    image: 'https://th.bing.com/th/id/OIP.X5m6OYEm6K1ZQrSoqyJWKwHaIW?w=186&h=210&c=7&r=0&o=5&pid=1.7',
    price: 19.99,
    description: 'red runnig sweatpants .'
    },
  {
    id: 10,
    name: 'nike straight leg sweats',
    image: 'https://th.bing.com/th?id=OP.I58%2ftG%2bfLqKyJQ474C474&w=178&h=231&o=5&pid=1.7',
    price: 19.99,
    description: 'all blck straight leg sweatPants .'
  }
    
];

const LandingPage = () => {
  return (
    <Container>
      <h1 className="text-center my-5">Hot Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LandingPage;

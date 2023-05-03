import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import './ProductPage.css';

const category1Products = [
  //10 products for the first category
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
    name: 'Air-jordan retro 1s (green)',
    image: 'https://th.bing.com/th?id=OP.vk%2fwBeyWZTyM2g474C474&w=122&h=122&c=17&o=5&pid=21.1',
    price: 19.99,
    description: 'This is a description for Product 2.'
    },
  {
    id: 7,
    name: 'Air-jordan low dunks retro 1s ',
    image: 'https://th.bing.com/th?id=OP.qTZQlAIqzQtatA474C474&w=122&h=122&c=17&o=5&pid=21.1',
    price: 19.99,
    description: 'This is a description for Product 2.'
    },
  {
    id: 8,
    name: 'Air-jordan 5s',
    image: 'https://th.bing.com/th?id=OP.0x%2blv2uuFwkoGQ474C474&w=110&h=110&c=17&o=5&bw=6&bc=ffffff&pid=21.1',
    price: 199.99,
    description: 'This is a description for Product 2.'
    },
  {
    id: 9,
    name: 'Air-jordans retromid SEs ',
    image: 'https://www.bing.com/th?id=OP.McAB4IEbTiH17A474C474&o=5&pid=21.1&w=130&h=130&qlt=100&dpr=1&bw=6&bc=FFFFFF&c=17',
    price: 199.99,
    description: 'This is a description for Product 2.'
    },
  {
    id: 10,
    name: 'Air-jordan retro Highs',
    image: 'https://www.bing.com/th?id=OP.qtJNcaXBLtijyg474C474&o=5&pid=21.1&w=130&h=130&qlt=100&dpr=1&bw=6&bc=FFFFFF&c=17',
    price: 199.99,
    description: 'This is a description for Product 2.'
  }
];

const category2Products = [
  // Add 10 products for the second category
     {
    id: 1,
    name: 'nike sweat-shirt',
    image: 'https://www.bing.com/th?id=OIP.y-tTvGUWawRSR5BJl5kXAQHaHa&w=185&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    price: 9.99,
    description: 'black long sleve sweat-shirt'
  },
  {
    id: 2,
    name: 'nike brokeNeck sweat-shirt',
    image: 'https://www.bing.com/th?id=OIP.8ZhyDPV8hV1z9s7ejuNaIwHaKX&w=133&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    price: 19.99,
    description: 'blue loose collar shirt.'
    },
  {
    id: 3,
    name: 'Nike sweat-shirt',
    image: 'https://www.bing.com/th?id=OIP.-zA5GmfW4arPA7xdqp-jpgHaKX&w=133&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    price: 19.99,
    description: 'red white and blue sweater'
    },
  {
    id: 4,
    name: 'nike Hoodie',
    image: 'https://th.bing.com/th/id/OIP.vinhwkFjOZEh6hl7Nv34MwHaJ3?w=186&h=248&c=7&r=0&o=5&pid=1.7',
    price: 19.99,
    description: 'nike streched hoodie'
    },
  {
    id: 5,
    name: 'Nike wind-breaker',
    image: 'https://th.bing.com/th/id/OIP.0GLhhUXQeMkoGLRjYtN-TAHaKX?w=186&h=260&c=7&r=0&o=5&pid=1.7',
    price: 19.99,
    description: 'blue wind resistant hoodie.'
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

const ProductPage = () => {
  return (
    <Container>
      <h1 className="text-center my-5">Air-Jordan's</h1>
      <Row>
        {category1Products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <h1 className="text-center my-5">Nike's</h1>
      <Row>
        {category2Products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;

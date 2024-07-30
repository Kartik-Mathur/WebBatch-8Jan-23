import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Restaurant = ({ restaurant }) => {

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={restaurant.coverImage} className='restaurant-cover-image' />
        <center>
          <Card.Body>
            <Card.Title className='capitalize'>{restaurant.name}</Card.Title>
            <hr />
            <Card.Text>
              <span>Cusines Available</span> <br/>
              {restaurant.cusines.map((c, index) => {
                return <span key={index} className='capitalize'>{c.category}&nbsp;</span>
              })}
            </Card.Text>
            <hr />
            <Button variant="primary" className='restaurantDetails-btn' id={restaurant._id}>
              <Link to={restaurant._id}>Details</Link>
            </Button>
          </Card.Body>
        </center>
      </Card>
    </div>
  )
}

export default Restaurant

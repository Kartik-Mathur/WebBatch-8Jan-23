import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const RestaurantCard = ({ restaurant }) => {
    return (
        <div>
            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" className='w-100' src={restaurant.image} />
                <Card.Body>
                    <Card.Title>{restaurant.name}</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text> */}
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{restaurant.location}</ListGroup.Item>
                </ListGroup>
                {/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
            </Card>
        </div>
    )
}

export default RestaurantCard
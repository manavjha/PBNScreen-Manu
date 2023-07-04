import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import React from 'react'
import './CardItem.css'

export const CardItem = ({ cardinfo }) => {
    console.log("data from CardItem:", cardinfo)
    return (
        <div className='wrapper'>
            {
                cardinfo && cardinfo.map(item => {
                    return (<Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" 
                        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.data.cloudinaryImageId}`} />
                        <Card.Body>
                            <Card.Title>{item.data.name}</Card.Title>
                            <Card.Text>{item.data.address} </Card.Text>
                        </Card.Body>
                        <Card.Body className="foot">
                            <ListGroup.Item>{item.data.avgRating}</ListGroup.Item>
                            <ListGroup.Item>{item.data.deliveryTime} MINS</ListGroup.Item>
                            <ListGroup.Item>{item.data.costForTwoString}</ListGroup.Item>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>)
                })
            }
        </div>
    );
}


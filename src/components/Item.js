import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { Card, Col } from 'react-bootstrap';

export const Item = ({ item }) => {
    return (
        item.length > 0 ? (item.map(data =>
            <Col key={data.id} sm='12' className='mb-4'>
                <Zoom>
                    <Card className='flex-row'>
                        <Card.Img className='img-item' src={data.imgUrl} />
                        <Card.Body className='text-end'>
                            <Card.Title className='d-flex justify-content-between'>
                                <div className='item-title'>{data.title}</div>
                                <div className='item-price'>{data.price}</div>
                            </Card.Title>
                            <Card.Text className='item-description pt-2'>
                                {data.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Zoom>
            </Col>

        )) : <h3> لا يوجد</h3>

    )
}

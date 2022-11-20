import React from 'react'
import { Col } from 'react-bootstrap'
import Roll from 'react-reveal/Roll';

export const Catogeries = ({ allCatogry, filterCatogries }) => {
    return (
        <Col className='mt-4 mb-5'>
            {
                allCatogry.map(catogry =>
                    <Roll>
                        <button key={catogry} onClick={() => { filterCatogries(catogry) }} className='btn mx-1  '>{catogry}</button>
                    </Roll>
                )
            }
        </Col>
    )
}

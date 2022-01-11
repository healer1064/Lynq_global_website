import React, { useState } from 'react'
import {BsCameraVideoFill, BsFillImageFill, BsArrowRepeat} from 'react-icons/bs'
import { Row, Col } from 'react-materialize';

const ExclusiveContent = () => {
    let items = ["exclusive-1.png","exclusive-2.png","exclusive-1.png","exclusive-2.png","exclusive-1.png","exclusive-2.png","exclusive-1.png","exclusive-2.png","exclusive-1.png"];
    return (
        <div>
            <div className='exclusive-summary'>
                <BsFillImageFill /> <span>21</span>
                <BsCameraVideoFill /> <span>8</span>
                <BsArrowRepeat /> <span>3 days</span>
            </div>
            <Row className='exclusive-item-wrapper'>
                {
                    items.map((item, index) => (
                        <Col s="4" key ="index">
                            <div class="exclusive-item">
                                <img src={item} alt="img not found"/>
                                <img src="lock.svg" class="exclusive-item-lock" alt="lock svg not found"
                                    style={{left: `${(index % 3) * 33.5 + 13.5 }%`, top: `${18 + Math.floor(index/3) * 31}%`}}
                                />
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

export default ExclusiveContent
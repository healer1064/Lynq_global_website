import React, { useState } from 'react'
import { Row, Col } from 'react-materialize';
import { useNavigate  } from "react-router-dom";

const ExclusiveContent = () => {
    let items = [
        "/assets/img/exclusive-1.png",
        "/assets/img/exclusive-2.png",
        "/assets/img/exclusive-1.png",
        "/assets/img/exclusive-2.png",
        "/assets/img/exclusive-1.png",
        "/assets/img/exclusive-2.png",
        "/assets/img/exclusive-1.png",
        "/assets/img/exclusive-2.png",
        "/assets/img/exclusive-1.png"
    ];
    let navigate = useNavigate();

    function handleClick() {
        navigate("/exclusive/content");
    }
    return (
        <div>
            <div className='exclusive-summary'>
                <img src="/assets/svg/image-icon.svg"/> <span>21</span>
                <img src="/assets/svg/video-icon.svg"/> <span>8</span>
                <img src="/assets/svg/refresh-icon.svg"/> <span>3 days</span>
            </div>
            <Row className='exclusive-item-wrapper'>
                {
                    items.map((item, index) => (
                        <Col s={4} key ={index}>
                            <div className="exclusive-item" onClick={handleClick}>
                                <img src={item} alt="img not found"/>
                                <img src="/assets/svg/lock.svg" className="exclusive-item-lock" alt="lock svg not found"/>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

export default ExclusiveContent
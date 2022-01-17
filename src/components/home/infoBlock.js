import React from 'react';
import { Row, Badge } from 'react-materialize';
import './infoBlock.css';

function InfoBlock() {
  return (
    <div className="InfoBlock">
        <div className="custom-container">
            <div className="InfoBlock_Wrapper">
                <div >
                    <Row>
                        <img
                            alt=""
                            src="/assets/svg/avatar.svg"
                            className="Round_Avatar"
                        />
                    </Row>
                    <Row>
                        <h4 className="Name_Label">Ben Burns</h4>
                    </Row>
                    <Row className="Badge_Row">
                        <Badge className="Badge" >
                            Designers
                        </Badge>
                        <Badge className="Badge" >
                            Creative
                        </Badge>
                        <Badge className="Badge" >
                            Creative Business
                        </Badge>
                    </Row>
                    <Row className="Content_Row">I am an executive level creative leader with more than...more</Row>
                    <Row className="Link_Row">
                        <span>Proceeds go to</span>&nbsp;
                        <span className="Blue_Text">Save The Children</span>
                    </Row>
                    <Row>
                        <img
                            alt=""
                            src="/assets/svg/facebook.svg"
                            className="Svg_Img"
                        />
                        <img
                            alt=""
                            src="/assets/svg/instagram.svg"
                            className="Svg_Img"
                        />
                        <img
                            alt=""
                            src="/assets/svg/twitter.svg"
                            className="Svg_Img"
                        />
                    </Row>
                </div>
            </div>
        </div>
    </div>
  );
}

export default InfoBlock;
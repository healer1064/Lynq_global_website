import { Row, Badge, Icon } from 'react-materialize';
import './infoBlock.css';

function InfoBlock() {
  return (
    <div className="InfoBlock">
        <div className="Container">
            <div className="InfoBlock_Wrapper">
                <div >
                    <Row>
                        <img
                            alt=""
                            src="avatar.svg"
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
                            src="facebook.svg"
                            className="Svg_Img"
                        />
                        <img
                            alt=""
                            src="instagram.svg"
                            className="Svg_Img"
                        />
                        <img
                            alt=""
                            src="twitter.svg"
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
import React from 'react';
import {
    Card,
    CardBody,
    CardImg, 
    CardText,
    Button,
    Container,
    Row,
    Col
} from "reactstrap"

import '../App.css';
import krazyball from '../assets/img/football.png';


{/* Apps page */}
function GoToPage()
{
  window.open("https://play.google.com/store/apps/details?id=com.ToUpperLLC.BallKrazy&hl=en_US", "_blank");
}

function Apps() {
    return (
        <div>
            <Container>
                <Row>
                  <Col sm = "3"> 
                    <Card>
                      <CardImg top width="100%" img src={krazyball} alt="Card image cap" />
                        <CardBody>
                          <CardText>Krazy Ball</CardText>
                            <div
                                clasName="Form"
                                style={{ display: "flex", justifyContent: "center" }}
                              >
                              <Button onClick={GoToPage}> Open</Button>
                            </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
              </Container>
          </div>
    );
}

export default Apps;
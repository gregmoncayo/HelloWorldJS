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
import Bugs from '../assets/img/SayNoToBug.jpg';


{/* Apps page */}
function OpenPage()
{
  window.open("http://saynotobugsflorida.com/", "_blank");
}

function Apps() {
    return (
        <div>
          <Container>
            <Row>
              <Col sm = "4"> 
                <Card>
                  <CardImg top width="100%" img src={Bugs} alt="Card image cap" />
                    <CardBody>
                      <CardText>Say No To Bugs</CardText>
                        <div
                          clasName="Form"
                          style={{ display: "flex", justifyContent: "center" }}
                          >
                          <Button onClick={OpenPage}>Open</Button>
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
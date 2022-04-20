import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import 'react-loading-skeleton/dist/skeleton.css'

const ExhibitorLoader = () => {
    return ( 
        <Container>
            <Row>
                <Col className="col-lg-6">
                    <Card className="flex-row new-ex-container">
                    <Skeleton  height={"98%"} width={200} />
                    <Card.Body>
                    <Card.Text>
                       <Skeleton count={2}/>
                    </Card.Text>
                    <div className="text">
                    <Skeleton />
                   </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            
        </Container>
    );
}

 
export default ExhibitorLoader;
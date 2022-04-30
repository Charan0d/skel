import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";

const Playercard = () => {
    return (
        <Row className="playercard-loader">
<div className="player-align">
        <Col sm={9} lg={12} className="playercard-right-area">
            <Row className="playercard-name-holder">
            <Col sm={3}>
                    <Skeleton containerClassName="playercard-name-skeleton1" />
                    
                    
                    
                </Col>



                <Col sm={3}>
                    <Skeleton containerClassName="playercard-img-skeleton" />
                 
                    
                </Col>

                <Col sm={3}>
                    <Skeleton containerClassName="playercard-name-skeleton" />
                    <Skeleton containerClassName="playercard-name-skeleton" />
                    
                    
                </Col>

                <Col sm={3}>
                <div className="playercard-icon-holder">
                    <Skeleton containerClassName="playercard-icon-skeleton" />
                  
                    </div>
                    </Col>
                    
            </Row>
           
        </Col>

        </div>

    </Row>
);
};


export default Playercard;
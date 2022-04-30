import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";

const Pointercard = () => {
    return (
        <Row className="pointercard-loader">
	<div className="pointer-align">
        <Col sm={9} lg={12} className="pointercard-right-area">
            <Row className="playercard-name-holder">
            <Col sm={3}>
                    <Skeleton containerClassName="pointercard-name-skeleton1" />
           
                    
                    
                </Col>

  
                <Col sm={3}>
                    <Skeleton containerClassName="pointercard-name-skeleton" />
                    <Skeleton containerClassName="pointercard-name-skeleton" />
                    
                    
                </Col>

                <Col sm={3}>
                <div className="pointercard-icon-holder">
                    <Skeleton containerClassName="pointercard-icon-skeleton" />
                  
                    </div>
                    </Col>
                    
            </Row>
           
        </Col>
        </div>
    </Row>
);
};


export default Pointercard;
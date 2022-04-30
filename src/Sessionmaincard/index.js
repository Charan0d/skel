
import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";



const SessionMainCard = () => {
    return (  


       
		
            <Row className="Sessionmain-card-loader">
                    <Col sm={3} lg={6} className="ps-0">
                        <Skeleton containerClassName="Sessionmain-img-skeleton" />
                    </Col>
                    <Col sm={9} lg={6} className="Sessionmain-right-area">
                        <Row className="Sessionmain-name-holder">
                            <Col sm={6}>
                                
                                <Skeleton containerClassName="Sessionmain-name-skeleton1" />
                                <Skeleton containerClassName="Sessionmain-name-skeleton " />
                            </Col>
                            <div className="Sessionmain-icon-holder">
                                
                            </div>
                        </Row>
                        <div className="Sessionmain-action-holder">
                        <Skeleton containerClassName="Sessionmain-button-skeleton" />
                            <Skeleton containerClassName="Sessionmain-button-skeleton" />
                        
                        </div>
                    </Col>
                </Row>
         
    );
}
 
export default SessionMainCard ;

import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";


const YourCard = () => {
    return (



       
		
            <Row className="Yourcard-card-loader">
                    <Col sm={5}  className="ps-0">
                        <Skeleton containerClassName="Yourcard-img-skeleton" />
                    </Col>
                    <Col sm={6} lg={6} >
                        <Row className="Yourcard-name-holder">
                            <Col sm={4}>
                                
                                <Skeleton containerClassName="Yourcard-name-skeleton1" />
                                <Skeleton containerClassName="Yourcard-name-skeleton1 " />
                            </Col>
                            <Col sm={4}>
                                
                                <Skeleton containerClassName="Yourcard-name-skeleton" />
                                <Skeleton containerClassName="Yourcard-name-skeleton " />
                                <Skeleton containerClassName="Yourcard-name-skeleton" />
                               
                            </Col>

                            <Col lg={4}>
                                
      <div className="box">
                            
                                <Skeleton containerClassName="Yourcard-textbox-skeleton-box" />
                                </div>
                            </Col>
                            
                        </Row>
                        
                    </Col>
                </Row>



      );
}
 
export default YourCard;
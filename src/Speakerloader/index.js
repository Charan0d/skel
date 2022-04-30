
  import React from "react";
  import "./index.css";
  import Skeleton from "react-loading-skeleton";
  import { Button, Card, Col, Container, Row } from "react-bootstrap";
  import "react-loading-skeleton/dist/skeleton.css";
const  SpeakerLoader= () => {
    
    
    
    return ( 
      
        
    
                <Row className="Speaker-card-loader">
                <Col sm="auto" className="ps-0">
                    <Skeleton containerClassName="Speaker-card-img-skeleton" />
                </Col>
                <Col  className="Speaker-card-right-area">
                    <Row className="Speaker-card-name-holder">
                        <Col sm={4}>
                            <Skeleton containerClassName="Speaker-card-name-skeleton " />
                            <Skeleton containerClassName="Speaker-card-name-skeleton" />
                            <Skeleton containerClassName="Speaker-card-name-skeleton " />
                        </Col>
                        <div className="Speaker-card-icon-holder">
                        <Skeleton containerClassName="Speaker-card-icon-skeleton" />
                            <Skeleton containerClassName="Speaker-card-icon-skeleton" />
                        
                        </div>
                    </Row>
                   
                </Col>
            </Row>
     
        
        
     );
}
 
export default SpeakerLoader ;
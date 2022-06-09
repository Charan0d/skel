import React from 'react';
import "./index.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function ExhibitorDashboard() {
  return (
    <div >
        <Row className="ex-card-loader">
                <Col sm={2} className="ps-0">
                    <Skeleton containerClassName="ex-card-img-skeleton" />
                </Col>
                <Col  >
                    <Row >
                        <Col sm={3}>
                            <Skeleton containerClassName="ex-card-name-skeleton" />

                         
                        </Col>
                    
                      
                        <Col sm={2}>
                            <Skeleton containerClassName="ex-card-cat-skeleton " />

                         
                        </Col>
                        <Col sm={1}>
                            <Skeleton containerClassName="ex-card-cat-skeleton " />

                         
                        </Col>
                        <Col sm={1}>
                            <Skeleton containerClassName="ex-card-name-skeleton " />

                         
                        </Col>
                      
                        <Col sm={2}>
                            <Skeleton containerClassName="ex-card-icon-skeleton " />

                         
                        </Col>
                        <Col sm={2}>
                            <Skeleton containerClassName="ex-card-icon-skeleton " />

                         
                        </Col>
                        


                       
                    </Row>
                   
                </Col>
            </Row>
     
        
        

</div>
    
  )
}

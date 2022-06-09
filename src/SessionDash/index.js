import React from 'react';
import "./index.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function SessionDashboard() {
  return (
    <div >
        <Row className="sessiondash-loader">
                
                <Col  className="session-card-right-area">
                    <Row className="session-card-name-holder">
                        <Col sm={2} >
                            <Skeleton  containerClassName='people-text-skeleton' />

                         
                        </Col>
                    
                      
                       
                        <Col sm={2}>
                            <Skeleton  containerClassName='session-text-skeleton'/>

                         
                        </Col>
                        
                        <Col sm={1}>
                        <Skeleton containerClassName="sessiondash-img-skeleton" />

                         
                        </Col>
                        
                        <Col sm={1}>
                               <Skeleton containerClassName="sessiondash-img-skeleton" />

                         
                        </Col>
                        <Col sm={1}>
                            <Skeleton  containerClassName='session-subtext-skeleton'/>

                         
                        </Col>
                        
                        <Col sm={1}>
                            <Skeleton  containerClassName='session-text-skeleton'/>

                         
                        </Col>
                        <Col sm={1}>
                            <Skeleton containerClassName='session-text-skeleton' />

                         
                        </Col>


                       
                    </Row>
                   
                </Col>
            </Row>
     
        
        

</div>
    
  )
}

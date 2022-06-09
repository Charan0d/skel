import React from 'react';
import "./index.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function PeopleDashboard() {
  return (
    <div >
        <Row className="peopledash-loader">
                <Col sm={2} className="ps-0">
                    <Skeleton containerClassName="peopledash-img-skeleton" />
                </Col>
                <Col  className="people-card-right-area">
                    <Row className="people-card-name-holder">
                        <Col sm={1} >
                            <Skeleton  containerClassName='people-text-skeleton' />

                         
                        </Col>
                    
                      
                        <Col sm={1}>
                            <Skeleton  containerClassName='people-text-skeleton'/>

                         
                        </Col>
                        <Col sm={1}>
                            <Skeleton  containerClassName='people-text-skeleton'/>

                         
                        </Col>
                        <Col sm={1}>
                            <Skeleton  containerClassName='people-text-skeleton' />

                         
                        </Col>
                        <Col sm={1}>
                            <Skeleton containerClassName='people-text-skeleton' />

                         
                        </Col>
                        <Col sm={1}>
                            <Skeleton  containerClassName='people-text-skeleton'/>

                         
                        </Col>
                        <Col sm={1}>
                            <Skeleton containerClassName='people-text-skeleton' />

                         
                        </Col>


                       
                    </Row>
                   
                </Col>
            </Row>
     
        
        

</div>
    
  )
}

import React from 'react';
import "./index.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function AddTeam() {
  return (
    <div >
        <Row className="add-team-loader">
            <Row>
        <Col sm={12} className="ps-0">
                    <Skeleton containerClassName="add-team-img-skeleton" />
                    </Col>
                    </Row>
                    <Row>
                    <Col sm={12}>
                    <Skeleton />
                    <Skeleton/>

                    <Skeleton/>
                </Col>
                   </Row>
                        
                         
                    
            </Row>
     
        
        

</div>
    
  )
}

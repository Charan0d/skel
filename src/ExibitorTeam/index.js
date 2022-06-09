import React from 'react';
import "./index.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function ExhibitorTeam() {
  return (
    <div >
        <Row className="exteam-loader">
            <Row>
        <Col  sm={10} className="ps-0">
                    <Skeleton containerClassName="exteam-img-skeleton" />
                    </Col>

                    <Col sm={2}>
                    <Skeleton  containerClassName='delete-icon-skeleton'/>
                    

                    
                </Col>

                    </Row>
                    <Row>
                    <Col sm={12}>
                    <Skeleton />
                    <Skeleton/>

                    
                </Col>

                
                
                   </Row>
                        
                   <Row>
                    <Col sm={12}>
                    <Skeleton  containerClassName='footer-skeleton'/>
                   
                </Col>
                   </Row>     
                    


            </Row>
     
        
        

</div>
    
  )
}

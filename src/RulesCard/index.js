

import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";

const RulesCard = () => {
    return (  


	
		<Row className="Rules-card-loader">
				<Col sm={3} lg={6} className="ps-0">
					<Skeleton containerClassName="img-skeleton" />
				</Col>
				
			</Row>
    );
}
 
export default RulesCard;
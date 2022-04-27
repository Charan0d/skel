import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";

const  MeetingCard = () => {
	return (
		<>
		mc

		<Row className="meeting-card-loader">
				<Col sm="auto" className="ps-0">
					<div className="heading-container">
				<Skeleton containerClassName="meeting-name-skeleton1"/>
				<Skeleton containerClassName="meeting-name-skeleton2"/>
				
					</div>
				</Col>
			
						<Col sm="auto">
							<div className="sub-heading-container">
						
							<Skeleton containerClassName="meeting-sub-skeleton1"/>
							<Skeleton containerClassName="meeting-sub-skeleton2"/>				
							</div>
						</Col>
						<Col lg={6}>
							<div className="button-container">
							<Skeleton containerClassName="meeting-button-skeleton" />
						
							<Skeleton containerClassName="meeting-button-skeleton" />
				
						</div>
						</Col>


	
					
			</Row>
			</>
		);
	};

export default MeetingCard;

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
				<Col sm={4} className="ps-0">
					<div className="heading-container">
				<Skeleton containerClassName="meeting-name-skeleton1"/>
				<Skeleton containerClassName="meeting-name-skeleton2"/>
					</div>
				</Col>
			
						<Col sm={4}>
							<div className="sub-heading-container">
							<Skeleton containerClassName="meeting-name-skeleton3 " />
						
							<Skeleton containerClassName="meeting-name-skeleton4" />
							</div>
						</Col>
						<Col sm={4}>
							<div className="button-container">
							<Skeleton containerClassName="meeting-button-skeleton" />
						
							<Skeleton containerClassName="meeting-button-skeleton" />
						mc
						</div>
						</Col>


	
					
			</Row>
			</>
		);
	};

export default MeetingCard;

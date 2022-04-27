import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";

const PeopleLoader = () => {
	return (
		<Row className="people-card-loader">
		<Col sm="auto" className="ps-0">
			<Skeleton containerClassName="people-card-img-skeleton" />
		</Col>
		<Col  className="people-card-right-area">
			<Row className="people-card-name-holder">
				<Col sm={6}>
					<Skeleton containerClassName="people-card-name-skeleton " />
					<Skeleton containerClassName="people-card-name-skeleton" />
					<Skeleton containerClassName="people-card-name-skeleton " />
				</Col>
				<div className="people-card-icon-holder">
				<Skeleton containerClassName="people-card-icon-skeleton" />
					<Skeleton containerClassName="people-card-icon-skeleton" />
				
				</div>
			</Row>
			<div className="people-card-action-holder">
		
				<Skeleton containerClassName="people-card-button-skeleton" />
				<Skeleton containerClassName="people-card-button-skeleton" />
				
			</div>
		</Col>
	</Row>
);
};


export default PeopleLoader;

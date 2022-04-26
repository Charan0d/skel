import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";

const PeopleNote= () => {
	return (
		<Row className="people-note-loader">
		<Col sm="auto" className="ps-0">
			<Skeleton containerClassName="people-note-img-skeleton" />
		</Col>
		<Col  className="people-note-right-area">
			<Row className="people-note-name-holder">
				<Col sm={4}>
					<Skeleton containerClassName="people-note-name-skeleton " />
					<Skeleton containerClassName="people-note-name-skeleton" />
			<Skeleton containerClassName="people-note-name-skeleton " />
				</Col>
				<Col sm={6}>
				<div className="people-note-icon-holder">
				<Skeleton containerClassName="people-note-icon-skeleton" />
					
					<Skeleton containerClassName="people-note-icon-skeleton" />
				</div>
				</Col>
			</Row>
			<div className="people-note-action-holder">
		
				<Skeleton containerClassName="people-note-button-skeleton" />
				
				
			</div>
		</Col>
	</Row>
);
};

export default PeopleNote;

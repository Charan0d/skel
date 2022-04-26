import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";

const ExhibitorNote = () => {
	return (
		<Row className="Exhibitor-note-loader">
			
			<Col sm={9} lg={12} className="Exhibitor-note-right-area">
				<Row className="exhibitor-note-name-holder">
					<Col sm={4}>
						<Skeleton containerClassName="Exhibitor-note-name-skeleton" />
					
				
					</Col>
en
					<Col sm={6}>
					<div className="Exhibitor-note-icon-holder">
						<Skeleton containerClassName="Exhibitor-note-icon-skeleton" />
						<Skeleton containerClassName="Exhibitor-note-icon-skeleton" />
						</div>
						</Col>
						
				</Row>
				<Row>
				<Col>
						<div className="Exhibitor-note-action-holder">
						<Skeleton containerClassName="Exhibitor-note-name-skeleton-box" />
						
						
					</div>
					</Col>
					</Row>
			</Col>
		</Row>
	);
};



export default ExhibitorNote;

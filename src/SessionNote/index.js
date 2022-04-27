import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";

const SessionNote = () => {
	return (
		<Row className="session-note-loader">
			
			<Col sm={9} lg={12} className="session-note-right-area">
				<Row className="session-note-name-holder">
					<Col sm={4}>
						<Skeleton containerClassName="session-note-name-skeleton" />
						<Skeleton containerClassName="session-note-name-skeleton" />
						
                        
					</Col>

					<Col sm={2}>
					<div className="session-note-icon-holder">
						<Skeleton containerClassName="session-note-icon-skeleton" />
						<Skeleton containerClassName="session-note-icon-skeleton" />
						</div>
						</Col>
						
				</Row>
				<Row>
				<Col>
						<div className="session-note-action-holder">
						<Skeleton containerClassName="session-note-name-skeleton-box" />
						
						
					</div>
					</Col>
					</Row>
			</Col>
		</Row>
	);
};

export default SessionNote;

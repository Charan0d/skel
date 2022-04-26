import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";

const SessionLoader = () => {
	return (
		<Row className="session-card-loader">
			<Col sm={12} lg={12} className="ps-0">
				<Skeleton containerClassName="session-card-img-skeleton" />
			</Col>
			<Col sm={9} lg={6}>
				<Row>
					
					<Col sm={6}>
						<Skeleton containerClassName="session-card-name-skeleton" />
						<Skeleton containerClassName="session-card-name-skeleton" />
		
                    sc
					</Col>
					<Col sm={4}>
					<div className="session-card-icon-holder">
						<Skeleton containerClassName="session-card-icon-skeleton" />
						<Skeleton containerClassName="session-card-icon-skeleton" />
					
					</div>
					</Col>
				</Row>

			</Col>
		</Row>
	);
};

export default SessionLoader;

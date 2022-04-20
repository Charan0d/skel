import React from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";

const ExhibitorLoader = () => {
	return (
		<Row className="exhibitor-card-loader">
			<Col sm={3} lg={6} className="ps-0">
				<Skeleton containerClassName="img-skeleton" />
			</Col>
			<Col sm={9} lg={6} className="right-area">
				<Row className="name-holder">
					<Col sm={6}>
						<Skeleton containerClassName="name-skeleton " />
						<Skeleton containerClassName="name-skeleton" />
					</Col>
					<dic className="icon-holder">
						<Skeleton containerClassName="icon-skeleton" />
						<Skeleton containerClassName="icon-skeleton" />
					</dic>
				</Row>
				<div className="action-holder">
					<Skeleton containerClassName="button-skeleton" />

					<Skeleton containerClassName="button-skeleton" />
				</div>
			</Col>
		</Row>
	);
};

export default ExhibitorLoader;

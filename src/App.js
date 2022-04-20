import ExhibiorLoader from "./ExhibitorLoader";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
	return (
		<Container className="App">
			<Row>
				<Col sm={6}>
					<ExhibiorLoader />
				</Col>
				<Col sm={6}>
					<ExhibiorLoader />
				</Col>
				<Col sm={6}>
					<ExhibiorLoader />
				</Col>
				<Col sm={6}>
					<ExhibiorLoader />
				</Col>
			</Row>
		</Container>
	);
}

export default App;

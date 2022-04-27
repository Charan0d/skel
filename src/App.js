import ExhibiorLoader from "./ExhibitorLoader";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import PeopleLoader from "./PeopleLoader";
import SessionLoader from "./SessionLoader";
import ExhibitorNote from "./ExhibitorNote";
import SessionNote from "./SessionNote";
import PeopleNote from "./PeopleNote";
import MeetingCard from "./MeetingCard";

function App() {
	return (
		<Container className="App">
			<Row>
				<Col sm={6}>
					Exhibitor Card
					<ExhibiorLoader />
				</Col>
				<Col sm={6}>
					Exhibitor Card
					<ExhibiorLoader />
				</Col>
			</Row>
			<Row>
				<Col sm={6}>
					Exhibitor Note
					<ExhibitorNote />
				</Col>

				<Col sm={6}>
				
				</Col>

				<Col sm={8}>
					Meeting Card
					<MeetingCard />
				</Col>
			</Row>
			<Row>
				<Col sm={6}>
					People Loader card
					<PeopleLoader />
				</Col>
				<Col sm={6}>
					People Loader
					<PeopleLoader />
				</Col>
			</Row>
			<Row>
				<Col sm={4} lg={6}>
					Session note
					<SessionNote />
				</Col>

				<Col sm={4} lg={6}>
					
				</Col>
				<Col sm={6}>
					Session loader
					<SessionLoader />
				</Col>
			</Row>
			<Row>
				<Col sm={6}>
					Session loader
					<SessionLoader />
				</Col>
				<Col sm={8} >
					people note
					<PeopleNote />
				</Col>
			</Row>
			<Row>
				<Col sm={8}>
					people note
					<PeopleNote />
				</Col>
			</Row>
		</Container>
	);
}

export default App;

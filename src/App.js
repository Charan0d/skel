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
					<ExhibiorLoader />
				</Col>
				<Col sm={6}>
					<ExhibiorLoader />
				</Col>
				

		 <Col sm={6}>
					<ExhibitorNote/>

				</Col>
			

	
			
					<MeetingCard/>
					

				
				


			

				
					<Col sm={6}>	
					<PeopleLoader/>

				</Col>
					
				
		
				
				
				<Col sm={6}>	
					<PeopleLoader/>

				</Col>
					
			



			 <Col sm={6}>
					<SessionNote/>

				</Col>
			

				<Col sm={6}>
				

				</Col>
			

				<Col sm={6}>
					<SessionLoader/>

				</Col>
				<Col sm={6}>
					<SessionLoader/>

				</Col>
 




	<Col sm={6}>
				<PeopleNote/>

				</Col>
				<Col sm={6}>
				<PeopleNote/>

				</Col> 

				

			</Row>

			
		</Container>
	);
}

export default App;

// import ExhibiorLoader from "./ExhibitorLoader";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
// import PeopleLoader from "./PeopleLoader";
// import SessionLoader from "./SessionLoader";
// import ExhibitorNote from "./ExhibitorNote";
// import SessionNote from "./SessionNote";
// import PeopleNote from "./PeopleNote";
// import MeetingCard from "./MeetingCard";
// import SessionMainCard from "./Sessionmaincard";
// import YourCard from "./YourCard";
// import Playercard from "./Playerscard";
// import Rulescard from "./RulesCard";
// import SpeakerLoader from "./Speakerloader";
// import Pointercard from "./PointerCard";






import ExhibitorDashboard from './ex-dashboard';
import AddTeam from './AddTeam';
import ExhibitorTeam from './ExibitorTeam';
import PeopleDashboard from './PeopleDash';
import SessionDashboard from './SessionDash';


function App() {
	return (
		<div className="App">

		
			 {/* <Row> 
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

				<Col lg={12}>
				Sessionmaincard
					<SessionMainCard />
				</Col>




				<Col lg={12}>
			yourcard
					<YourCard />
				</Col>

		 <Col sm={8} >

		 playercard
				<Playercard/>
			
					</Col> 




					<Col sm={8} >

pointercard
	   <Pointercard/>
   
		   </Col> 




					 <Col sm={6}>
				rules/download
					<Rulescard/>
				</Col> 

				<Col sm={8}>
				Speakerloader
					<SpeakerLoader/>
				</Col> 

</Row> */}



	<Col lg={12}>
				ex-databaodrd
<ExhibitorDashboard/>
addteam
<AddTeam/>
ex-team
<ExhibitorTeam/>
peopledash
<PeopleDashboard/>
sessiondash
<SessionDashboard/>



	</Col>			
	


</div>
				

			

	);
}

export default App;

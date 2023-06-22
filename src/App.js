import { Activity } from "./componets/Activity";
import { DataTable } from "./componets/DataTable";
import { HeroPanel } from "./componets/HeroPanel";
import { Notification } from './componets/Notification'
import { Action } from "./componets/Action";


import { Container, Row, Col, ButtonGroup } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Filter from "./componets/Filter";

export default function App() {
  return <div className="App">

    <Container>

      <HeroPanel />
      <h2 className="mb-5">Activity</h2>
      <Row className="bg-white p-3 br-15">
        <Col sm={2}>
          <Activity color="#30718c" bgcolor="#f7f7f7" />
        </Col>
        <Col sm={6}>
          <Action />
        </Col>
        <Col sm={4}><p>
          <Notification />
        </p></Col>
      </Row>
      <h2 className="mt-5 mb-5">Data Table</h2>
      <Row className="bg-white br-15">
        <Col>
          <DataTable />
        </Col>
      </Row>
    </Container>
  </div>;
}

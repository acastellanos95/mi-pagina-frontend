import Styles from './expertise.module.css';
import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import classnames from 'classnames';

export default function Expertise(){
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return(
    <div className={Styles.container}>
      <Nav tabs style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"
      }}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Languages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Technologies
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Knowledge
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className={Styles.tabDisplayWrapper}>
            <h5>
              C\C++14/Fortran95
            </h5>
            <h5>
              Python 3.7
            </h5>
            <h5>
              HTML/CSS/Javascript
            </h5>
            <h5>
              C#
            </h5>
            <h5>
              PHP
            </h5>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div className={Styles.tabDisplayWrapper}>
            <h5>
              MERN stack
            </h5>
            <h5>
              Next.js 
            </h5>
            <h5>
              Strapi/Wordpress 
            </h5>
            <h5>
              SQL/mongoDB 
            </h5>
          </div>
          <div className={Styles.tabDisplayWrapper}>
            <h5>
              Firebase/GCP/Heroku
            </h5>
            <h5>
              Pandas/Matplotlib/Seaborn 
            </h5>
            <h5>
              Geant4 GROMACS
            </h5>
          </div>
        </TabPane>
        <TabPane tabId="3">
          <div className={Styles.tabDisplayWrapper}>
            <h5>
              Physics
            </h5>
            <h5>
              Graphs
            </h5>
            <h5>
              Data Structures/Algorithms
            </h5>
            <h5>
              Computational Physics
            </h5>
          </div>
          <div className={Styles.tabDisplayWrapper}>
            <h5>
              Data analysis
            </h5>
            <h5>
              Molecular Simulation
            </h5>
            <h5>
              Simulation Theory
            </h5>
          </div>
        </TabPane>
      </TabContent>
    </div>
  )
}
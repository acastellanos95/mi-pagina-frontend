import Styles from './expertise.module.css';
import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import classnames from 'classnames';
import Tabtext from './tabtext';

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
        fontSize: "0.8rem",
        fontWeight: "600"
      }}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            style={{
              color: "black"
            }}
          >
            Languages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
            style={{
              color: "black"
            }}
          >
            Technologies
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
            style={{
              color: "black"
            }}
          >
            Knowledge
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className={Styles.tabDisplayWrapper}>
            <Tabtext>
              C\C++14
            </Tabtext>
            <Tabtext>
              Python3
            </Tabtext>
            <Tabtext>
              HTML/CSS/JS
            </Tabtext>
            <Tabtext>
              C#
            </Tabtext>
            <Tabtext>
              PHP
            </Tabtext>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div className={Styles.tabDisplayWrapper}>
            <Tabtext>
              MERN
            </Tabtext>
            <Tabtext>
              Next.js
            </Tabtext>
            <Tabtext>
              Strapi/Wordpress
            </Tabtext>
            <Tabtext>
              SQL/mongoDB 
            </Tabtext>
            <Tabtext>
              Firebase/GCP/Heroku
            </Tabtext>
            <Tabtext>
              Pandas
            </Tabtext>
            <Tabtext>
              Matplotlib/Seaborn 
            </Tabtext>
            <Tabtext>
              Geant4
            </Tabtext>
            <Tabtext>
              GROMACS
            </Tabtext>
          </div>
        </TabPane>
        <TabPane tabId="3">
          <div className={Styles.tabDisplayWrapper}>
            <Tabtext>
              Physics
            </Tabtext>
            <Tabtext>
              Graphs
            </Tabtext>
            <Tabtext>
              Data Structures/Algorithms
            </Tabtext>
            <Tabtext>
              Computational Physics
            </Tabtext>
            <Tabtext>
              Data analysis
            </Tabtext>
            <Tabtext>
              Molecular Simulation
            </Tabtext>
            <Tabtext>
              Simulation Theory
            </Tabtext>
          </div>
        </TabPane>
      </TabContent>
    </div>
  )
}
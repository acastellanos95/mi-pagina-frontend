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
              C#
            </Tabtext>
            <Tabtext>
              Python3
            </Tabtext>
            <Tabtext>
              HTML/CSS/JS
            </Tabtext>
            <Tabtext>
              SQL
            </Tabtext>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div className={Styles.tabDisplayWrapper}>
            <Tabtext>
              .NET
            </Tabtext>
            <Tabtext>
              Node.js
            </Tabtext>
            <Tabtext>
              MERN (Next.js + Strapi)
            </Tabtext>
            <Tabtext>
              SQL/noSQL 
            </Tabtext>
            <Tabtext>
              OpenMP + MPI + CUDA
            </Tabtext>
            <Tabtext>
              Pandas
            </Tabtext>
            <Tabtext>
              Matplotlib/Seaborn 
            </Tabtext>
          </div>
        </TabPane>
        <TabPane tabId="3">
          <div className={Styles.tabDisplayWrapper}>
            <Tabtext>
              High Performance Computing
            </Tabtext>
            <Tabtext>
              Public and Private Key Cryptography
            </Tabtext>
            <Tabtext>
              Graph Algorithms
            </Tabtext>
            <Tabtext>
              Data Structures/Algorithms
            </Tabtext>
            <Tabtext>
              Data analysis
            </Tabtext>
          </div>
        </TabPane>
      </TabContent>
    </div>
  )
}
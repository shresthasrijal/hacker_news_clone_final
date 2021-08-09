import React, { Fragment, useEffect, useState, Component } from "react";
import { getStoryIds} from "./services/hnApi";
import { StoriesContainer} from './containers/StoriesContainer';
import {TopContainer} from './containers/TopContainers';
import { BestContainer } from "./containers/BestContainers";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from 'styled-components';

export default class App extends Component{
  render() {
//export default function App() {
  
  const Box = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around
  `;

  
const Home = () => (
  <Fragment>
    <h2>Latest Stories</h2>
    <StoriesContainer/>
  </Fragment>
  );

const About = ({match:{params:{name}}}) => (
  <Fragment>
    <h2>Top Stories</h2>
    <TopContainer/>
  </Fragment>
);

const Contact = () => (
  <Fragment>
    <h2>Best Stories</h2>
    <BestContainer/>
  </Fragment>
  );

  return (
    <Router>
  
   <main>
   
     <nav>
      <Box>
      <h1>Hacker News Clone</h1>
      <div><Link to="/">Latest Stories</Link></div>
      <div><Link to={"/Top"}>Top Stories</Link></div>
      <div><Link to="/Best">Best Stories</Link></div>
      </Box>
     </nav>
   <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/Top"  component={About} />
     <Route path="/Best"  component={Contact} />
     <Route render={() => <h1>404: page not found</h1>} />
   </Switch>
    </main>
</Router>
  );
};
};

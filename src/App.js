import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './component/PageContents/Home/Home';
import Galerie from './component/PageContents/Galerie/Galerie';
import Evenimente from './component/PageContents/Evenimente/Evenimente';

const routes = (
  <Switch>
    <Route path="/evenimente" component={Evenimente} />
    <Route path="/galerie" component={Galerie} />
    <Route path="/home" exact component={Home} />
    <Route path="/" exact component={Home} />
    <Redirect to="/" />
  </Switch>
)

function App() {
  return (
      <Layout>
        {routes}
      </Layout>
  );
}

export default App;

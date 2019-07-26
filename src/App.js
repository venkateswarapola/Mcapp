import React from 'react';
import Navbar from './components/layouts/Navbar'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import CreateProject from './components/projects/CreateProject'
import CreatecopyProject from './components/projectscopy/CreatecopyProject'
import './App.css';
import Members from './components/dashboard/members';
import ControlledCarousel from './components/corosal/corosal';
import DemoCarousel from './components/corosal/corrosal';

function App() {
  return (
   <BrowserRouter>
   <div className="app">
     <Navbar />
     <Switch>
       <Route exact path='/' component={Dashboard} />
       <Route path='/members' component={Members} />
       <Route path='/mem' component={DemoCarousel} />
       <Route path='/project/:id' component={ProjectDetails} />
       <Route path='/create' component={CreateProject} />
       <Route path='/createcopy' component={CreatecopyProject} />
     </Switch>
   </div>
   </BrowserRouter>
  );
}

export default App;

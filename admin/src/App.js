import './App.css';
import React from 'react';
import Header from './components/header/header.component';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Sidebar from './components/siderbar/sidebar.component';
import Home from './components/home/home.component';
import Member from './components/member/member.component';
import EditMember from './components/member/editMember/editMember.component';
import NewMember from './components/member/newMember/newMember.component';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <div className="d-flex">
          <Sidebar/>
          <div className="others">
            <Route exact path='/' component={Home}/>
            <Route exact path='/member' component={Member}/>
            <Route exact path="/member/:memberId" component={EditMember}/>
            <Route exact path="/newmember" component={NewMember}/>


          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

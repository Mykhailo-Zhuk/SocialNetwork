import React, { Profiler } from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import SideBar from './components/SideBar/SideBar';


const App = (props) => {
    
  return (
          <div className = 'app-wrapper'>
            <Header />
            <Navbar state = {props.state.sideBar}/>
              <div className='app-wrapper-content'>
                  <Route path='/dialogs' 
                         render= { () => <Dialogs 
                         state = {props.state.dialogsPage} /> }/>

                  <Route path='/profile' 
                         render= { () => <Profile 
                            profilePage = {props.state.profilePage} 
                            addPost={props.addPost} />} 
                            updateNewPostText={props.updateNewPostText}/>

                  <Route path='/news' 
                         render= { () => <News />} />

                  <Route path='/music' 
                         render= { () => <Music />} />

                  <Route path='/settings' 
                         render= { () => <Settings />} />    
              </div>
          </div>
      );
}

export default App;

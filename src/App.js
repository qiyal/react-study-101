import React from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
    let dialogs = [
        { id: 1, name: 'Abay' },
        { id: 2, name: 'Dulat' },
        { id: 3, name: 'Nurbolat' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello'},
        { id: 3, message: 'mmm'}
    ]

    let posts = [
        { id: 1, message: 'post 1', likesCount: 0 },
        { id: 2, message: 'post 2', likesCount: 23 },
        { id: 3, message: 'post 3', likesCount: 45 },
        { id: 4, message: 'post 4', likesCount: 89 }
    ]

    return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar />
              <div className="app-wrapper-content">
                  <Route path="/profile" render={ () => <Profile posts={posts} /> } />
                  <Route path="/dialogs" render={ () => <Dialogs dialogs={dialogs} messages={messages} /> } />
              </div>
          </div>
      </BrowserRouter>
    );
}

export default App;

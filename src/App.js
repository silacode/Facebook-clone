
import React from 'react';
import './App.css';
import Feed from './comps/Feed';
import Header from "./comps/Header";
import Sidebar from "./comps/Sidebar";
import Widget from "./comps/Widget";
import Login from "./comps/Login"
import { useStateValue } from './StateProvider/StateProvider';



function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      
      {!user ? <Login />:
      (
        <>
        {/* Header */}
        <Header />

        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* {Widget} */}
          <Widget />
        </div>
        </>
      )
      }
      
     
      

    </div>
  );
}

export default App;

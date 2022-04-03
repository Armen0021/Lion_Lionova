import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar'
import Introduction from './Components/Introduction'
import About from './Components/About'
import Timeline from './Components/Timeline'
import Blog from "./Components/Blog"
import Projects from "./Components/Projects"

class App extends Component {
  render() {
    return(
      <div id="colorlib-page">
        <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
      <Introduction></Introduction> 
      <About></About>
      <Blog></Blog>
      <Projects></Projects>
      <Timeline></Timeline>
        </div>
        </div>
      </div>
    ) ;
  }
} 

export default App;
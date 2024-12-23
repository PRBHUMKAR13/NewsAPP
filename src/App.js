import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {


  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div >
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
        
      />
          <Navbar />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} key={"general"} country="us" category='general' />} />
            <Route path='/business' element={<News setProgress={this.setProgress} key={"business"} country="us" category='business' />} />
            <Route path='/technology' element={<News setProgress={this.setProgress} key={"technology"} country="us" category='technology' />} />
            <Route path='/sports' element={<News setProgress={this.setProgress} key={"sports"} country="us" category='sports' />} />
            <Route path='/science' element={<News setProgress={this.setProgress} key={"science"} country="us" category='science' />} />
            <Route path='/general' element={<News setProgress={this.setProgress} key={"general"} country="us" category='general' />} />
            <Route path='/health' element={<News setProgress={this.setProgress} key={"health"} country="us" category='health' />} />
            <Route path='/entertainment' element={<News setProgress={this.setProgress} key={"entertainment"}s country="us" category='entertainment' />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

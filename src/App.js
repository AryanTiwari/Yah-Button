import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';

class App extends Component {

// State of playing video
  state = {
    playing: false
  }

// Function to play video
  playSound() {
    return (
      <div>
        <video controls autoplay loop>
            <source 
            src={require('./media/vid.mp4')}
            type="video/mp4" 
            />
        </video>
      </div>
    )
  }

// Rendering
  render() {
    return (
      <div className="App">
        <h1> Yah </h1> 
        <Button type="primary" onClick={() => this.setState({ playing: true })}> Yah </Button>
        {this.state.playing && this.playSound()}
      </div>
    );
  }
}

export default App;
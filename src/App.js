import React, { Component } from 'react';
import './menu1.css';
import Menu1 from './BlueShark-Menu-1.svg';

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <img src={Menu1} alt="menu" class="menu-1"/>
    </div>
    );
  }
}

export default App;

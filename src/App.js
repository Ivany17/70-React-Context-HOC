import './App.css';
import React, { Component } from 'react';
import { UserContext, ThemeContext } from './context'
import Header from './components/Header';
import Tree from './components/Tree';
import CONSTANTS from './constants';
const {THEMES} = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme:THEMES.LIGHT,
      user: {
        id: 1,
        firstName: 'Johnny',
        lastName: 'Depp',
        imgSrc: 'https://nationaltoday.com/wp-content/uploads/2022/05/107-Johnny-Depp-640x514.jpg'
      }
    }
  }

  setTheme = (theme) => {this.setState({theme})}

  render() {
    const {user} = this.state;
    return <ThemeContext.Provider value={[theme, this.setTheme]}>
      <UserContext.Provider value={user}>
        <Header />
        <Tree />
      </UserContext.Provider>
    </ThemeContext.Provider>

  }
}

export default App;
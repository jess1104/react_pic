import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import { Switch, Route } from 'react-router-dom';
import './styles/style.css'
function App() {
  return (
    <div className="App">
      <Nav />
      {/* 用switch包住要切換的頁面 */}
      <Switch>
        {/* Route包住 */}
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/about' exact>
          <Aboutpage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
